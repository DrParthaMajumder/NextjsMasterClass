"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Connection,
  type Node,
  type Edge,
  MarkerType,
  type NodeProps,
  Handle,
  Position,
  useReactFlow,
  type EdgeProps,
  getBezierPath,
} from "@xyflow/react";

import { Play, Square, Cog, HelpCircle } from "lucide-react";

import "@xyflow/react/dist/style.css";

type FlowNode = Node;
type FlowEdge = Edge;

function MovingDotEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
  data,
}: EdgeProps) {
  const { setEdges } = useReactFlow<FlowNode>();

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const handleDoubleClick = (event: React.MouseEvent<SVGGElement>) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  const symbolType = (data as any)?.symbolType ?? "circle";

  return (
    <g
      style={{ pointerEvents: "all", cursor: "pointer" }}
      onDoubleClick={handleDoubleClick}
    >
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        style={{ ...style, pointerEvents: "stroke" }}
        markerEnd={markerEnd}
      />
      {symbolType !== "none" && (
        <>
          {symbolType === "circle" && (
            <circle r={4} fill="#22c55e" style={{ pointerEvents: "all" }}>
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </circle>
          )}
          {symbolType === "square" && (
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              fill="#6366f1"
              rx={1}
              style={{ pointerEvents: "all" }}
            >
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href={`#${id}`} />
              </animateMotion>
            </rect>
          )}
          {symbolType === "triangle" && (
            <polygon
              points="0,-5 4,3 -4,3"
              fill="#f97316"
              style={{ pointerEvents: "all" }}
            >
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${id}`} />
              </animateMotion>
            </polygon>
          )}
        </>
      )}
    </g>
  );
}

function StartEndNode({ id, data, selected }: NodeProps) {
  const { setNodes } = useReactFlow<FlowNode>();
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState<string>(String(data.label ?? ""));

  const color = (data as any).color ?? "#047857"; // default emerald
  const fontFamily =
    (data as any).fontFamily ??
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  const bgColor = (data as any).bgColor ?? "#ecfdf5";

  const label = typeof data.label === "string" ? data.label : "";
  const Icon =
    label.toLowerCase() === "start"
      ? Play
      : label.toLowerCase() === "end"
        ? Square
        : HelpCircle;

  const commit = () => {
    const text = value.trim();
    if (!text) {
      setIsEditing(false);
      return;
    }
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id
          ? {
              ...n,
              data: {
                ...n.data,
                label: text,
              },
            }
          : n,
      ),
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`relative px-4 py-2 border rounded-full bg-emerald-50 text-sm font-medium ${
        selected
          ? "border-emerald-500 ring-2 ring-emerald-300"
          : "border-gray-500"
      }`}
      style={{ color, fontFamily, backgroundColor: bgColor }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setValue(typeof data.label === "string" ? data.label : "");
        setIsEditing(true);
      }}
    >
      <Handle type="target" position={Position.Top} className="!bg-gray-600" />
      {isEditing ? (
        <input
          className="w-32 rounded border border-emerald-400 bg-white px-1 py-0.5 text-xs outline-none"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
            if (e.key === "Escape") {
              e.preventDefault();
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <Icon size={18} strokeWidth={1.8} />
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-600"
      />
    </div>
  );
}

function ProcessNode({ id, data, selected }: NodeProps) {
  const { setNodes } = useReactFlow<FlowNode>();
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState<string>(data.label ?? "");

  const color = (data as any).color ?? "#047857";
  const fontFamily =
    (data as any).fontFamily ??
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  const bgColor = (data as any).bgColor ?? "#ffffff";

  const Icon = Cog;

  const commit = () => {
    const text = value.trim();
    if (!text) {
      setIsEditing(false);
      return;
    }
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id
          ? {
              ...n,
              data: {
                ...n.data,
                label: text,
              },
            }
          : n,
      ),
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`relative px-4 py-2 border rounded bg-white text-sm ${
        selected
          ? "border-emerald-500 ring-2 ring-emerald-300"
          : "border-gray-500"
      }`}
      style={{ color, fontFamily, backgroundColor: bgColor }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setValue(typeof data.label === "string" ? data.label : "");
        setIsEditing(true);
      }}
    >
      <Handle type="target" position={Position.Top} className="!bg-gray-600" />
      {isEditing ? (
        <input
          className="w-32 rounded border border-emerald-400 bg-white px-1 py-0.5 text-xs outline-none"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
            if (e.key === "Escape") {
              e.preventDefault();
              setIsEditing(false);
            }
          }}
        />
      ) : (
        (() => {
          const label = data.label;
          return typeof label === "string" ? label : String(label ?? "");
        })()
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-600"
      />
    </div>
  );
}

function DecisionNode({ id, data, selected }: NodeProps) {
  const { setNodes } = useReactFlow<FlowNode>();
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState<string>(String(data.label ?? ""));

  const color = (data as any).color ?? "#047857";
  const fontFamily =
    (data as any).fontFamily ??
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  const bgColor = (data as any).bgColor ?? "#ecfdf5";

  const Icon = HelpCircle;

  const commit = () => {
    const text = value.trim();
    if (!text) {
      setIsEditing(false);
      return;
    }
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id
          ? {
              ...n,
              data: {
                ...n.data,
                label: text,
              },
            }
          : n,
      ),
    );
    setIsEditing(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      <Handle type="target" position={Position.Top} className="!bg-gray-600" />
      <div
        className={`relative w-36 h-10 bg-emerald-50 border text-sm flex items-center justify-center before:content-[''] before:absolute before:-left-5 before:border-y-[20px] before:border-y-transparent before:border-r-[20px] before:border-r-emerald-50 after:content-[''] after:absolute after:-right-5 after:border-y-[20px] after:border-y-transparent after:border-l-[20px] after:border-l-emerald-50 ${
          selected
            ? "border-emerald-500 ring-2 ring-emerald-300"
            : "border-gray-500"
        }`}
        style={{ color, fontFamily, backgroundColor: bgColor }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          setValue(typeof data.label === "string" ? data.label : "");
          setIsEditing(true);
        }}
      >
        {isEditing ? (
          <input
            className="w-32 rounded border border-emerald-400 bg-white px-1 py-0.5 text-xs outline-none"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                commit();
              }
              if (e.key === "Escape") {
                e.preventDefault();
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <Icon size={18} strokeWidth={1.8} />
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-600"
      />
    </div>
  );
}

const nodeTypes = {
  startEnd: StartEndNode,
  process: ProcessNode,
  decision: DecisionNode,
};

const edgeTypes = {
  movingDot: MovingDotEdge,
};

const initialNodes: FlowNode[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: "Start",
      color: "#047857",
      bgColor: "#ecfdf5",
      fontFamily: "system-ui",
    },
    type: "startEnd",
  },
  {
    id: "2",
    position: { x: 0, y: 140 },
    data: {
      label: "Do something",
      color: "#047857",
      bgColor: "#ffffff",
      fontFamily: "system-ui",
    },
    type: "process",
  },
  {
    id: "3",
    position: { x: 0, y: 280 },
    data: {
      label: "End",
      color: "#047857",
      bgColor: "#ecfdf5",
      fontFamily: "system-ui",
    },
    type: "startEnd",
  },
];

const initialEdges: FlowEdge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "movingDot",
    animated: true,
    style: { stroke: "#4b5563" },
    data: { symbolType: "circle" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "movingDot",
    animated: true,
    style: { stroke: "#4b5563" },
    data: { symbolType: "circle" },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export default function FlowchartEditor() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);

  const [withArrow, setWithArrow] = useState(true);
  const [idCounter, setIdCounter] = useState(4);
  const [fontColor, setFontColor] = useState<string>("#047857");
  const [fontFamily, setFontFamily] = useState<string>("system-ui");
  const [nodeBgColor, setNodeBgColor] = useState<string>("#ecfdf5");
  const [edgeWidth, setEdgeWidth] = useState<number>(2);
  const [symbolType, setSymbolType] = useState<
    "none" | "circle" | "square" | "triangle"
  >("circle");
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedEdgeIds, setSelectedEdgeIds] = useState<string[]>([]);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            type: "movingDot",
            animated: true,
            markerEnd: withArrow ? { type: MarkerType.ArrowClosed } : undefined,
            style: { stroke: "#4b5563", strokeWidth: edgeWidth },
            data: { ...(connection as any).data, symbolType },
          },
          eds,
        ),
      );
    },
    [withArrow, edgeWidth, setEdges],
  );

  const addNode = (type: keyof typeof nodeTypes) => {
    setNodes((nds) => {
      const newId = String(idCounter);
      const newNode: FlowNode = {
        id: newId,
        type,
        position: { x: (nds.length % 4) * 180 - 180, y: 80 + nds.length * 60 },
        data: {
          label: type === "decision" ? "Decision" : "New step",
          color: fontColor,
          fontFamily,
          bgColor: nodeBgColor,
        },
      };
      return [...nds, newNode];
    });
    setIdCounter((c) => c + 1);
  };

  const deleteSelected = () => {
    if (!selectedNodeIds.length && !selectedEdgeIds.length) return;

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

  const onSelectionChange = useCallback(
    (params: { nodes: FlowNode[]; edges: FlowEdge[] }) => {
      setSelectedNodeIds(params.nodes.map((n) => n.id));
      setSelectedEdgeIds(params.edges.map((e) => e.id));
    },
    [],
  );

  const onEdgeDoubleClick = useCallback(
    (_: React.MouseEvent, edge: FlowEdge) => {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    },
    [setEdges],
  );

  // keep all nodes in sync with global font/color/background settings
  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          color: fontColor,
          fontFamily,
          // always override background with current toolbar setting
          bgColor: nodeBgColor,
        },
      })),
    );
  }, [fontColor, fontFamily, nodeBgColor, setNodes]);

  // keep all edges in sync with global edge width
  useEffect(() => {
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        style: {
          ...(e.style || {}),
          stroke: "#4b5563",
          strokeWidth: edgeWidth,
        },
      })),
    );
  }, [edgeWidth, setEdges]);

  // keep all edges in sync with global symbol type
  useEffect(() => {
    setEdges(
      (eds) =>
        eds.map((e) => ({
          ...(e as Edge),
          data: { ...((e as Edge).data as any), symbolType },
        })) as Edge[],
    );
  }, [symbolType, setEdges]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "a") {
      event.preventDefault();

      setNodes((nds) => nds.map((n) => ({ ...n, selected: true })));
      setEdges((eds) => eds.map((e) => ({ ...e, selected: true })));

      setSelectedNodeIds(nodes.map((n) => n.id));
      setSelectedEdgeIds(edges.map((e) => e.id));
      return;
    }

    if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      deleteSelected();
    }
  };

  return (
    <div
      className="h-[80vh] w-full flex flex-col gap-3 p-4"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h2 className="text-xl font-bold">Interactive Flowchart Builder</h2>

      <div className="flex flex-wrap items-center gap-3 rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
        <span className="font-medium text-gray-700">Toolbar:</span>

        <button
          className="rounded bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700"
          onClick={() => addNode("startEnd")}
        >
          Add Start/End
        </button>
        <button
          className="rounded bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700"
          onClick={() => addNode("process")}
        >
          Add Process
        </button>
        <button
          className="rounded bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700"
          onClick={() => addNode("decision")}
        >
          Add Decision
        </button>

        <span className="ml-3 text-gray-600">Font:</span>
        <select
          className="rounded border border-gray-300 bg-white px-2 py-1 text-xs"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="system-ui">System</option>
          <option value="'Segoe UI', sans-serif">Segoe UI</option>
          <option value="'Roboto', sans-serif">Roboto</option>
          <option value="'Courier New', monospace">Courier New</option>
        </select>

        <span className="ml-3 text-gray-600">Text color:</span>
        <input
          type="color"
          className="h-6 w-6 cursor-pointer rounded border border-gray-300 bg-white"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />

        <span className="ml-3 text-gray-600">Node background:</span>
        <input
          type="color"
          className="h-6 w-6 cursor-pointer rounded border border-gray-300 bg-white"
          value={nodeBgColor}
          onChange={(e) => setNodeBgColor(e.target.value)}
        />

        <span className="ml-3 text-gray-600">Line width:</span>
        <input
          type="range"
          min={1}
          max={6}
          step={1}
          className="h-1 w-24 cursor-pointer"
          value={edgeWidth}
          onChange={(e) => setEdgeWidth(Number(e.target.value))}
        />
        <span className="text-xs text-gray-600">{edgeWidth}px</span>

        <span className="ml-3 text-gray-600">Symbol:</span>
        <select
          className="rounded border border-gray-300 bg-white px-2 py-1 text-xs"
          value={symbolType}
          onChange={(e) => setSymbolType(e.target.value as any)}
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="none">None</option>
        </select>

        <label className="ml-3 inline-flex items-center gap-1 text-gray-600">
          <input
            type="checkbox"
            checked={withArrow}
            onChange={(e) => setWithArrow(e.target.checked)}
          />
          <span className="text-xs">Arrow on edges</span>
        </label>

        <button
          className="ml-auto rounded bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
          disabled={!selectedNodeIds.length && !selectedEdgeIds.length}
          onClick={deleteSelected}
        >
          Delete selected
        </button>
      </div>

      <div className="flex-1 rounded border border-gray-200 bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onSelectionChange={onSelectionChange}
          onEdgeDoubleClick={onEdgeDoubleClick}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <MiniMap
            nodeColor={(node) => {
              if (node.type === "startEnd") return "#bbf7d0";
              if (node.type === "decision") return "#fef9c3";
              return "#e5e7eb";
            }}
          />
          <Controls />
          <Background gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
