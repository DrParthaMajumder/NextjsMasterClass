"use client";

import React from "react";

type EdgeStyle = "solid" | "dashed" | "dotted";

type EdgeStyleToolProps = {
  value: EdgeStyle;
  onChange: (value: EdgeStyle) => void;
};

export function EdgeStyleTool({ value, onChange }: EdgeStyleToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Edge style</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as EdgeStyle)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
      </select>
    </div>
  );
}
