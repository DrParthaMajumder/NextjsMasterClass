"use client";

import React from "react";

type DeleteNodesToolProps = {
  disabled: boolean;
  onDelete: () => void;
};

export function DeleteNodesTool({ disabled, onDelete }: DeleteNodesToolProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-slate-400">Delete nodes</span>
      <button
        type="button"
        onClick={onDelete}
        disabled={disabled}
        className={`px-3 py-1 rounded border text-xs transition-colors ${
          disabled
            ? "cursor-not-allowed border-slate-800 bg-slate-900 text-slate-600"
            : "border-red-500/60 bg-red-500/10 text-red-300 hover:bg-red-500/20"
        }`}
      >
        Delete
      </button>
    </div>
  );
}
