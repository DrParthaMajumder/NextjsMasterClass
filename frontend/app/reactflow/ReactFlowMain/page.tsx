"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  useNodesState,
  useEdgesState,
  type Connection,
} from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import IconNode, { type IconNodeData } from "./_components/IconNode";
import DeletableEdge from "./_components/DeletableEdge";
import CanvasToolbar from "./_components/CanvasToolbar";
import {
  MousePointerClick,
  Type,
  MessageCircle,
  Layers,
  Network,
  Brain,
  Workflow,
  GitBranch,
  Gauge,
  Zap,
  Image as ImageIcon,
  Camera,
  Eye,
  Share2,
  Cpu,
  Sparkles,
  Boxes,
  Sigma,
} from "lucide-react";

import "@xyflow/react/dist/style.css";

// Simple aliases
export type FlowNode = Node;
export type FlowEdge = Edge;

// Predefined nodes roughly matching the AI Models diagram columns
export const nodeBaseStyle = {
  width: 140,
  height: 90,
  border: "none",
  background: "transparent",
};

const idsEqual = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// Explicit 2x4 grid layout for each model header
const modelLayout: Record<string, { col: number; row: number }> = {
  LLM: { col: 0, row: 0 },
  LCM: { col: 1, row: 0 },
  LAM: { col: 2, row: 0 },
  MoE: { col: 3, row: 0 },
  VLM: { col: 0, row: 1 },
  SLM: { col: 1, row: 1 },
  MLM: { col: 2, row: 1 },
  SAM: { col: 3, row: 1 },
};

// Column and row spacing in canvas coordinates
const COLUMN_WIDTH = 360;
// We still keep a notional row height, but use explicit Y positions for clarity
const ROW_HEIGHT = 900;

const baseXForCol = (col: number) => col * COLUMN_WIDTH - 1.5 * COLUMN_WIDTH;
// Row 0 (top) is centered around -450; row 1 (bottom) is pushed well below
const baseYForRow = (row: number) => (row === 0 ? -450 : 750);

// Optional horizontal offsets for specific nodes (header + item index)
// to visually separate branches like in the reference diagram.
const horizontalOffset = (header: string, itemIndex: number): number => {
  switch (header) {
    case "LCM":
      if (itemIndex === 4) return -35; // advanced patterning left
      if (itemIndex === 5) return 35; // hidden process right
      return 0;
    case "LAM":
      if (itemIndex === 4) return -40; // action planning left
      if (itemIndex === 5) return 40; // memory system right
      if (itemIndex === 6) return 0; // quantization centered
      return 0;
    case "SLM":
      if (itemIndex === 3) return -35; // model quantization left
      if (itemIndex === 4) return 35; // memory optimization right
      return 0;
    case "MLM":
      if (itemIndex === 3) return -30; // left context left
      if (itemIndex === 4) return 30; // right context right
      return 0;
    case "SAM":
      if (itemIndex === 2) return -30; // prompt branch left
      if (itemIndex === 3) return 30; // image branch right
      return 0;
    case "MoE":
      // spread four experts horizontally
      if (itemIndex === 2) return -70; // expert 1
      if (itemIndex === 3) return -25; // expert 2
      if (itemIndex === 4) return 25; // expert 3
      if (itemIndex === 5) return 70; // expert 4
      return 0;
    case "VLM":
      // two inputs and two encoders side by side
      if (itemIndex === 0) return -30; // image input left
      if (itemIndex === 1) return 30; // text input right
      if (itemIndex === 2) return -30; // vision encoder left
      if (itemIndex === 3) return 30; // text encoder right
      return 0;
    default:
      return 0;
  }
};

type ColumnItem = {
  label: string;
  Icon: LucideIcon;
};

const nodeShouldSpin = (header: string, index: number): boolean => {
  switch (header) {
    case "LLM":
      // transformer
      return index === 3;
    case "LCM":
      // diffusion
      return index === 3;
    case "LAM":
      // feedback integration (already spinning)
      return index === 7;
    case "MoE":
      // weighted combination
      return index === 7;
    case "VLM":
      // multimodal processor
      return index === 5;
    case "SLM":
      // efficient transformer
      return index === 2;
    case "MLM":
      // bidirectional attention
      return index === 5;
    case "SAM":
      // mask decoder
      return index === 5;
    default:
      return false;
  }
};

