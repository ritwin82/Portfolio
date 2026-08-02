import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/[.035] px-3 py-1.5 text-xs font-medium tracking-wide text-neutral-300 transition-colors duration-300 hover:border-white/40 hover:bg-white/[.07]",
        className
      )}
      {...props}
    />
  );
}
