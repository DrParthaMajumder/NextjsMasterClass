"use client";

import React from "react";

type EdgeSpeed = "slow" | "normal" | "fast";

type EdgeSpeedToolProps = {
  value: EdgeSpeed;
  onChange: (value: EdgeSpeed) => void;
};

export function EdgeSpeedTool({ value, onChange }: EdgeSpeedToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Speed</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as EdgeSpeed)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="slow">Slow</option>
        <option value="normal">Normal</option>
        <option value="fast">Fast</option>
      </select>
    </div>
  );
}
