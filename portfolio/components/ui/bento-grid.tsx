"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "creative" | "ghost";
}) => {
  const variants = {
    default: "bg-zinc-950 border-zinc-800 hover:border-zinc-700",
    creative: "bg-zinc-950 border-zinc-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    ghost: "bg-transparent border-transparent hover:bg-zinc-900/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 shadow-none p-4 border justify-between flex flex-col space-y-4",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const SkillTag = ({
  children,
  variant = "default",
  glowing = false,
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  glowing?: boolean;
  className?: string;
}) => {
    const variants = {
        default: "bg-zinc-900/50 text-zinc-400 border-zinc-800",
        success: "bg-emerald-950/30 text-emerald-400 border-emerald-900/50",
        warning: "bg-amber-950/30 text-amber-400 border-amber-900/50",
        error: "bg-red-950/30 text-red-400 border-red-900/50",
    };

    const glowStyle = glowing
        ? "shadow-[0_0_12px_rgba(16,185,129,0.2)] border-emerald-500/40 text-emerald-300 bg-emerald-950/10"
        : "";

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 cursor-default font-mono",
        variants[variant],
        glowStyle,
        className
      )}
    >
      {children}
    </span>
  );
};
