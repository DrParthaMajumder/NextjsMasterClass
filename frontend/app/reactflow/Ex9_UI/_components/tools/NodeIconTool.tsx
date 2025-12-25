"use client";

import React from "react";

type NodeIconToolProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export function NodeIconTool({ value, onChange }: NodeIconToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Show icon</span>
      <label className="inline-flex cursor-pointer items-center gap-2 text-xs">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-3 w-3 rounded border border-slate-600 bg-slate-900 text-emerald-400 focus:ring-emerald-500"
        />
        <span className="text-slate-300">{value ? "On" : "Off"}</span>
      </label>
    </div>
  );
}
