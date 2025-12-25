// Ex5: Horizontal React Flow example
// - Nodes arranged left-to-right (horizontal)
// - Colorful custom node component
// - Animated, dashed edges with arrow markers
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
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

type FlowNode = Node;
type FlowEdge = Edge;

function HorizontalNode({ data }: { data: { label: string; color: string } }) {
  return (
    <div
      className="relative px-4 py-2 rounded-md border text-sm text-gray-900 shadow-sm"
      style={{
        backgroundColor: data.color,
        borderColor: "rgba(15,23,42,0.4)",
      }}
    >
      <Handle type="target" position={Position.Left} className="!bg-gray-500" />
      <span>{data.label}</span>
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-gray-500"
      />
    </div>
  );
}

const nodeTypes = {
  horizontalNode: HorizontalNode,
};

const initialNodes: FlowNode[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Start", color: "#fef3c7" },
    type: "horizontalNode",
  },
  {
    id: "2",
    position: { x: 220, y: 0 },
    data: { label: "Validate Input", color: "#e0f2fe" },
    type: "horizontalNode",
  },
  {
    id: "3",
    position: { x: 440, y: 0 },
    data: { label: "Process", color: "#dcfce7" },
    type: "horizontalNode",
  },
  {
    id: "4",
    position: { x: 660, y: 0 },
    data: { label: "Store Result", color: "#e0f2fe" },
    type: "horizontalNode",
  },
  {
    id: "5",
    position: { x: 880, y: 0 },
    data: { label: "End", color: "#fee2e2" },
    type: "horizontalNode",
  },
];

const initialEdges: FlowEdge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: {
      stroke: "#f97316",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      strokeLinecap: "round",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: {
      stroke: "#22c55e",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      strokeLinecap: "round",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: {
      stroke: "#3b82f6",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      strokeLinecap: "round",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: {
      stroke: "#ec4899",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      strokeLinecap: "round",
    },
  },
];

export default function HorizontalFlowExample() {
  const [nodes, , onNodesChange] = useNodesState<FlowNode>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState<FlowEdge>(initialEdges);

  return (
    <div className="h-[80vh] w-full p-4 flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-blue-700">
        React Flow Ex5: Horizontal Flowchart
      </h2>

      <div className="flex-1 border rounded-lg overflow-hidden bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background gap={16} />
        </ReactFlow>
      </div>

      <div className="text-sm bg-gray-50 border rounded-lg p-3">
        <p className="font-medium mb-1">How this horizontal layout works:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Nodes have the same <code>y</code> value and increasing{" "}
            <code>x</code> values.
          </li>
          <li>
            Each node type uses a target handle on the left and a source handle
            on the right.
          </li>
          <li>
            Edges just connect <code>source</code> and <code>target</code> ids;
            React Flow draws them left to right.
          </li>
        </ul>
      </div>
    </div>
  );
}
