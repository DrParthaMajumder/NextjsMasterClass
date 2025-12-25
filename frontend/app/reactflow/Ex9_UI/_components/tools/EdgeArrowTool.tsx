"use client";

import React from "react";

type EdgeArrow = "none" | "end" | "both";

type EdgeArrowToolProps = {
  value: EdgeArrow;
  onChange: (value: EdgeArrow) => void;
};

export function EdgeArrowTool({ value, onChange }: EdgeArrowToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Arrow</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as EdgeArrow)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="none">None</option>
        <option value="end">End only</option>
        <option value="both">Both ends</option>
      </select>
    </div>
  );
}
