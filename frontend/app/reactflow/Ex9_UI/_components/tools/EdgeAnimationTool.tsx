"use client";

import React from "react";

type EdgeAnimationToolProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export function EdgeAnimationTool({ value, onChange }: EdgeAnimationToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Animate</span>
      <label className="inline-flex cursor-pointer items-center gap-1 text-[11px] text-slate-200">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-3 w-3 rounded border border-slate-600 bg-slate-900 text-emerald-400"
        />
        <span>{value ? "On" : "Off"}</span>
      </label>
    </div>
  );
}
