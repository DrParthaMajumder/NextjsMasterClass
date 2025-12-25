"use client";

import React from "react";
import { Handle, Position, useReactFlow, type NodeProps } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";

export type IconNodeData = {
  label: string;
  Icon: LucideIcon;
  spin?: boolean;
  shape?: "circle" | "square" | "rounded";
  nodeBgColor?: string;
  borderColor?: string;
  fontColor?: string;
  fontFamily?: string;
  fontSize?: number;
};

export default function IconNode({ data, selected }: NodeProps) {
  const {
    label,
    Icon,
    spin = false,
    shape = "rounded",
    nodeBgColor = "#e5e7eb",
    borderColor = "#9ca3af",
    fontColor = "#111827",
    fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize = 12,
  } = data as IconNodeData;

  let shapeClass = "rounded-full";
  if (shape === "square") shapeClass = "rounded-none";
  else if (shape === "rounded") shapeClass = "rounded-xl";
  const { setNodes } = useReactFlow();
  const [isEditing, setIsEditing] = React.useState(false);
  const [draftLabel, setDraftLabel] = React.useState(label);

  const commitLabel = () => {
    const next = draftLabel.trim();
    const finalLabel = next.length ? next : label;
    setIsEditing(false);
    setNodes((nds) =>
      nds.map((n) =>
        (n as any).id === (data as any).id ||
        ((n.data as any)?.label === label && n === n)
          ? { ...n, data: { ...(n.data as any), label: finalLabel } }
          : n,
      ),
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-1">
      <Handle
        type="target"
        position={Position.Top}
        className="!w-1 !h-1 !bg-emerald-400"
      />
      <div
        className={`flex h-14 w-14 items-center justify-center ${shapeClass} shadow-lg shadow-emerald-500/30 ${
          selected
            ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900"
            : ""
        }`}
        style={{
          backgroundColor: nodeBgColor ?? "#020617",
          borderColor: borderColor ?? "#22c55e",
          borderWidth: 1,
          borderStyle: "solid",
          color: fontColor ?? "#a5f3fc",
        }}
      >
        <Icon className={spin ? "h-6 w-6 animate-spin" : "h-6 w-6"} />
      </div>
      {isEditing ? (
        <input
          className="max-w-[140px] text-center bg-slate-900/70 border border-emerald-400 rounded px-1 text-[10px] outline-none"
          style={{
            fontFamily:
              fontFamily ??
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: fontSize ?? 10,
            color: fontColor ?? "#e5f4ff",
            fontWeight: 500,
          }}
          value={draftLabel}
          autoFocus
          onChange={(e) => setDraftLabel(e.target.value)}
          onBlur={commitLabel}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commitLabel();
            } else if (e.key === "Escape") {
              setIsEditing(false);
              setDraftLabel(label);
            }
          }}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span
          className="max-w-[140px] text-center leading-tight cursor-text"
          style={{
            fontFamily:
              fontFamily ??
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: fontSize ?? 10,
            color: fontColor ?? "#e5f4ff",
            fontWeight: 500,
          }}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setDraftLabel(label);
            setIsEditing(true);
          }}
        >
          {label}
        </span>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-1 !h-1 !bg-emerald-400"
      />
    </div>
  );
}
