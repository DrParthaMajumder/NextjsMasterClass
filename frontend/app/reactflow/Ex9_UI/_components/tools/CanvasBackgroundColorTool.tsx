"use client";

import React from "react";

type CanvasBackgroundColorToolProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CanvasBackgroundColorTool({
  value,
  onChange,
}: CanvasBackgroundColorToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Canvas bg</span>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-7 w-10 cursor-pointer rounded border border-slate-700 bg-slate-900 p-0"
      />
    </div>
  );
}
