"use client";

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  type Node,
  Position,
  Handle,
  type NodeProps,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

type FlowNode = Node;
type FlowEdge = Edge;

function StartNode({ data }: NodeProps) {
  return (
    <div className="rounded-full border border-emerald-500 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800 shadow-sm">
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-emerald-500"
      />
      {String(data.label ?? "")}
    </div>
  );
}

function ProcessNode({ data }: NodeProps) {
  return (
    <div className="rounded border border-sky-500 bg-white px-4 py-2 text-xs text-sky-900 shadow-sm">
      <Handle type="target" position={Position.Top} className="!bg-sky-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-sky-500"
      />
      <div className="font-semibold">{String(data.label ?? "")}</div>
      {data.description && (
        <div className="mt-1 text-[10px] text-gray-500">{data.description}</div>
      )}
    </div>
  );
}

function OutputNode({ data }: NodeProps) {
  return (
    <div className="max-w-xs rounded-lg border border-purple-500 bg-purple-50 px-4 py-2 text-xs text-purple-900 shadow-sm">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-purple-500"
      />
      <div className="mb-1 font-semibold">{String(data.label ?? "Answer")}</div>
      <div className="max-h-40 whitespace-pre-wrap text-[11px] overflow-auto">
        {String(data.answer) || "Run the flow to see the answer here."}
      </div>
    </div>
  );
}

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  output: OutputNode,
};

const initialNodes: FlowNode[] = [
  {
    id: "start",
    type: "start",
    position: { x: 0, y: 0 },
    data: { label: "User Question" },
  },
  {
    id: "tavily",
    type: "process",
    position: { x: 0, y: 150 },
    data: {
      label: "Tavily Web Search",
      description: "Fetches web snippets for the question",
    },
  },
  {
    id: "gemini",
    type: "process",
    position: { x: 0, y: 300 },
    data: {
      label: "Gemini Reasoning",
      description: "Synthesizes answer from search results",
    },
  },
  {
    id: "output",
    type: "output",
    position: { x: 0, y: 470 },
    data: {
      label: "Final Answer",
      answer: "",
    },
  },
];

const initialEdges: FlowEdge[] = [
  {
    id: "e-start-tavily",
    source: "start",
    target: "tavily",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#4b5563" },
  },
  {
    id: "e-tavily-gemini",
    source: "tavily",
    target: "gemini",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#4b5563" },
  },
  {
    id: "e-gemini-output",
    source: "gemini",
    target: "output",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#4b5563" },
  },
];

export default function LanggraphReactflowPage() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);
  const [question, setQuestion] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            animated: true,
            markerEnd: { type: MarkerType.ArrowClosed },
            style: { stroke: "#4b5563" },
          },
          eds,
        ),
      );
    },
    [setEdges],
  );

  const runFlow = async () => {
    if (!question.trim()) {
      setError("Please enter a question first.");
      return;
    }

    setError(null);
    setIsRunning(true);

    setNodes((nds) =>
      nds.map((n) =>
        n.id === "output"
          ? { ...n, data: { ...n.data, answer: "Running flow..." } }
          : n,
      ),
    );

    try {
      const res = await fetch("http://127.0.0.1:8000/api/langgraph/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as any);
        throw new Error(
          (body as any).detail || `Request failed with status ${res.status}`,
        );
      }

      const data = await res.json();
      const answerText =
        (data as any).answer ?? "No answer returned from backend.";

      setNodes((nds) =>
        nds.map((n) =>
          n.id === "output"
            ? { ...n, data: { ...n.data, answer: answerText } }
            : n,
        ),
      );
    } catch (e: any) {
      const message =
        e?.message ?? "Unknown error while calling /api/langgraph/qa";
      setError(message);
      setNodes((nds) =>
        nds.map((n) =>
          n.id === "output"
            ? { ...n, data: { ...n.data, answer: `Error: ${message}` } }
            : n,
        ),
      );
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex h-[80vh] w-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">LangGraph n8n-style Flow</h2>
        <span className="text-xs text-gray-500">
          Backend: /api/langgraph/qa
        </span>
      </div>

      <div className="flex gap-4">
        <div className="w-72 shrink-0 space-y-3 rounded border border-gray-200 bg-gray-50 p-3 text-sm">
          <div className="mb-1 font-medium text-gray-800">Question</div>
          <textarea
            className="w-full rounded border border-gray-300 bg-white p-2 text-xs outline-none focus:border-emerald-500"
            rows={4}
            placeholder="Ask something for Tavily + Gemini to answer..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={runFlow}
            disabled={isRunning}
            className="mt-1 w-full rounded bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
          >
            {isRunning ? "Running..." : "Run LangGraph Flow"}
          </button>

          {error && (
            <div className="mt-2 rounded border border-red-300 bg-red-50 p-2 text-[11px] text-red-700">
              {error}
            </div>
          )}

          <div className="mt-3 text-[11px] text-gray-500">
            This UI is a visual wrapper around your backend graph:
            <br />
            Start → Tavily search → Gemini reasoning → Answer node.
          </div>
        </div>

        <div className="flex-1 rounded border border-gray-200 bg-white">
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
                if (node.type === "start") return "#bbf7d0";
                if (node.type === "output") return "#ede9fe";
                return "#e0f2fe";
              }}
            />
            <Controls />
            <Background gap={16} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
