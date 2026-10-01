"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "article";
};

export default function ScrollReveal({ children, className, id, as = "div" }: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      id={id}
      className={className}
      // Keep server-rendered content visible before JavaScript loads.
      initial={{ opacity: 1, y: 0 }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