const makeColumn = (header: string, items: ColumnItem[]): FlowNode[] => {
  const layout = modelLayout[header] ?? { col: 0, row: 0 };
  const headerX = baseXForCol(layout.col);
  const headerY = baseYForRow(layout.row);
  const nodes: FlowNode[] = [];

  // header node (text only)
  nodes.push({
    id: `${header}-header`,
    position: { x: headerX, y: headerY },
    data: { label: header },
    style: {
      width: 120,
      height: 40,
      borderRadius: 999,
      background: "#0f172a",
      color: "#38bdf8",
      border: "1px solid #38bdf8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      fontSize: 14,
    },
  });

  items.forEach((item, i) => {
    const offsetX = horizontalOffset(header, i);
    // vertical spacing below the header for the main chain
    const base = headerY + 110;
    let y = base + i * 110;

    // Custom positioning for LAM to better match the reference layout
    if (header === "LAM") {
      switch (i) {
        case 0: // input processing
          y = base + 0 * 110;
          break;
        case 1: // perception system
          y = base + 1 * 110;
          break;
        case 2: // intent recognition
          y = base + 2 * 110;
          break;
        case 3: // task breakdown (branch center)
          y = base + 3 * 110;
          break;
        case 4: // action planning (left)
        case 5: // memory system (right)
          y = base + 4 * 110; // same row for left/right children
          break;
        case 6: // quantization (below center)
          y = base + 5 * 110;
          break;
        case 7: // feedback integration (below quantization)
          y = base + 6 * 110;
          break;
        default:
          break;
      }
    }

    nodes.push({
      id: `${header}-${i}`,
      position: { x: headerX + offsetX, y },
      type: "iconNode",
      data: {
        label: item.label,
        Icon: item.Icon,
        spin: nodeShouldSpin(header, i),
      },
      style: nodeBaseStyle,
    });
  });

  return nodes;
};

const columns: { header: string; items: ColumnItem[] }[] = [
  {
    header: "LLM",
    items: [
      { label: "input", Icon: MousePointerClick },
      { label: "tokenization", Icon: Type },
      { label: "embedding", Icon: Layers },
      { label: "transformer", Icon: Cpu },
      { label: "output", Icon: MessageCircle },
    ],
  },
  {
    header: "LCM",
    items: [
      { label: "input", Icon: MousePointerClick },
      { label: "sentence segmentation", Icon: Type },
      { label: "SONAR embedding", Icon: Layers },
      { label: "diffusion", Icon: Zap },
      { label: "advanced patterning", Icon: Brain },
      { label: "hidden process", Icon: Boxes },
      { label: "quantization", Icon: Sigma },
      { label: "output", Icon: MessageCircle },
    ],
  },
  {
    header: "LAM",
    items: [
      { label: "input processing", Icon: MousePointerClick }, // 0
      { label: "perception system", Icon: Eye }, // 1
      { label: "intent recognition", Icon: Brain }, // 2
      { label: "task breakdown", Icon: Workflow }, // 3
      { label: "action planning", Icon: GitBranch }, // 4
      { label: "memory system", Icon: Boxes }, // 5
      { label: "quantization", Icon: Sigma }, // 6
      { label: "feedback integration", Icon: Share2 }, // 7
    ],
  },
  {
    header: "MoE",
    items: [
      { label: "input", Icon: MousePointerClick }, // 0
      { label: "router mechanism", Icon: Network }, // 1
      { label: "expert 1", Icon: Brain }, // 2
      { label: "expert 2", Icon: Brain }, // 3
      { label: "expert 3", Icon: Brain }, // 4
      { label: "expert 4", Icon: Brain }, // 5
      { label: "top-K selection", Icon: Gauge }, // 6
      { label: "weighted combination", Icon: Sparkles }, // 7
      { label: "output", Icon: MessageCircle }, // 8
    ],
  },
  {
    header: "VLM",
    items: [
      { label: "image input", Icon: ImageIcon }, // 0
      { label: "text input", Icon: Type }, // 1
      { label: "vision encoder", Icon: Camera }, // 2
      { label: "text encoder", Icon: MessageCircle }, // 3
      { label: "projection interface", Icon: Network }, // 4
      { label: "multimodal processor", Icon: Workflow }, // 5
      { label: "language model", Icon: Cpu }, // 6
      { label: "output generation", Icon: MessageCircle }, // 7
    ],
  },
  {
    header: "SLM",
    items: [
      { label: "input processing", Icon: MousePointerClick }, // 0
      { label: "compact tokenization", Icon: Type }, // 1
      { label: "efficient transformer", Icon: Cpu }, // 2
      { label: "model quantization", Icon: Sigma }, // 3
      { label: "memory optimization", Icon: Boxes }, // 4
      { label: "edge deployment", Icon: Network }, // 5
      { label: "output generation", Icon: MessageCircle }, // 6
    ],
  },
  {
    header: "MLM",
    items: [
      { label: "text input", Icon: Type }, // 0
      { label: "token masking", Icon: Layers }, // 1
      { label: "embedding layer", Icon: Layers }, // 2
      { label: "left context", Icon: GitBranch }, // 3
      { label: "right context", Icon: GitBranch }, // 4
      { label: "bidirectional attention", Icon: Brain }, // 5
      { label: "masked token prediction", Icon: Sparkles }, // 6
      { label: "feature representation", Icon: Sigma }, // 7
    ],
  },
  {
    header: "SAM",
    items: [
      { label: "prompt input", Icon: MousePointerClick }, // 0
      { label: "image input", Icon: ImageIcon }, // 1
      { label: "prompt encoder", Icon: Type }, // 2
      { label: "image encoder", Icon: Camera }, // 3
      { label: "image embedding", Icon: Layers }, // 4
      { label: "mask decoder", Icon: Workflow }, // 5
      { label: "feature correlation", Icon: Network }, // 6
      { label: "segmentation output", Icon: MessageCircle }, // 7
    ],
  },
];

