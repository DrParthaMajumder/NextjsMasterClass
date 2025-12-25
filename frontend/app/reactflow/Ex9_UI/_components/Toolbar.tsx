"use client";

import React from "react";
import { FontFamilyTool } from "./tools/FontFamilyTool";
import { FontColorTool } from "./tools/FontColorTool";
import { FontSizeTool } from "./tools/FontSizeTool";
import { NodeBackgroundTool } from "./tools/NodeBackgroundTool";
import { NodeShapeTool } from "./tools/NodeShapeTool";
import { NodeSizeTool } from "./tools/NodeSizeTool";
import { NodeBorderTool } from "./tools/NodeBorderTool";
import { NodeIconTool } from "./tools/NodeIconTool";
import { DeleteNodesTool } from "./tools/DeleteNodesTool";
import { EdgeAnimationTool } from "./tools/EdgeAnimationTool";
import { EdgeMarkerTool } from "./tools/EdgeMarkerTool";
import { EdgeWidthTool } from "./tools/EdgeWidthTool";
import { EdgeColorTool } from "./tools/EdgeColorTool";
import { EdgeStyleTool } from "./tools/EdgeStyleTool";
import { EdgePresetTool } from "./tools/EdgePresetTool";
import { EdgeArrowTool } from "./tools/EdgeArrowTool";
import { EdgeSpeedTool } from "./tools/EdgeSpeedTool";
import { EdgeMarkerColorTool } from "./tools/EdgeMarkerColorTool";
import { EdgeArrowHeadTypeTool } from "./tools/EdgeArrowHeadTypeTool";
import { EdgeArrowHeadColorTool } from "./tools/EdgeArrowHeadColorTool";
import { CanvasBackgroundColorTool } from "./tools/CanvasBackgroundColorTool";
import { CanvasGridTool } from "./tools/CanvasGridTool";

type ToolbarProps = {
  fontFamily: string;
  fontColor: string;
  fontSize: number;
  nodeBackground: string;
  nodeSize: number;
  nodeShape: "rounded" | "square" | "circle";
  nodeBorderColor: string;
  nodeShowIcon: boolean;
  canDeleteNodes: boolean;
  edgeAnimated: boolean;
  edgeMarker: "none" | "point" | "square" | "diamond";
  edgeWidth: number;
  edgeColor: string;
  edgeStyle: "solid" | "dashed" | "dotted";
  edgePreset: "primary" | "feedback";
  edgeArrow: "none" | "end" | "both";
  edgeSpeed: "slow" | "normal" | "fast";
  edgeMarkerColor: string;
  edgeArrowHeadType: "open" | "closed";
  edgeArrowHeadColor: string;
  canvasBackgroundColor: string;
  canvasGridEnabled: boolean;
  onFontFamilyChange: (value: string) => void;
  onFontColorChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;
  onNodeBackgroundChange: (value: string) => void;
  onNodeSizeChange: (value: number) => void;
  onNodeShapeChange: (value: "rounded" | "square" | "circle") => void;
  onNodeBorderColorChange: (value: string) => void;
  onNodeShowIconChange: (value: boolean) => void;
  onDeleteNodes: () => void;
  onEdgeAnimatedChange: (value: boolean) => void;
  onEdgeMarkerChange: (value: "none" | "point" | "square" | "diamond") => void;
  onEdgeWidthChange: (value: number) => void;
  onEdgeColorChange: (value: string) => void;
  onEdgeStyleChange: (value: "solid" | "dashed" | "dotted") => void;
  onEdgePresetChange: (value: "primary" | "feedback") => void;
  onEdgeArrowChange: (value: "none" | "end" | "both") => void;
  onEdgeSpeedChange: (value: "slow" | "normal" | "fast") => void;
  onEdgeMarkerColorChange: (value: string) => void;
  onEdgeArrowHeadTypeChange: (value: "open" | "closed") => void;
  onEdgeArrowHeadColorChange: (value: string) => void;
  onCanvasBackgroundColorChange: (value: string) => void;
  onCanvasGridEnabledChange: (value: boolean) => void;
};

