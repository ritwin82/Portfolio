import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline";
}

export function Button({ className, asChild = false, variant = "default", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:scale-[1.02] active:scale-[0.98]",
        variant === "default"
          ? "bg-white text-black hover:bg-neutral-200"
          : "border border-white/20 bg-transparent text-white hover:border-white/45 hover:bg-white/[.06]",
        className
      )}
      {...props}
    />
  );
}
