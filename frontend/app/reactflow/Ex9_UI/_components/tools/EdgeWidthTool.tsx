"use client";

import React from "react";

type EdgeWidthToolProps = {
  value: number;
  onChange: (value: number) => void;
};

export function EdgeWidthTool({ value, onChange }: EdgeWidthToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Edge width</span>
      <input
        type="range"
        min={1}
        max={6}
        step={0.5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 1)}
        className="h-1 flex-1 cursor-pointer accent-emerald-400"
      />
      <span className="w-8 text-right text-[10px] text-slate-400">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
