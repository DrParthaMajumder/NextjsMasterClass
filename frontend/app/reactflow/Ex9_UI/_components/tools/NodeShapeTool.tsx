"use client";

import React from "react";

type NodeShape = "rounded" | "square" | "circle";

type NodeShapeToolProps = {
  value: NodeShape;
  onChange: (value: NodeShape) => void;
};

export function NodeShapeTool({ value, onChange }: NodeShapeToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Node shape</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as NodeShape)}
        className="h-7 flex-1 rounded-md border border-slate-700 bg-slate-900 px-2 text-[11px] outline-none focus:border-emerald-400"
      >
        <option value="rounded">Rounded</option>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
    </div>
  );
}
