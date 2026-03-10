"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityDay {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  title?: string;
  variant?: "green" | "orange";
  data: ActivityDay[];
}

export const ActivityHeatmap = ({
  title = "Activity",
  variant = "green",
  data,
}: ActivityHeatmapProps) => {

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

  if (!data || data.length === 0) {
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
        <h3 className="text-xl font-semibold text-zinc-200 capitalize">{title}</h3>
        <span className="text-xs font-mono text-zinc-500">{new Date().getFullYear()}</span>
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
