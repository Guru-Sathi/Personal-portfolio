"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityDay {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  title?: string;
  variant?: "green" | "orange";
}

export const ActivityHeatmap = ({
  title = "Activity",
  variant = "green",
}: ActivityHeatmapProps) => {
  const [data, setData] = useState<ActivityDay[]>([]);

  useEffect(() => {
    const days: ActivityDay[] = [];
    const today = new Date();
    // Start from 364 days ago to have exactly 52 weeks + 1 day = 365 days
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];

      // Random activity count with higher probability of 0
      // 70% chance of 0, 30% chance of 1-4
      const count = Math.random() > 0.7 ? 0 : Math.floor(Math.random() * 4) + 1;

      days.push({ date: dateStr, count });
    }
    setData(days);
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return "bg-zinc-900"; // Empty

    if (variant === "orange") {
      if (count === 1) return "bg-orange-900/40"; // Low
      if (count === 2) return "bg-orange-700/60"; // Medium
      if (count === 3) return "bg-orange-500/80"; // High
      return "bg-orange-400"; // Very High
    }

    // Default green
    if (count === 1) return "bg-emerald-900/40"; // Low
    if (count === 2) return "bg-emerald-700/60"; // Medium
    if (count === 3) return "bg-emerald-500/80"; // High
    return "bg-emerald-400"; // Very High
  };

  if (data.length === 0) {
    return (
      <div className="flex flex-col gap-2 w-full h-full p-4 animate-pulse">
        <div className="h-4 w-24 bg-zinc-800 rounded"></div>
        <div className="flex-1 w-full bg-zinc-900/50 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-mono text-zinc-400">{title}</h3>
        <span className="text-xs font-mono text-zinc-500">Last 365 days</span>
      </div>

      <div className="flex-1 w-full overflow-x-auto pb-2 scrollbar-hide">
         {/* GitHub Contribution Graph Style Grid */}
        <div
          className="grid grid-rows-7 grid-flow-col gap-1 w-fit min-w-full"
        >
          {data.map((day, i) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.002, duration: 0.2 }}
              className={cn(
                "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[1px] sm:rounded-[2px]",
                getColor(day.count)
              )}
              title={`${day.date}: ${day.count} contributions`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
