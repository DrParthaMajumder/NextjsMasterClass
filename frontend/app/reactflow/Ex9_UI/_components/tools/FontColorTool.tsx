"use client";

import React from "react";

type FontColorToolProps = {
  value: string;
  onChange: (value: string) => void;
};

export function FontColorTool({ value, onChange }: FontColorToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-slate-400">Font color</span>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-7 w-10 cursor-pointer rounded border border-slate-700 bg-slate-900 p-0"
      />
    </div>
  );
}