export function Toolbar({
  fontFamily,
  fontColor,
  fontSize,
  nodeBackground,
  nodeSize,
  nodeShape,
  nodeBorderColor,
  nodeShowIcon,
  canDeleteNodes,
  edgeAnimated,
  edgeMarker,
  edgeWidth,
  edgeColor,
  edgeStyle,
  edgePreset,
  edgeArrow,
  edgeSpeed,
  edgeMarkerColor,
  edgeArrowHeadType,
  edgeArrowHeadColor,
  canvasBackgroundColor,
  canvasGridEnabled,
  onFontFamilyChange,
  onFontColorChange,
  onFontSizeChange,
  onNodeBackgroundChange,
  onNodeSizeChange,
  onNodeShapeChange,
  onNodeBorderColorChange,
  onNodeShowIconChange,
  onDeleteNodes,
  onEdgeAnimatedChange,
  onEdgeMarkerChange,
  onEdgeWidthChange,
  onEdgeColorChange,
  onEdgeStyleChange,
  onEdgePresetChange,
  onEdgeArrowChange,
  onEdgeSpeedChange,
  onEdgeMarkerColorChange,
  onEdgeArrowHeadTypeChange,
  onEdgeArrowHeadColorChange,
  onCanvasBackgroundColorChange,
  onCanvasGridEnabledChange,
}: ToolbarProps) {
  return (
    <div className="flex flex-col gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="font-semibold text-slate-100">Agent UI Toolbar</span>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">
          Tools
        </span>
      </div>
      <div className="flex gap-3 text-xs text-slate-100">
        {/* Canvas group */}
        <div className="flex flex-col gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Canvas
          </span>
          <div className="flex flex-col gap-1">
            <CanvasBackgroundColorTool
              value={canvasBackgroundColor}
              onChange={onCanvasBackgroundColorChange}
            />
            <CanvasGridTool
              enabled={canvasGridEnabled}
              onChange={onCanvasGridEnabledChange}
            />
          </div>
        </div>

        {/* Font group */}
        <div className="flex flex-col gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Font
          </span>
          <div className="flex flex-col gap-1">
            <FontFamilyTool value={fontFamily} onChange={onFontFamilyChange} />
            <FontColorTool value={fontColor} onChange={onFontColorChange} />
            <FontSizeTool value={fontSize} onChange={onFontSizeChange} />
          </div>
        </div>

        {/* Node group */}
        <div className="flex flex-col gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Node
          </span>
          <div className="flex flex-col gap-1">
            <NodeBackgroundTool
              value={nodeBackground}
              onChange={onNodeBackgroundChange}
            />
            <NodeBorderTool
              value={nodeBorderColor}
              onChange={onNodeBorderColorChange}
            />
            <NodeShapeTool value={nodeShape} onChange={onNodeShapeChange} />
            <NodeSizeTool value={nodeSize} onChange={onNodeSizeChange} />
            <NodeIconTool
              value={nodeShowIcon}
              onChange={onNodeShowIconChange}
            />
            <DeleteNodesTool
              disabled={!canDeleteNodes}
              onDelete={onDeleteNodes}
            />
          </div>
        </div>

        {/* Edge group */}
        <div className="flex flex-col gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Edge
          </span>
          <div className="flex flex-col gap-1">
            <EdgeAnimationTool
              value={edgeAnimated}
              onChange={onEdgeAnimatedChange}
            />
            <EdgeSpeedTool value={edgeSpeed} onChange={onEdgeSpeedChange} />
            <EdgeMarkerTool value={edgeMarker} onChange={onEdgeMarkerChange} />
            <EdgeMarkerColorTool
              value={edgeMarkerColor}
              onChange={onEdgeMarkerColorChange}
            />
            <EdgeArrowHeadTypeTool
              value={edgeArrowHeadType}
              onChange={onEdgeArrowHeadTypeChange}
            />
            <EdgeArrowHeadColorTool
              value={edgeArrowHeadColor}
              onChange={onEdgeArrowHeadColorChange}
            />
            <EdgeWidthTool value={edgeWidth} onChange={onEdgeWidthChange} />
            <EdgeColorTool value={edgeColor} onChange={onEdgeColorChange} />
            <EdgeStyleTool value={edgeStyle} onChange={onEdgeStyleChange} />
            <EdgeArrowTool value={edgeArrow} onChange={onEdgeArrowChange} />
            <EdgePresetTool value={edgePreset} onChange={onEdgePresetChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
