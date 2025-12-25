"use client";

import React from "react";

type EdgeMarker = "none" | "point" | "square" | "diamond";

type EdgeMarkerToolProps = {
  value: EdgeMarker;
  onChange: (value: EdgeMarker) => void;
};

export function EdgeMarkerTool({ value, onChange }: EdgeMarkerToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Marker</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as EdgeMarker)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="none">None</option>
        <option value="point">Point</option>
        <option value="square">Square</option>
        <option value="diamond">Diamond</option>
      </select>
    </div>
  );
}
