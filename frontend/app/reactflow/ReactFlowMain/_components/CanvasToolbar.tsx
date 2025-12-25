"use client";

import React from "react";
import { useReactFlow, type Edge, type Node } from "@xyflow/react";

export type CanvasToolbarProps = {
  showGrid: boolean;
  setShowGrid: (value: boolean) => void;
  showMiniMap: boolean;
  setShowMiniMap: (value: boolean) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onAutoLayout: () => void;
  onValidate: () => void;
  onExport: () => void;
  onImport: () => void;
  onDuplicateSelection: () => void;
  onLockSelection: () => void;
  onUnlockSelection: () => void;
  onDeleteSelection: () => void;
  hasSelection: boolean;
  nodes: Node[];
  selectedNodeIds: string[];
};

export default function CanvasToolbar({
  showGrid,
  setShowGrid,
  showMiniMap,
  setShowMiniMap,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onAutoLayout,
  onValidate,
  onExport,
  onImport,
  onDuplicateSelection,
  onLockSelection,
  onUnlockSelection,
  onDeleteSelection,
  hasSelection,
  nodes,
  selectedNodeIds,
}: CanvasToolbarProps) {
  const reactFlow = useReactFlow<Node, Edge>();

  const handleZoomIn = () => {
    reactFlow.zoomIn({ duration: 150 });
  };

  const handleZoomOut = () => {
    reactFlow.zoomOut({ duration: 150 });
  };

  const handleFitView = () => {
    reactFlow.fitView({ padding: 0.4, duration: 300 });
  };

  const handleResetView = () => {
    reactFlow.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 300 });
  };

  const handleCenterSelection = () => {
    if (!selectedNodeIds.length) return;
    const selection = nodes.filter((n) => selectedNodeIds.includes(n.id));
    if (!selection.length) return;
    reactFlow.fitView({ nodes: selection, padding: 0.8, duration: 300 });
  };

  return (
    <div className="absolute top-3 right-3 z-20 text-[11px] text-slate-100">
      <div className="flex flex-col gap-1 rounded-md border border-slate-700 bg-slate-900/95 px-3 py-2 shadow-lg shadow-black/40 min-w-[340px]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 mr-1">View</span>
            <button
              type="button"
              onClick={handleZoomOut}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              -
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleFitView}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              Fit
            </button>
            <button
              type="button"
              onClick={handleResetView}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleCenterSelection}
              disabled={!hasSelection}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Center sel
            </button>
          </div>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-700">
            <span className="text-slate-400 mr-1">Canvas</span>
            <label className="inline-flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                className="h-3 w-3 accent-emerald-400"
              />
              <span>Grid</span>
            </label>
            <label className="inline-flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={showMiniMap}
                onChange={(e) => setShowMiniMap(e.target.checked)}
                className="h-3 w-3 accent-emerald-400"
              />
              <span>Mini map</span>
            </label>
          </div>
        </div>

        <div className="h-px bg-slate-800 my-1" />

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 mr-1">Selection</span>
            <button
              type="button"
              onClick={onDuplicateSelection}
              disabled={!hasSelection}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Duplicate
            </button>
            <button
              type="button"
              onClick={onLockSelection}
              disabled={!hasSelection}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Lock
            </button>
            <button
              type="button"
              onClick={onUnlockSelection}
              disabled={!hasSelection}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Unlock
            </button>
            <button
              type="button"
              onClick={onDeleteSelection}
              disabled={!hasSelection}
              className="px-1.5 py-0.5 rounded bg-rose-600 hover:bg-rose-500 disabled:opacity-40"
            >
              Delete
            </button>
          </div>

          <div className="flex items-center gap-2 pl-3 border-l border-slate-700">
            <span className="text-slate-400 mr-1">Diagram</span>
            <button
              type="button"
              onClick={onUndo}
              disabled={!canUndo}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Undo
            </button>
            <button
              type="button"
              onClick={onRedo}
              disabled={!canRedo}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
            >
              Redo
            </button>
            <button
              type="button"
              onClick={onAutoLayout}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              Auto layout
            </button>
            <button
              type="button"
              onClick={onValidate}
              className="px-1.5 py-0.5 rounded bg-emerald-700 hover:bg-emerald-600"
            >
              Validate
            </button>
            <button
              type="button"
              onClick={onExport}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              Export
            </button>
            <button
              type="button"
              onClick={onImport}
              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
