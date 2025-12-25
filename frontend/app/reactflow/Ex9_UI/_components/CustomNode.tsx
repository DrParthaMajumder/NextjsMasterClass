/*
 * Custom node component used in the Ex9_UI React Flow example.
 * Renders a rotating Lucide icon with top and bottom connection handles.
 */
"use client";

import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Handle, Position, type NodeProps, useReactFlow } from "@xyflow/react";

export type NodeData = {
  label: string;
  Icon: LucideIcon;
  spin?: boolean;
  fontFamily?: string;
  fontColor?: string;
  fontSize?: number;
  nodeBackground?: string;
  nodeColor?: string;
  nodeSize?: number;
  nodeShape?: "rounded" | "square" | "circle";
  nodeBorderColor?: string;
  showIcon?: boolean;
};

export function CustomNode({ id, data, selected }: NodeProps) {
  const { setNodes } = useReactFlow();
  const [isEditing, setIsEditing] = useState(false);
  const [editLabel, setEditLabel] = useState("");

  const {
    label,
    Icon,
    spin = true,
    fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontColor = "#e5f4ff",
    fontSize = 10,
    nodeBackground = "#020617",
    nodeColor = "#22c55e",
    nodeSize = 56,
    nodeShape = "rounded",
    nodeBorderColor,
    showIcon = true,
  } = data as NodeData;

  const startEditing = () => {
    setIsEditing(true);
    setEditLabel(label);
  };

  const commitLabel = () => {
    const trimmed = editLabel.trim();
    const nextLabel = trimmed.length > 0 ? trimmed : label;

    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...(node.data as NodeData),
                label: nextLabel,
              } as NodeData,
            }
          : node,
      ),
    );

    setIsEditing(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-1">
      <Handle
        type="target"
        position={Position.Top}
        className="!w-1 !h-1 !bg-emerald-400"
      />
      <div
        className={`flex items-center justify-center shadow-lg shadow-emerald-500/30 ${
          nodeShape === "circle"
            ? "rounded-full"
            : nodeShape === "square"
              ? "rounded-none"
              : "rounded-xl"
        } ${selected ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900" : ""}`}
        style={{
          width: nodeSize,
          height: nodeSize,
          backgroundColor: nodeBackground,
          borderColor: nodeBorderColor ?? nodeColor,
          borderWidth: 1,
          borderStyle: "solid",
          color: "#e5f4ff",
        }}
      >
        {showIcon ? (
          <Icon className={spin ? "h-6 w-6 animate-spin" : "h-6 w-6"} />
        ) : isEditing ? (
          <input
            className="max-w-[140px] rounded border border-slate-700 bg-slate-900 px-1 text-center text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            style={{
              fontFamily,
              fontSize,
              fontWeight: 500 as React.CSSProperties["fontWeight"],
            }}
            value={editLabel}
            autoFocus
            onChange={(e) => setEditLabel(e.target.value)}
            onBlur={commitLabel}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                commitLabel();
              }
              if (e.key === "Escape") {
                e.preventDefault();
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <span
            className="max-w-[140px] cursor-text text-center leading-tight"
            style={{
              fontFamily,
              fontSize,
              color: fontColor,
              fontWeight: 500,
            }}
            onDoubleClick={startEditing}
          >
            {label}
          </span>
        )}
      </div>
      {showIcon &&
        (isEditing ? (
          <input
            className="max-w-[140px] rounded border border-slate-700 bg-slate-900 px-1 text-center text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            style={{
              fontFamily,
              fontSize,
              fontWeight: 500 as React.CSSProperties["fontWeight"],
            }}
            value={editLabel}
            autoFocus
            onChange={(e) => setEditLabel(e.target.value)}
            onBlur={commitLabel}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                commitLabel();
              }
              if (e.key === "Escape") {
                e.preventDefault();
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <span
            className="max-w-[140px] cursor-text text-center leading-tight"
            style={{
              fontFamily,
              fontSize,
              color: fontColor,
              fontWeight: 500,
            }}
            onDoubleClick={startEditing}
          >
            {label}
          </span>
        ))}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-1 !h-1 !bg-emerald-400"
      />
    </div>
  );
}
