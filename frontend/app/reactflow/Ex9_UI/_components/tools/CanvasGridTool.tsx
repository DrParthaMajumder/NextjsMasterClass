"use client";

import React from "react";

type CanvasGridToolProps = {
  enabled: boolean;
  onChange: (value: boolean) => void;
};

export function CanvasGridTool({ enabled, onChange }: CanvasGridToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Grid</span>
      <label className="inline-flex cursor-pointer items-center gap-1 text-[11px] text-slate-200">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
          className="h-3 w-3 rounded border border-slate-600 bg-slate-900 text-emerald-400"
        />
        <span>{enabled ? "On" : "Off"}</span>
      </label>
    </div>
  );
}
