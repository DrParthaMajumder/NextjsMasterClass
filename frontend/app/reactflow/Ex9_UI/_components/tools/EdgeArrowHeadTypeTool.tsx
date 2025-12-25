"use client";

import React from "react";

type EdgeArrowHeadType = "open" | "closed";

type EdgeArrowHeadTypeToolProps = {
  value: EdgeArrowHeadType;
  onChange: (value: EdgeArrowHeadType) => void;
};

export function EdgeArrowHeadTypeTool({
  value,
  onChange,
}: EdgeArrowHeadTypeToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Arrow type</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as EdgeArrowHeadType)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </select>
    </div>
  );
}
