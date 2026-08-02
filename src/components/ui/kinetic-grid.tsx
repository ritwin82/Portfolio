"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Point { x: number; y: number; }
interface Ripple { x: number; y: number; radius: number; opacity: number; born: number; }

const CELL_SIZE = 65;
const DOT_SPACING = 32;
const INFLUENCE_RADIUS = 260;
const MAX_WARP = 20;
const LERP_SPEED = 0.08;
const MAX_DEVICE_PIXEL_RATIO = 1.5;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function KineticGrid({ children, className }: { children?: ReactNode; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const targetRef = useRef<Point>({ x: -9999, y: -9999 });
  const ripplesRef = useRef<Ripple[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const rafRef = useRef(0);

  const draw = useCallback((now: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const { w, h } = sizeRef.current;
    const mouse = mouseRef.current;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(255,255,255,.025)";
    for (let x = DOT_SPACING / 2; x < w; x += DOT_SPACING) for (let y = DOT_SPACING / 2; y < h; y += DOT_SPACING) {
      ctx.beginPath(); ctx.arc(x, y, .7, 0, Math.PI * 2); ctx.fill();
    }

    const ripples = ripplesRef.current.filter((r) => {
      const age = (now - r.born) / 1000;
      r.radius = age * 400; r.opacity = Math.max(0, 1 - age * 1.2);
      return r.opacity > 0;
    });
    ripplesRef.current = ripples;
    const cols = Math.max(2, Math.ceil(w / CELL_SIZE)) + 1;
    const rows = Math.max(2, Math.ceil(h / CELL_SIZE)) + 1;
    const cw = w / (cols - 1), ch = h / (rows - 1);
    const points: Point[][] = [];
    const proximity: number[][] = [];

    for (let row = 0; row < rows; row++) {
      points[row] = []; proximity[row] = [];
      for (let col = 0; col < cols; col++) {
        const gx = col * cw, gy = row * ch;
        const dx = gx - mouse.x, dy = gy - mouse.y, dist = Math.hypot(dx, dy);
        const edge = Math.min(col / 1.5, (cols - 1 - col) / 1.5, row / 1.5, (rows - 1 - row) / 1.5, 1);
        const falloff = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
        const p = falloff * edge * edge;
        const amount = dist > 0 ? falloff * falloff * MAX_WARP * edge : 0;
        points[row][col] = { x: gx - (dx / Math.max(dist, 1)) * amount, y: gy - (dy / Math.max(dist, 1)) * amount };
        proximity[row][col] = p;
      }
    }
    const segment = (a: Point, b: Point, intensity: number) => {
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(255,255,255,${(.13 + intensity * .42).toFixed(3)})`;
      ctx.lineWidth = lerp(.8, 1.2, intensity); ctx.stroke();
    };
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols - 1; c++) segment(points[r][c], points[r][c + 1], (proximity[r][c] + proximity[r][c + 1]) / 2);
    for (let c = 0; c < cols; c++) for (let r = 0; r < rows - 1; r++) segment(points[r][c], points[r + 1][c], (proximity[r][c] + proximity[r + 1][c]) / 2);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const p = points[r][c], intensity = proximity[r][c];
      ctx.beginPath(); ctx.arc(p.x, p.y, lerp(1.8, 2.8, intensity), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(.2 + intensity * .65).toFixed(3)})`; ctx.fill();
    }
    for (const ripple of ripples) {
      ctx.beginPath(); ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${(ripple.opacity * .18).toFixed(3)})`; ctx.lineWidth = 1; ctx.stroke();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext("2d")) return;
    let isVisible = !document.hidden;
    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
      const width = Math.max(1, window.innerWidth);
      const height = Math.max(1, window.innerHeight);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const context = canvas.getContext("2d");
      context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      sizeRef.current = { w: width, h: height };
    };
    const move = (event: MouseEvent) => { targetRef.current = { x: event.clientX, y: event.clientY }; };
    const click = (event: MouseEvent) => { ripplesRef.current.push({ x: event.clientX, y: event.clientY, radius: 0, opacity: 1, born: performance.now() }); };
    const animate = (now: number) => {
      if (!isVisible) return;
      mouseRef.current.x = lerp(mouseRef.current.x, targetRef.current.x, LERP_SPEED);
      mouseRef.current.y = lerp(mouseRef.current.y, targetRef.current.y, LERP_SPEED);
      draw(now);
      rafRef.current = requestAnimationFrame(animate);
    };
    const visibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !rafRef.current) rafRef.current = requestAnimationFrame(animate);
      if (!isVisible) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; }
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("click", click, { passive: true });
    document.addEventListener("visibilitychange", visibilityChange);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
      document.removeEventListener("visibilitychange", visibilityChange);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [draw]);

  return <div className={cn("relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]", className)}><canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" /><div className="relative z-10 h-full w-full">{children}</div></div>;
}
