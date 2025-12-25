// Ex6: Node with four handles (top, bottom, left, right)
"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  type Node,
  type Edge,
  useNodesState,
  useEdgesState,
  MarkerType,
  addEdge,
  type Connection,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

type FlowNode = Node;
type FlowEdge = Edge;

// ----------------------------
// Custom Node With 4 Handles
// ----------------------------
function FourHandleNode({
  data,
}: {
  data: {
    label: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
  };
}) {
  return (
    <div
      className="relative px-4 py-2 rounded-md border text-sm shadow-md transition-transform duration-150 
                 hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        backgroundColor: data.bgColor ?? "#e0f2fe",
        borderColor: data.borderColor ?? "#0ea5e9",
        color: data.textColor ?? "#0f172a",
      }}
    >
      {/* Top handles */}
      <Handle
        id="top-target"
        type="target"
        position={Position.Top}
        className="!bg-slate-500"
      />
      <Handle
        id="top-source"
        type="source"
        position={Position.Top}
        className="!bg-slate-500"
      />

      {/* Node Label */}
      <div className="flex items-center justify-center min-w-[120px] min-h-[48px]">
        {data.label}
      </div>

      {/* Bottom handles */}
      <Handle
        id="bottom-target"
        type="target"
        position={Position.Bottom}
        className="!bg-slate-500"
      />
      <Handle
        id="bottom-source"
        type="source"
        position={Position.Bottom}
        className="!bg-slate-500"
      />

      {/* Left handles */}
      <Handle
        id="left-target"
        type="target"
        position={Position.Left}
        className="!bg-slate-500"
      />
      <Handle
        id="left-source"
        type="source"
        position={Position.Left}
        className="!bg-slate-500"
      />

      {/* Right handles */}
      <Handle
        id="right-target"
        type="target"
        position={Position.Right}
        className="!bg-slate-500"
      />
      <Handle
        id="right-source"
        type="source"
        position={Position.Right}
        className="!bg-slate-500"
      />
    </div>
  );
}

const nodeTypes = {
  fourHandle: FourHandleNode,
};

// ----------------------------
// NODES (All 5 with 4 Handles)
// ----------------------------
const initialNodes: FlowNode[] = [
  {
    id: "center",
    position: { x: 0, y: 0 },
    data: {
      label: "Center",
      bgColor: "#0f172a",
      borderColor: "#38bdf8",
      textColor: "#e5e7eb",
    },
    type: "fourHandle",
  },
  {
    id: "top",
    position: { x: 0, y: -180 },
    data: {
      label: "Top",
      bgColor: "#dbeafe",
      borderColor: "#2563eb",
      textColor: "#1d4ed8",
    },
    type: "fourHandle",
  },
  {
    id: "bottom",
    position: { x: 0, y: 180 },
    data: {
      label: "Bottom",
      bgColor: "#dcfce7",
      borderColor: "#16a34a",
      textColor: "#166534",
    },
    type: "fourHandle",
  },
  {
    id: "left",
    position: { x: -260, y: 0 },
    data: {
      label: "Left",
      bgColor: "#fce7f3",
      borderColor: "#db2777",
      textColor: "#9d174d",
    },
    type: "fourHandle",
  },
  {
    id: "right",
    position: { x: 260, y: 0 },
    data: {
      label: "Right",
      bgColor: "#ffedd5",
      borderColor: "#fb923c",
      textColor: "#c2410c",
    },
    type: "fourHandle",
  },
];

// ----------------------------
// EDGES (Center ➝ All Others)
// ----------------------------
const baseEdgeStyle = {
  strokeWidth: 2.5,
  strokeDasharray: "6 6",
  strokeLinecap: "round" as const,
};

const initialEdges: FlowEdge[] = [
  {
    id: "e-center-top",
    source: "center",
    target: "top",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { ...baseEdgeStyle, stroke: "#2563eb" },
  },
  {
    id: "e-center-bottom",
    source: "center",
    target: "bottom",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { ...baseEdgeStyle, stroke: "#16a34a" },
  },
  {
    id: "e-center-left",
    source: "center",
    target: "left",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { ...baseEdgeStyle, stroke: "#db2777" },
  },
  {
    id: "e-center-right",
    source: "center",
    target: "right",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { ...baseEdgeStyle, stroke: "#f97316" },
  },
];

// ----------------------------
// MAIN COMPONENT
// ----------------------------
export default function FourHandleFlowExample() {
  const [nodes, , onNodesChange] = useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);

  const onConnect = React.useCallback(
    (connection: Connection) => {
      setEdges((eds) => {
        return addEdge(
          {
            ...connection,
            animated: true,
            markerEnd: { type: MarkerType.ArrowClosed },
            style: { ...baseEdgeStyle, stroke: "#64748b" },
          },
          eds,
        );
      });
    },
    [setEdges],
  );

  const onEdgeDoubleClick = React.useCallback(
    (_: React.MouseEvent, edge: Edge) => {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    },
    [setEdges],
  );

  return (
    <div className="h-[80vh] w-full p-4 flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-blue-700">
        React Flow Ex6: Node with 4 Handles (Center Connected Outwards)
      </h2>

      <div className="flex-1 border rounded-lg overflow-hidden bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onEdgeDoubleClick={onEdgeDoubleClick}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
