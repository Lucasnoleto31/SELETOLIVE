"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const dots = [
  { x: 5, y: 18, s: 2, o: 0.55, dur: 7.5, d: 0 },
  { x: 11, y: 70, s: 1.5, o: 0.4, dur: 9, d: 1.1 },
  { x: 18, y: 40, s: 2.5, o: 0.5, dur: 8, d: 0.6 },
  { x: 24, y: 85, s: 1.5, o: 0.35, dur: 10, d: 2 },
  { x: 30, y: 25, s: 2, o: 0.5, dur: 7, d: 1.5 },
  { x: 36, y: 60, s: 1.5, o: 0.4, dur: 9.5, d: 0.3 },
  { x: 42, y: 12, s: 2, o: 0.45, dur: 8.5, d: 2.2 },
  { x: 47, y: 78, s: 1.5, o: 0.4, dur: 7.8, d: 1 },
  { x: 9, y: 50, s: 1.5, o: 0.4, dur: 9, d: 1.8 },
  { x: 21, y: 8, s: 2, o: 0.5, dur: 8.2, d: 0.9 },
  { x: 33, y: 90, s: 2, o: 0.4, dur: 10, d: 0.2 },
  { x: 39, y: 38, s: 1.5, o: 0.45, dur: 7.6, d: 1.4 },
  { x: 3, y: 82, s: 2, o: 0.45, dur: 8.8, d: 0.5 },
  { x: 15, y: 30, s: 1.5, o: 0.4, dur: 9.2, d: 2.4 },
  { x: 27, y: 55, s: 2, o: 0.5, dur: 7.4, d: 0.7 },
  { x: 44, y: 48, s: 1.5, o: 0.4, dur: 9.6, d: 1.6 },
  { x: 50, y: 20, s: 2, o: 0.45, dur: 8.3, d: 1.2 },
  { x: 7, y: 38, s: 1.5, o: 0.35, dur: 9.1, d: 2.1 },
  { x: 19, y: 92, s: 2, o: 0.4, dur: 8.7, d: 0.4 },
  { x: 31, y: 72, s: 1.5, o: 0.4, dur: 7.9, d: 1.9 },
  { x: 41, y: 66, s: 2, o: 0.45, dur: 9.3, d: 0.8 },
  { x: 13, y: 14, s: 1.5, o: 0.4, dur: 8.6, d: 2.3 },
];

export function Particles({
  animate = true,
  className,
}: {
  animate?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const on = animate && !reduce;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {dots.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          initial={{ opacity: on ? 0 : p.o }}
          animate={on ? { opacity: [0, p.o, 0], y: [0, -26, 0] } : { opacity: p.o }}
          transition={
            on
              ? { duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.d }
              : undefined
          }
        />
      ))}
    </div>
  );
}
