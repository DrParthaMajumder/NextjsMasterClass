/*
 * Ex1: Basic linear process in React Flow demonstrating a three-step path:
 *       Start node -> intermediate "Step 1" node -> final "End" node.
 */
"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  type Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Start" } },
  { id: "2", position: { x: 200, y: 0 }, data: { label: "Step 1" } },
  { id: "3", position: { x: 400, y: 0 }, data: { label: "End" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "next" },
  { id: "e2-3", source: "2", target: "3", label: "next" },
];

export default function ReactFlowEx1Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // onEdgeDoubleClick(mouseEvent, clickedEdge)
  const onEdgeDoubleClick = (_: React.MouseEvent, edge: Edge) => {
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  };

  return (
    <div className="h-[80vh] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeDoubleClick={onEdgeDoubleClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={20} />
      </ReactFlow>
    </div>
  );
}
