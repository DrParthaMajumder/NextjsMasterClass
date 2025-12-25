"use client";

import React from "react";
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
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// Nodes representing RAG process
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "User Query" },
    style: { background: "#fef3c7", padding: 10, borderRadius: 5 },
  },
  {
    id: "2",
    position: { x: 250, y: -50 },
    data: { label: "Retriever\n(Fetch Docs)" },
    style: { background: "#bfdbfe", padding: 10, borderRadius: 5 },
  },
  {
    id: "3",
    position: { x: 250, y: 80 },
    data: { label: "Vector Store / Encoder" },
    style: { background: "#c7d2fe", padding: 10, borderRadius: 5 },
  },
  {
    id: "4",
    position: { x: 500, y: 15 },
    data: { label: "LLM Generator\n(Generate Answer)" },
    style: { background: "#bbf7d0", padding: 10, borderRadius: 5 },
  },
  {
    id: "5",
    position: { x: 700, y: 15 },
    data: { label: "Answer Returned" },
    style: { background: "#fee2e2", padding: 10, borderRadius: 5 },
  },
];

// Edges showing flow (with arrowheads on the target side)
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#facc15" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#3b82f6" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#8b5cf6" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#22c55e" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default function RAGFlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (
    connection: Connection, //the new edge you create by dragging with the mouse is captured in the connection
  ) => setEdges((currentEdges) => addEdge(connection, currentEdges));

  return (
    <div className="h-[80vh] w-full p-4">
      <h2 className="text-xl font-bold mb-3">RAG Workflow Visualization</h2>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
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
