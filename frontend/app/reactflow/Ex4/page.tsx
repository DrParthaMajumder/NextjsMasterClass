"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  MarkerType,
  Handle,
  Position,
  addEdge,
  type Connection,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// Very simple while-loop flowchart:
// Start -> i = 1 -> is i <= 5?
// Yes -> Print i -> i = i + 1 -> back to condition
// No -> End

function StartEndNode({ data }: NodeProps) {
  return (
    <div className="relative px-4 py-2 border border-gray-500 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
      <Handle type="target" position={Position.Top} className="!bg-gray-500" />
      {String(data.label ?? "")}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-500"
      />
    </div>
  );
}

function ProcessNode({ data }: NodeProps) {
  return (
    <div className="relative px-4 py-2 border border-gray-500 rounded bg-white text-emerald-600 text-sm">
      <Handle type="target" position={Position.Top} className="!bg-gray-500" />
      {String(data.label ?? "")}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-500"
      />
    </div>
  );
}

function DecisionNode({ data }: NodeProps) {
  return (
    <div className="relative flex items-center justify-center">
      <Handle type="target" position={Position.Top} className="!bg-gray-500" />
      <div className="relative w-40 h-12 bg-emerald-50 border border-gray-500 text-emerald-600 text-sm flex items-center justify-center before:content-[''] before:absolute before:-left-6 before:border-y-[24px] before:border-y-transparent before:border-r-[24px] before:border-r-emerald-50 before:border before:border-gray-500/0 after:content-[''] after:absolute after:-right-6 after:border-y-[24px] after:border-y-transparent after:border-l-[24px] after:border-l-emerald-50 after:border after:border-gray-500/0">
        <span className="px-2 text-xs font-medium whitespace-pre text-center">
          {String(data.label ?? "")}
        </span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-500"
      />
    </div>
  );
}

const nodeTypes = {
  startEnd: StartEndNode,
  process: ProcessNode,
  decision: DecisionNode,
};

const initialNodes: Node[] = [
  {
    id: "start",
    position: { x: 0, y: 0 },
    data: { label: "Start" },
    type: "startEnd",
  },
  {
    id: "init",
    position: { x: 0, y: 140 },
    data: { label: "i = 1" },
    type: "process",
  },
  {
    id: "check",
    position: { x: 0, y: 300 },
    data: { label: "is i <= 5?" },
    type: "decision",
  },
  {
    id: "end",
    position: { x: -260, y: 300 },
    data: { label: "End" },
    type: "startEnd",
  },
  {
    id: "print",
    position: { x: 260, y: 260 },
    data: { label: "Print i" },
    type: "process",
  },
  {
    id: "inc",
    position: { x: 260, y: 400 },
    data: { label: "i = i + 1" },
    type: "process",
  },
];

const initialEdges: Edge[] = [
  {
    id: "e-start-init",
    source: "start",
    target: "init",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-init-check",
    source: "init",
    target: "check",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-check-end",
    source: "check",
    target: "end",
    label: "No",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-check-print",
    source: "check",
    target: "print",
    label: "Yes",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-print-inc",
    source: "print",
    target: "inc",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-inc-check",
    source: "inc",
    target: "check",
    animated: true,
    style: { stroke: "#4b5563" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export default function WhileLoopFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (connection: Connection) =>
    setEdges((eds) => addEdge(connection, eds));

  return (
    <div className="h-[80vh] w-full p-4">
      <h2 className="text-xl font-bold mb-3">
        Very Simple While Loop (React Flow)
      </h2>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap
          nodeColor={(node) => {
            const bg = node.style?.background as string | undefined;
            return bg ?? "#eee";
          }}
        />
        <Controls />
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
}
