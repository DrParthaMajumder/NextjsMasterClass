"use client";

import React, { useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Edge,
  addEdge,
  Connection,
  Node,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// ✅ Example 2: Interactive flow
// - You can drag nodes around
// - You can create new connections by dragging from a source handle to a target
// - Clicking a node shows its label below the canvas

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Idea" },
  },
  {
    id: "2",
    position: { x: 200, y: -50 },
    data: { label: "Plan" },
  },
  {
    id: "3",
    position: { x: 200, y: 80 },
    data: { label: "Experiment" },
  },
  {
    id: "4",
    position: { x: 420, y: 0 },
    data: { label: "Result" },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
];

export default function ReactFlowEx2Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  function onConnect(connection: Connection) {
    setEdges((eds) => addEdge(connection, eds)); //eds is the current list of edges in your flow.
  }

  function onEdgeDoubleClick(_event: React.MouseEvent, edge: Edge) {
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  }

  function onNodeClick(_event: React.MouseEvent, node: Node) {
    setSelectedLabel(String(node.data?.label ?? node.id));
  }

  return (
    <div className="h-[80vh] w-full flex flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold text-blue-700">
        React Flow Ex2: Interactive Connections
      </h1>

      <div className="flex-1 border rounded-lg overflow-hidden bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeDoubleClick={onEdgeDoubleClick}
          onNodeClick={onNodeClick}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background gap={16} />
        </ReactFlow>
      </div>

      <div className="text-sm bg-gray-50 border rounded-lg p-3">
        <p className="font-medium mb-1">Tips for Ex2:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Drag nodes anywhere on the canvas.</li>
          <li>
            Create new connections by dragging from a node handle (small circle)
            to another node.
          </li>
          <li>Click a node to see its label below.</li>
        </ul>

        {selectedLabel && (
          <p className="mt-3">
            <span className="font-semibold">Selected node:</span>{" "}
            {selectedLabel}
          </p>
        )}
      </div>
    </div>
  );
}
