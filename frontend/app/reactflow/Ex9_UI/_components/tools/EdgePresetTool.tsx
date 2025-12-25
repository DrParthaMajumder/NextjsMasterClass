"use client";

import React from "react";

type EdgePreset = "primary" | "feedback";

type EdgePresetToolProps = {
  value: EdgePreset;
  onChange: (value: EdgePreset) => void;
};

export function EdgePresetTool({ value, onChange }: EdgePresetToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Preset</span>
      <div className="flex gap-1 text-[11px]">
        <button
          type="button"
          onClick={() => onChange("primary")}
          className={`rounded px-2 py-1 border text-xs ${
            value === "primary"
              ? "border-emerald-400 bg-emerald-500/10 text-emerald-300"
              : "border-slate-700 bg-slate-900 text-slate-300"
          }`}
        >
          Primary
        </button>
        <button
          type="button"
          onClick={() => onChange("feedback")}
          className={`rounded px-2 py-1 border text-xs ${
            value === "feedback"
              ? "border-orange-400 bg-orange-500/10 text-orange-300"
              : "border-slate-700 bg-slate-900 text-slate-300"
          }`}
        >
          Feedback
        </button>
      </div>
    </div>
  );
}