const initialNodes: FlowNode[] = columns.flatMap((col) =>
  makeColumn(col.header, col.items),
);

// For some headers we don't want a straight vertical chain edge out of the branching node,
// because we add custom diagonal branch edges instead.
const shouldHaveVerticalEdge = (header: string, itemIndex: number): boolean => {
  switch (header) {
    case "LCM":
      // only indices 0->1, 1->2, 2->3 and 6->7 should have straight vertical edges
      return itemIndex <= 2 || itemIndex === 6;
    case "LAM":
      // only indices 0->1, 1->2, 2->3 have straight vertical edges
      return itemIndex < 3;
    case "SLM":
      // we'll define all SLM edges explicitly (no automatic vertical chain)
      return false;
    case "MLM":
      // embedding layer is index 2; it branches to left/right context.
      // We do NOT want an automatic edge from left context (3) to right context (4),
      // so we disable the chain at index 3 and define fan-in edges explicitly.
      return itemIndex !== 2 && itemIndex !== 3;
    case "MoE":
      // we'll define all MoE edges explicitly (no automatic vertical chain)
      return false;
    case "VLM":
      // only projection interface downwards is straight chain (4->5->6->7)
      return itemIndex >= 4;
    case "SAM":
      // we'll define all SAM edges explicitly (no automatic vertical chain)
      return false;
    default:
      return true;
  }
};

