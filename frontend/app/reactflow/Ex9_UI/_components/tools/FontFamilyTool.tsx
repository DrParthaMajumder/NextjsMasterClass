"use client";

import React from "react";

type FontFamilyToolProps = {
  value: string;
  onChange: (value: string) => void;
};

export function FontFamilyTool({ value, onChange }: FontFamilyToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-slate-400">Font family</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="system-ui, -apple-system, BlinkMacSystemFont, sans-serif">
          System
        </option>
        <option value="'Georgia', serif">Serif</option>
        <option value="'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">
          Monospace
        </option>
      </select>
    </div>
  );
}
