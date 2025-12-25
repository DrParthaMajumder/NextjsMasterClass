"use client";

import React from "react";

type NodeSizeToolProps = {
  value: number;
  onChange: (value: number) => void;
};

export function NodeSizeTool({ value, onChange }: NodeSizeToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Node size</span>
      <input
        type="range"
        min={40}
        max={96}
        step={4}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 56)}
        className="h-1 flex-1 cursor-pointer accent-emerald-400"
      />
      <span className="w-10 text-right text-[10px] text-slate-400">
        {value}px
      </span>
    </div>
  );
}