const initialEdges: FlowEdge[] = columns.flatMap((col, colIndex) => {
  const colEdges: FlowEdge[] = [];

  // chain down items (except where we intentionally branch)
  for (let i = 0; i < col.items.length - 1; i++) {
    if (!shouldHaveVerticalEdge(col.header, i)) continue;

    colEdges.push({
      id: `${col.header}-${i}-${i + 1}`,
      source: `${col.header}-${i}`,
      target: `${col.header}-${i + 1}`,
      type: "deletable",
      markerEnd: { type: MarkerType.ArrowClosed },
      style: {
        stroke: "#34d399",
        strokeWidth: 2,
        strokeDasharray: "4 4",
      },
      data: { variant: "straight" },
      animated: true,
    });
  }

  // Additional branching / merging edges per model to resemble the reference diagram
  switch (col.header) {
    case "LCM": {
      // diffusion -> advanced patterning, hidden process, quantization
      colEdges.push(
        {
          id: "LCM-diff-adv",
          source: "LCM-3", // diffusion
          target: "LCM-4", // advanced patterning
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LCM-diff-hidden",
          source: "LCM-3",
          target: "LCM-5", // hidden process
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LCM-adv-quant",
          source: "LCM-4", // advanced patterning
          target: "LCM-6", // quantization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LCM-hidden-quant",
          source: "LCM-5", // hidden process
          target: "LCM-6", // quantization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "VLM": {
      // VLM: image/text inputs -> respective encoders -> shared projection interface chain
      colEdges.push(
        // image input -> vision encoder
        {
          id: "VLM-image-vision",
          source: "VLM-0",
          target: "VLM-2",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // text input -> text encoder
        {
          id: "VLM-text-encoder",
          source: "VLM-1",
          target: "VLM-3",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // encoders -> projection interface (fan-in)
        {
          id: "VLM-vision-projection",
          source: "VLM-2",
          target: "VLM-4",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "VLM-text-projection",
          source: "VLM-3",
          target: "VLM-4",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "LAM": {
      // task breakdown -> action planning & memory system
      colEdges.push(
        {
          id: "LAM-task-action",
          source: "LAM-3", // task breakdown
          target: "LAM-4", // action planning
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LAM-task-memory",
          source: "LAM-3",
          target: "LAM-5", // memory system
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LAM-action-quant",
          source: "LAM-4", // action planning
          target: "LAM-6", // quantization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LAM-memory-quant",
          source: "LAM-5", // memory system
          target: "LAM-6", // quantization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LAM-quant-feedback",
          source: "LAM-6", // quantization
          target: "LAM-7", // feedback integration
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "LAM-memory-intent-feedback",
          source: "LAM-5", // memory system
          target: "LAM-2", // intent recognition (feedback loop)
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#f97316",
            strokeWidth: 2.4,
            strokeDasharray: "6 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "MoE": {
      // MoE: input -> router -> experts (fan-out) -> top-K -> weighted combination -> output
      colEdges.push(
        // input -> router mechanism
        {
          id: "MoE-input-router",
          source: "MoE-0",
          target: "MoE-1",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 2,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // router mechanism -> experts fan-out
        {
          id: "MoE-router-exp1",
          source: "MoE-1",
          target: "MoE-2",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-router-exp2",
          source: "MoE-1",
          target: "MoE-3",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-router-exp3",
          source: "MoE-1",
          target: "MoE-4",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-router-exp4",
          source: "MoE-1",
          target: "MoE-5",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // experts -> top-K selection fan-in
        {
          id: "MoE-exp1-topk",
          source: "MoE-2",
          target: "MoE-6",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-exp2-topk",
          source: "MoE-3",
          target: "MoE-6",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-exp3-topk",
          source: "MoE-4",
          target: "MoE-6",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-exp4-topk",
          source: "MoE-5",
          target: "MoE-6",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // top-K selection -> weighted combination -> output
        {
          id: "MoE-topk-weighted",
          source: "MoE-6",
          target: "MoE-7",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 2,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        {
          id: "MoE-weighted-output",
          source: "MoE-7",
          target: "MoE-8",
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 2,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "SLM": {
      // SLM: efficient transformer branches to model quantization & memory optimization,
      // both feed into edge deployment, then to output generation.
      colEdges.push(
        // efficient transformer -> model quantization
        {
          id: "SLM-eff-modelq",
          source: "SLM-2", // efficient transformer
          target: "SLM-3", // model quantization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // efficient transformer -> memory optimization
        {
          id: "SLM-eff-memoryopt",
          source: "SLM-2",
          target: "SLM-4", // memory optimization
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // model quantization -> edge deployment
        {
          id: "SLM-modelq-edge",
          source: "SLM-3", // model quantization
          target: "SLM-5", // edge deployment
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // memory optimization -> edge deployment
        {
          id: "SLM-memoryopt-edge",
          source: "SLM-4", // memory optimization
          target: "SLM-5", // edge deployment
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // edge deployment -> output generation
        {
          id: "SLM-edge-output",
          source: "SLM-5", // edge deployment
          target: "SLM-6", // output generation
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: { stroke: "#22c55e", strokeWidth: 2, strokeDasharray: "3 3" },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "MLM": {
      // MLM: embedding layer branches to left & right context,
      // both feed into bidirectional attention, then proceed downwards.
      colEdges.push(
        // embedding layer -> left context
        {
          id: "MLM-embed-left",
          source: "MLM-2", // embedding layer
          target: "MLM-3", // left context
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // embedding layer -> right context
        {
          id: "MLM-embed-right",
          source: "MLM-2",
          target: "MLM-4", // right context
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // left context -> bidirectional attention
        {
          id: "MLM-left-bidir",
          source: "MLM-3", // left context
          target: "MLM-5", // bidirectional attention
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // right context -> bidirectional attention
        {
          id: "MLM-right-bidir",
          source: "MLM-4", // right context
          target: "MLM-5", // bidirectional attention
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
    case "SAM": {
      // SAM: prompt path and image path both feed into image embedding,
      // which then branches to mask decoder and feature correlation,
      // both leading to segmentation output.
      colEdges.push(
        // prompt input -> prompt encoder
        {
          id: "SAM-prompt-to-enc",
          source: "SAM-0", // prompt input
          target: "SAM-2", // prompt encoder
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // image input -> image encoder
        {
          id: "SAM-image-to-enc",
          source: "SAM-1", // image input
          target: "SAM-3", // image encoder
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // prompt encoder -> image embedding
        {
          id: "SAM-promptemb-to-imgemb",
          source: "SAM-2", // prompt encoder
          target: "SAM-4", // image embedding
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // image encoder -> image embedding
        {
          id: "SAM-imgenc-to-imgemb",
          source: "SAM-3", // image encoder
          target: "SAM-4", // image embedding
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // image embedding -> mask decoder
        {
          id: "SAM-imgemb-to-mask",
          source: "SAM-4", // image embedding
          target: "SAM-5", // mask decoder
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // image embedding -> feature correlation
        {
          id: "SAM-imgemb-to-feature",
          source: "SAM-4",
          target: "SAM-6", // feature correlation
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // mask decoder -> segmentation output
        {
          id: "SAM-mask-to-output",
          source: "SAM-5", // mask decoder
          target: "SAM-7", // segmentation output
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
        // feature correlation -> segmentation output
        {
          id: "SAM-feature-to-output",
          source: "SAM-6", // feature correlation
          target: "SAM-7", // segmentation output
          type: "deletable",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#22c55e",
            strokeWidth: 1.8,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier" },
          animated: true,
        },
      );
      break;
    }
  }

  return colEdges;
});

const nodeTypes = {
  iconNode: IconNode,
} as const;

const edgeTypes = {
  deletable: DeletableEdge,
};

export default function ModelsFlow() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);

  // simple styling controls for all edges
  const [showArrows, setShowArrows] = React.useState(true);
  const [lineWidth, setLineWidth] = React.useState(2);
  const [edgeAnimShape, setEdgeAnimShape] = React.useState<
    "dot" | "square" | "diamond" | "none"
  >("dot");
  const [canvasBgColor, setCanvasBgColor] = React.useState("#020617");

  // node and text styling controls
  const [fontColor, setFontColor] = React.useState("#e5f4ff");
  const [fontSize, setFontSize] = React.useState(10);
  const [fontFamilyKey, setFontFamilyKey] = React.useState<
    "system" | "serif" | "mono"
  >("system");
  const [nodeBgColor, setNodeBgColor] = React.useState("#020617");
  const [nodeBorderColor, setNodeBorderColor] = React.useState("#22c55e");
  const [edgeColor, setEdgeColor] = React.useState("#22c55e");

  const [showMiniMap, setShowMiniMap] = React.useState(true);
  const [showGrid, setShowGrid] = React.useState(true);

  // builder controls
  const [symbolShape, setSymbolShape] = React.useState<
    "circle" | "square" | "rounded"
  >("circle");
  const [selectedNodeIds, setSelectedNodeIds] = React.useState<string[]>([]);
  const [selectedEdgeIds, setSelectedEdgeIds] = React.useState<string[]>([]);
  const customIdCounter = React.useRef(0);

  const historyRef = React.useRef<{ nodes: FlowNode[]; edges: FlowEdge[] }[]>(
    [],
  );
  const futureRef = React.useRef<{ nodes: FlowNode[]; edges: FlowEdge[] }[]>(
    [],
  );

  const pushHistory = React.useCallback(() => {
    historyRef.current.push({
      nodes: JSON.parse(JSON.stringify(nodes)) as FlowNode[],
      edges: JSON.parse(JSON.stringify(edges)) as FlowEdge[],
    });
    futureRef.current = [];
  }, [nodes, edges]);

  const handleUndo = () => {
    if (!historyRef.current.length) return;
    const last = historyRef.current.pop();
    if (!last) return;
    futureRef.current.push({
      nodes: nodes,
      edges: edges,
    });
    setNodes(last.nodes);
    setEdges(last.edges);
    setSelectedNodeIds([]);
    setSelectedEdgeIds([]);
  };

  const handleRedo = () => {
    if (!futureRef.current.length) return;
    const next = futureRef.current.pop();
    if (!next) return;
    historyRef.current.push({
      nodes: nodes,
      edges: edges,
    });
    setNodes(next.nodes);
    setEdges(next.edges);
    setSelectedNodeIds([]);
    setSelectedEdgeIds([]);
  };

  // Load any previously saved workspace on mount
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem("flowchart-workspace-state");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.nodes) {
        const savedNodes = parsed.nodes as any[];

        // rebuild only custom nodes; keep predefined model nodes from initialNodes
        const rebuiltCustomNodes: FlowNode[] = savedNodes
          .filter((n) => typeof n.id === "string" && n.id.startsWith("custom-"))
          .map((n) => {
            const label: string = n.data?.label ?? "Node";
            let IconComp: LucideIcon = Workflow;
            if (label === "Start/End") IconComp = MousePointerClick;
            else if (label === "Process") IconComp = Workflow;
            else if (label === "Decision") IconComp = GitBranch;

            return {
              id: n.id,
              type: "iconNode",
              position: n.position ?? { x: 900, y: 200 },
              data: {
                label,
                Icon: IconComp,
                shape: symbolShape,
              },
              style: nodeBaseStyle,
            } as FlowNode;
          });

        customIdCounter.current = rebuiltCustomNodes.length;
        setNodes([...initialNodes, ...rebuiltCustomNodes]);
        // keep predefined edges; ignore saved edges to avoid invalid data
        setEdges(initialEdges);
      }
    } catch {
      // ignore invalid saved state
    }
  }, [setNodes, setEdges]);

  // apply toolbar settings to edges; if something is selected, only update the selection
  React.useEffect(() => {
    setEdges((eds) =>
      eds.map((edge) => {
        const shouldUpdate =
          selectedEdgeIds.length > 0 ? selectedEdgeIds.includes(edge.id) : true;
        if (!shouldUpdate) return edge;

        const nextStyle = {
          ...(edge.style ?? {}),
          strokeWidth: lineWidth,
          stroke: edgeColor,
        };

        return {
          ...edge,
          style: nextStyle,
          markerEnd: showArrows ? { type: MarkerType.ArrowClosed } : undefined,
          data: {
            ...(edge.data as any),
            animShape: edgeAnimShape,
          },
        } as FlowEdge;
      }),
    );
  }, [
    showArrows,
    lineWidth,
    edgeColor,
    edgeAnimShape,
    selectedEdgeIds,
    setEdges,
  ]);

  const fontFamilyFromKey = (key: "system" | "serif" | "mono") => {
    switch (key) {
      case "serif":
        return "Georgia, 'Times New Roman', serif";
      case "mono":
        return "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
      case "system":
      default:
        return "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    }
  };

  // apply visual styling to icon nodes; if something is selected, only update selected nodes
  React.useEffect(() => {
    const fontFamily = fontFamilyFromKey(fontFamilyKey);
    setNodes((nds) =>
      nds.map((node) => {
        if (node.type !== "iconNode") return node;

        const shouldUpdate =
          selectedNodeIds.length > 0 ? selectedNodeIds.includes(node.id) : true;
        if (!shouldUpdate) return node;

        return {
          ...node,
          data: {
            ...(node.data as unknown as IconNodeData),
            shape: symbolShape,
            nodeBgColor,
            borderColor: nodeBorderColor,
            fontColor,
            fontFamily,
            fontSize,
          },
        } as FlowNode;
      }),
    );
  }, [
    symbolShape,
    nodeBgColor,
    nodeBorderColor,
    fontColor,
    fontSize,
    fontFamilyKey,
    selectedNodeIds,
    setNodes,
  ]);

  const addCustomNode = (kind: "startend" | "process" | "decision") => {
    pushHistory();
    const id = `custom-${customIdCounter.current++}`;

    // place new custom nodes to the right of the existing diagrams
    const baseX = 900;
    const baseY = 200 + customIdCounter.current * 120;

    let label = "Node";
    let IconComp: LucideIcon = Workflow;

    if (kind === "startend") {
      label = "Start/End";
      IconComp = MousePointerClick;
    } else if (kind === "process") {
      label = "Process";
      IconComp = Workflow;
    } else if (kind === "decision") {
      label = "Decision";
      IconComp = GitBranch;
    }

    const newNode: FlowNode = {
      id,
      type: "iconNode",
      position: { x: baseX, y: baseY },
      data: {
        label,
        Icon: IconComp,
        shape: symbolShape,
      },
      style: nodeBaseStyle,
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelected = () => {
    if (!selectedNodeIds.length && !selectedEdgeIds.length) return;
    pushHistory();
    setNodes((nds) => nds.filter((n) => !selectedNodeIds.includes(n.id)));
    setEdges((eds) =>
      eds.filter(
        (e) =>
          !selectedEdgeIds.includes(e.id) &&
          !selectedNodeIds.includes(e.source) &&
          !selectedNodeIds.includes(e.target),
      ),
    );
    setSelectedNodeIds([]);
    setSelectedEdgeIds([]);
  };

  const handleSave = () => {
    if (typeof window === "undefined") return;
    try {
      const payload = {
        nodes,
        edges,
      };
      window.localStorage.setItem(
        "flowchart-workspace-state",
        JSON.stringify(payload),
      );
    } catch {
      // ignore storage errors
    }
  };

  const duplicateSelectedNodes = () => {
    if (!selectedNodeIds.length) return;
    pushHistory();
    setNodes((nds) => {
      const selected = nds.filter((n) => selectedNodeIds.includes(n.id));
      if (!selected.length) return nds;
      const now = Date.now();
      const duplicates: FlowNode[] = selected.map((node, index) => {
        const newId = `dup-${node.id}-${now}-${index}`;
        return {
          ...node,
          id: newId,
          position: {
            x: node.position.x + 40,
            y: node.position.y + 40,
          },
          selected: false,
        } as FlowNode;
      });
      return [...nds, ...duplicates];
    });
    setSelectedNodeIds([]);
    setSelectedEdgeIds([]);
  };

  const lockSelection = () => {
    if (!selectedNodeIds.length) return;
    pushHistory();
    setNodes((nds) =>
      nds.map((n) =>
        selectedNodeIds.includes(n.id)
          ? ({
              ...n,
              draggable: false,
              data: {
                ...(n.data as any),
                locked: true,
              },
            } as FlowNode)
          : n,
      ),
    );
  };

  const unlockSelection = () => {
    if (!selectedNodeIds.length) return;
    pushHistory();
    setNodes((nds) =>
      nds.map((n) =>
        selectedNodeIds.includes(n.id)
          ? ({
              ...n,
              draggable: true,
              data: {
                ...(n.data as any),
                locked: false,
              },
            } as FlowNode)
          : n,
      ),
    );
  };

  const autoLayout = () => {
    const targetIds = selectedNodeIds.length
      ? selectedNodeIds
      : nodes.filter((n) => n.type === "iconNode").map((n) => n.id);
    if (!targetIds.length) return;
    pushHistory();

    setNodes((nds) => {
      const targets = nds.filter((n) => targetIds.includes(n.id));
      if (!targets.length) return nds;

      const cols = Math.ceil(Math.sqrt(targets.length));
      const spacingX = 220;
      const spacingY = 140;

      let minX = targets[0].position.x;
      let minY = targets[0].position.y;
      targets.forEach((n) => {
        if (n.position.x < minX) minX = n.position.x;
        if (n.position.y < minY) minY = n.position.y;
      });

      let index = 0;
      const layoutMap = new Map<string, { x: number; y: number }>();
      targets.forEach((n) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        layoutMap.set(n.id, {
          x: minX + col * spacingX,
          y: minY + row * spacingY,
        });
        index += 1;
      });

      return nds.map((n) => {
        const pos = layoutMap.get(n.id);
        if (!pos) return n;
        return {
          ...n,
          position: pos,
        } as FlowNode;
      });
    });
  };

  const validateFlow = () => {
    if (typeof window === "undefined") return;
    const hasNodes = nodes.length > 0;
    const hasEdges = edges.length > 0;
    const message =
      hasNodes && hasEdges
        ? "Flow looks valid: nodes and edges present."
        : !hasNodes
          ? "Validation: no nodes in the diagram."
          : "Validation: no edges in the diagram.";
    window.alert(message);
  };

  const exportFlow = () => {
    if (typeof window === "undefined") return;
    try {
      const payload = JSON.stringify({ nodes, edges }, null, 2);
      const blob = new Blob([payload], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "flowchart-workspace-export.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // ignore export errors
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const importFlowFromFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const handleImportFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result as string;
        const parsed = JSON.parse(text);
        if (!parsed?.nodes || !parsed?.edges) return;
        pushHistory();
        setNodes(parsed.nodes as FlowNode[]);
        setEdges(parsed.edges as FlowEdge[]);
        setSelectedNodeIds([]);
        setSelectedEdgeIds([]);
      } catch {
        // ignore parse errors
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  const handleConnect = React.useCallback(
    (connection: Connection) => {
      if (!connection.source || !connection.target) return;

      setEdges((eds) => {
        const source = connection.source as string;
        const target = connection.target as string;
        const id = `custom-edge-${Date.now()}-${eds.length}`;
        const newEdge: FlowEdge = {
          id,
          source,
          target,
          type: "deletable",
          markerEnd: showArrows ? { type: MarkerType.ArrowClosed } : undefined,
          style: {
            stroke: edgeColor,
            strokeWidth: lineWidth,
            strokeDasharray: "3 3",
          },
          data: { variant: "bezier", animShape: edgeAnimShape },
          animated: true,
        };
        return [...eds, newEdge];
      });
    },
    [setEdges, showArrows, edgeColor, lineWidth, edgeAnimShape],
  );

  return (
    <div
      className="h-[90vh] w-full text-white flex flex-col"
      style={{ backgroundColor: canvasBgColor }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.ctrlKey && (e.key === "a" || e.key === "A")) {
          e.preventDefault();
          setNodes((nds) => nds.map((n) => ({ ...n, selected: true })));
          setEdges((eds) => eds.map((e) => ({ ...e, selected: true })));
          setSelectedNodeIds(nodes.map((n) => n.id));
          setSelectedEdgeIds(edges.map((e) => e.id));
        }
      }}
    >
      {/* Top toolbar: grouped builder + edge styling */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-slate-800 bg-slate-950/95">
        <h1 className="text-2xl font-semibold text-slate-100 tracking-wide">
          Flowchart Workspace
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-200">
          {/* Builder group */}
          <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5">
            <span className="text-slate-400 text-[11px]">Nodes</span>
            <button
              type="button"
              onClick={() => addCustomNode("startend")}
              className="px-2 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-[11px] font-semibold"
            >
              Start/End
            </button>
            <button
              type="button"
              onClick={() => addCustomNode("process")}
              className="px-2 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-[11px] font-semibold"
            >
              Process
            </button>
            <button
              type="button"
              onClick={() => addCustomNode("decision")}
              className="px-2 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-[11px] font-semibold"
            >
              Decision
            </button>
          </div>

          {/* Edge styling group */}
          <div className="flex items-center gap-4 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showArrows}
                onChange={(e) => setShowArrows(e.target.checked)}
                className="h-3 w-3 accent-emerald-400"
              />
              <span>Arrows</span>
            </label>

            <div className="flex items-center gap-2">
              <span>Width</span>
              <input
                type="range"
                min={1}
                max={4}
                step={0.5}
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                className="w-24 accent-sky-400"
              />
              <span>{lineWidth.toFixed(1)}px</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Color</span>
              <input
                type="color"
                value={edgeColor}
                onChange={(e) => setEdgeColor(e.target.value)}
                className="h-4 w-4 border border-slate-600 rounded"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>Node shapes</span>
              <select
                value={symbolShape}
                onChange={(e) =>
                  setSymbolShape(
                    e.target.value as "circle" | "square" | "rounded",
                  )
                }
                className="bg-slate-900 border border-slate-600 rounded px-1 py-0.5 text-xs"
              >
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="rounded">Rounded</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span>Edge marker</span>
              <select
                value={edgeAnimShape}
                onChange={(e) =>
                  setEdgeAnimShape(
                    e.target.value as "dot" | "square" | "diamond" | "none",
                  )
                }
                className="bg-slate-900 border border-slate-600 rounded px-1 py-0.5 text-xs"
              >
                <option value="dot">Dot</option>
                <option value="square">Square</option>
                <option value="diamond">Diamond</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          {/* Actions group */}
          <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5">
            <button
              type="button"
              onClick={handleSave}
              className="px-2 py-1 rounded-md bg-sky-600 hover:bg-sky-500 text-[11px] font-semibold"
            >
              Save
            </button>
            <button
              type="button"
              onClick={deleteSelected}
              className="px-2 py-1 rounded-md bg-rose-500 hover:bg-rose-400 text-[11px] font-semibold disabled:opacity-40"
              disabled={!selectedNodeIds.length && !selectedEdgeIds.length}
            >
              Delete selected
            </button>
          </div>
        </div>
      </div>

      {/* Second bar: font & node appearance */}
      <div className="px-6 py-2 flex items-center justify-between gap-6 border-b border-slate-900 text-xs text-slate-200 bg-slate-950/90">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5">
            <span>Font</span>
            <select
              value={fontFamilyKey}
              onChange={(e) =>
                setFontFamilyKey(e.target.value as "system" | "serif" | "mono")
              }
              className="bg-slate-900 border border-slate-600 rounded px-1 py-0.5 text-xs"
            >
              <option value="system">System</option>
              <option value="serif">Serif</option>
              <option value="mono">Monospace</option>
            </select>

            <span>Color</span>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              className="h-4 w-4 border border-slate-600 rounded"
            />
            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                className="h-3 w-3 rounded-full bg-sky-300 border border-slate-600"
                onClick={() => setFontColor("#7dd3fc")}
                title="Sky"
              />
              <button
                type="button"
                className="h-3 w-3 rounded-full bg-emerald-300 border border-slate-600"
                onClick={() => setFontColor("#6ee7b7")}
                title="Emerald"
              />
              <button
                type="button"
                className="h-3 w-3 rounded-full bg-amber-300 border border-slate-600"
                onClick={() => setFontColor("#fcd34d")}
                title="Amber"
              />
              <button
                type="button"
                className="h-3 w-3 rounded-full bg-rose-300 border border-slate-600"
                onClick={() => setFontColor("#fecaca")}
                title="Rose"
              />
            </div>

            <span>Size</span>
            <input
              type="range"
              min={8}
              max={24}
              step={1}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-24 accent-sky-400"
            />
            <span>{fontSize}px</span>
            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                className="px-1 py-0.5 text-[10px] rounded border border-slate-600 hover:bg-slate-800"
                onClick={() => setFontSize(10)}
              >
                S
              </button>
              <button
                type="button"
                className="px-1 py-0.5 text-[10px] rounded border border-slate-600 hover:bg-slate-800"
                onClick={() => setFontSize(14)}
              >
                M
              </button>
              <button
                type="button"
                className="px-1 py-0.5 text-[10px] rounded border border-slate-600 hover:bg-slate-800"
                onClick={() => setFontSize(18)}
              >
                L
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5">
            <span>Node bg</span>
            <input
              type="color"
              value={nodeBgColor}
              onChange={(e) => setNodeBgColor(e.target.value)}
              className="h-4 w-4 border border-slate-600 rounded"
            />
            <span>Border</span>
            <input
              type="color"
              value={nodeBorderColor}
              onChange={(e) => setNodeBorderColor(e.target.value)}
              className="h-4 w-4 border border-slate-600 rounded"
            />
            <span className="ml-3">Canvas</span>
            <input
              type="color"
              value={canvasBgColor}
              onChange={(e) => setCanvasBgColor(e.target.value)}
              className="h-4 w-4 border border-slate-600 rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={handleConnect}
          multiSelectionKeyCode="Shift"
          onSelectionChange={({ nodes: selNodes, edges: selEdges }) => {
            const nextNodeIds = selNodes.map((n) => n.id);
            const nextEdgeIds = selEdges.map((e) => e.id);

            setSelectedNodeIds((prev) =>
              idsEqual(prev, nextNodeIds) ? prev : nextNodeIds,
            );
            setSelectedEdgeIds((prev) =>
              idsEqual(prev, nextEdgeIds) ? prev : nextEdgeIds,
            );
          }}
          fitView
          panOnScroll
          zoomOnScroll
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={handleImportFileChange}
          />
          <CanvasToolbar
            showGrid={showGrid}
            setShowGrid={setShowGrid}
            showMiniMap={showMiniMap}
            setShowMiniMap={setShowMiniMap}
            canUndo={historyRef.current.length > 0}
            canRedo={futureRef.current.length > 0}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onAutoLayout={autoLayout}
            onValidate={validateFlow}
            onExport={exportFlow}
            onImport={importFlowFromFile}
            onDuplicateSelection={duplicateSelectedNodes}
            onLockSelection={lockSelection}
            onUnlockSelection={unlockSelection}
            onDeleteSelection={deleteSelected}
            hasSelection={!!selectedNodeIds.length || !!selectedEdgeIds.length}
            nodes={nodes}
            selectedNodeIds={selectedNodeIds}
          />
          {showMiniMap && (
            <MiniMap nodeColor={() => "#22c55e"} maskColor="#020617" />
          )}
          <Controls />
          {showGrid && <Background gap={20} color="#1e293b" />}
        </ReactFlow>
      </div>
    </div>
  );
}
