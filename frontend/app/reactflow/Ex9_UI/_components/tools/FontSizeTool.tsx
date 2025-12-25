"use client";

import React from "react";

type FontSizeToolProps = {
  value: number;
  onChange: (value: number) => void;
};

export function FontSizeTool({ value, onChange }: FontSizeToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-slate-400">Font size</span>
      <input
        type="number"
        min={8}
        max={24}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 10)}
        className="h-7 w-16 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      />
    </div>
  );
}
