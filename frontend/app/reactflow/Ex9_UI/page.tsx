"use client";

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  NodeTypes,
  MarkerType,
  EdgeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  MousePointer,
  Eye,
  Brain,
  Boxes,
  Network,
  Package,
  Sigma,
  GitBranch,
} from "lucide-react";
import { CustomNode, type NodeData } from "./_components/CustomNode";
import { MovingDotEdge } from "./_components/MovingDotEdge";
import { Toolbar } from "./_components/Toolbar";

// Node and edge types
export type FlowNode = Node<NodeData>;
export type FlowEdge = Edge;

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const edgeTypes: EdgeTypes = {
  moving: MovingDotEdge,
};

// Base style for nodes
const nodeBaseStyle = {
  width: 140,
  height: 90,
  border: "none",
  background: "transparent",
};

const initialNodes: FlowNode[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 250, y: 50 },
    data: {
      label: "input processing",
      Icon: MousePointer,
    },
    style: nodeBaseStyle,
  },
  {
    id: "2",
    type: "custom",
    position: { x: 250, y: 150 },
    data: {
      label: "perception system",
      Icon: Eye,
    },
    style: nodeBaseStyle,
  },
  {
    id: "3",
    type: "custom",
    position: { x: 250, y: 250 },
    data: {
      label: "intent recognition",
      Icon: Brain,
    },
    style: nodeBaseStyle,
  },
  {
    id: "4",
    type: "custom",
    position: { x: 250, y: 350 },
    data: {
      label: "task breakdown",
      Icon: Boxes,
    },
    style: nodeBaseStyle,
  },
  {
    id: "5",
    type: "custom",
    position: { x: 150, y: 450 },
    data: {
      label: "action planning",
      Icon: Network,
    },
    style: nodeBaseStyle,
  },
  {
    id: "6",
    type: "custom",
    position: { x: 350, y: 450 },
    data: {
      label: "memory system",
      Icon: Package,
    },
    style: nodeBaseStyle,
  },
  {
    id: "7",
    type: "custom",
    position: { x: 250, y: 550 },
    data: {
      label: "quantization",
      Icon: Sigma,
    },
    style: nodeBaseStyle,
  },
  {
    id: "8",
    type: "custom",
    position: { x: 250, y: 650 },
    data: {
      label: "feedback integration",
      Icon: GitBranch,
    },
    style: nodeBaseStyle,
  },
];

const initialEdges: FlowEdge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 2, strokeDasharray: "3 3" },
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 2, strokeDasharray: "3 3" },
    animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 2, strokeDasharray: "3 3" },
    animated: true,
  },
  // Branching from task breakdown
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 1.8, strokeDasharray: "3 3" },
    animated: true,
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 1.8, strokeDasharray: "3 3" },
    animated: true,
  },
  // Converging to quantization
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 1.8, strokeDasharray: "3 3" },
    animated: true,
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 1.8, strokeDasharray: "3 3" },
    animated: true,
  },
  // Feedback loop
  {
    id: "e6-2",
    source: "6",
    target: "2",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#f97316", strokeWidth: 2.4, strokeDasharray: "6 3" },
    animated: true,
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "moving",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: "#22c55e", strokeWidth: 2, strokeDasharray: "3 3" },
    animated: true,
  },
];

export default function Ex9_UI() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);

  const [fontFamily, setFontFamily] = useState<string>(
    "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  );
  const [fontColor, setFontColor] = useState<string>("#e5f4ff");
  const [fontSize, setFontSize] = useState<number>(10);
  const [nodeBackground, setNodeBackground] = useState<string>("#020617");
  const [nodeSize, setNodeSize] = useState<number>(56);
  const [nodeShape, setNodeShape] = useState<"rounded" | "square" | "circle">(
    "rounded",
  );
  const [nodeBorderColor, setNodeBorderColor] = useState<string>("#22c55e");
  const [nodeShowIcon, setNodeShowIcon] = useState<boolean>(true);
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [selectedEdgeIds, setSelectedEdgeIds] = useState<string[]>([]);
  const [edgeAnimated, setEdgeAnimated] = useState<boolean>(true);
  const [edgeMarker, setEdgeMarker] = useState<
    "none" | "point" | "square" | "diamond"
  >("point");
  const [edgeWidth, setEdgeWidth] = useState<number>(2);
  const [edgeColor, setEdgeColor] = useState<string>("#22c55e");
  const [edgeStyle, setEdgeStyle] = useState<"solid" | "dashed" | "dotted">(
    "dashed",
  );
  const [edgePreset, setEdgePreset] = useState<"primary" | "feedback">(
    "primary",
  );
  const [edgeArrow, setEdgeArrow] = useState<"none" | "end" | "both">("end");
  const [edgeSpeed, setEdgeSpeed] = useState<"slow" | "normal" | "fast">(
    "normal",
  );
  const [edgeMarkerColor, setEdgeMarkerColor] = useState<string>("#22c55e");
  const [edgeArrowHeadType, setEdgeArrowHeadType] = useState<"open" | "closed">(
    "closed",
  );
  const [edgeArrowHeadColor, setEdgeArrowHeadColor] =
    useState<string>("#22c55e");
  const [canvasBackgroundColor, setCanvasBackgroundColor] =
    useState<string>("#020617");
  const [canvasGridEnabled, setCanvasGridEnabled] = useState<boolean>(true);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "moving",
            markerEnd: { type: MarkerType.ArrowClosed },
            style: {
              stroke: "#22c55e",
              strokeWidth: 2,
              strokeDasharray: "3 3",
            },
            animated: true,
          },
          eds,
        ),
      ),
    [setEdges],
  );

  const handleFontFamilyChange = (value: string) => {
    setFontFamily(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          fontFamily: value,
        } as NodeData,
      })),
    );
  };

  const handleNodeShowIconChange = (value: boolean) => {
    setNodeShowIcon(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                showIcon: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleDeleteSelectedNodes = () => {
    if (selectedNodeIds.length === 0) return;

    setNodes((nds) => nds.filter((node) => !selectedNodeIds.includes(node.id)));
    setEdges((eds) =>
      eds.filter(
        (edge) =>
          !selectedNodeIds.includes(edge.source) &&
          !selectedNodeIds.includes(edge.target),
      ),
    );

    setSelectedNodeIds([]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isCtrlA =
      (event.key === "a" || event.key === "A") &&
      (event.ctrlKey || event.metaKey);
    if (isCtrlA) {
      event.preventDefault();

      const allNodeIds = nodes.map((n) => n.id);
      setSelectedNodeIds(allNodeIds);

      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          selected: true,
        })),
      );
    }

    const isDeleteKey = event.key === "Delete" || event.key === "Backspace";
    if (isDeleteKey) {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      const isEditable =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (target && target.isContentEditable);

      if (isEditable) {
        return;
      }
    }

    if (isDeleteKey && selectedNodeIds.length > 0) {
      event.preventDefault();
      handleDeleteSelectedNodes();
    }
  };

  const applyEdgeStyle = (
    updater: (edge: FlowEdge) => {
      style?: FlowEdge["style"];
      animated?: boolean;
      data?: FlowEdge["data"];
      markerStart?: FlowEdge["markerStart"];
      markerEnd?: FlowEdge["markerEnd"];
    },
  ) => {
    setEdges((eds) =>
      eds.map((edge) => {
        const shouldApply =
          selectedEdgeIds.length === 0 || selectedEdgeIds.includes(edge.id);
        const update = shouldApply ? updater(edge) : {};
        const hasMarkerStart = Object.prototype.hasOwnProperty.call(
          update,
          "markerStart",
        );
        const hasMarkerEnd = Object.prototype.hasOwnProperty.call(
          update,
          "markerEnd",
        );
        return {
          ...edge,
          style: { ...(edge.style || {}), ...(update.style || {}) },
          animated: update.animated ?? edge.animated,
          data: { ...(edge.data || {}), ...(update.data || {}) },
          markerStart: hasMarkerStart ? update.markerStart : edge.markerStart,
          markerEnd: hasMarkerEnd ? update.markerEnd : edge.markerEnd,
        };
      }),
    );
  };

  const handleEdgeAnimatedChange = (value: boolean) => {
    setEdgeAnimated(value);
    applyEdgeStyle(() => ({
      animated: value,
      data: { edgeAnimated: value } as any,
    }));
  };

  const handleEdgeMarkerChange = (
    value: "none" | "point" | "square" | "diamond",
  ) => {
    setEdgeMarker(value);
    applyEdgeStyle(() => ({ data: { edgeMarker: value } as any }));
  };

  const handleEdgeWidthChange = (value: number) => {
    setEdgeWidth(value);
    applyEdgeStyle(() => ({
      style: { strokeWidth: value },
      data: { edgeWidth: value } as any,
    }));
  };

  const handleEdgeColorChange = (value: string) => {
    setEdgeColor(value);
    applyEdgeStyle(() => ({
      style: { stroke: value },
      data: { edgeColor: value } as any,
    }));
  };

  const handleEdgeStyleChange = (value: "solid" | "dashed" | "dotted") => {
    setEdgeStyle(value);
    const dash = value === "solid" ? "0" : value === "dashed" ? "6 3" : "2 2";
    applyEdgeStyle(() => ({
      style: { strokeDasharray: dash },
      data: { edgeStyle: value } as any,
    }));
  };

  const handleEdgePresetChange = (value: "primary" | "feedback") => {
    setEdgePreset(value);
    const color = value === "primary" ? "#22c55e" : "#f97316";
    const dash = value === "primary" ? "3 3" : "6 3";
    applyEdgeStyle(() => ({
      style: { stroke: color, strokeDasharray: dash },
      data: { edgePreset: value, edgeColor: color } as any,
    }));
  };

  const handleEdgeArrowChange = (value: "none" | "end" | "both") => {
    setEdgeArrow(value);
    applyEdgeStyle((edge) => {
      const markerType =
        edgeArrowHeadType === "open"
          ? MarkerType.Arrow
          : MarkerType.ArrowClosed;
      return {
        markerStart:
          value === "both"
            ? { type: markerType, color: edgeArrowHeadColor }
            : value === "none"
              ? undefined
              : undefined,
        markerEnd:
          value === "end" || value === "both"
            ? { type: markerType, color: edgeArrowHeadColor }
            : undefined,
        data: { ...(edge.data || {}), edgeArrow: value } as any,
      };
    });
  };

  const handleEdgeSpeedChange = (value: "slow" | "normal" | "fast") => {
    setEdgeSpeed(value);
    applyEdgeStyle(() => ({ data: { edgeSpeed: value } as any }));
  };

  const handleEdgeMarkerColorChange = (value: string) => {
    setEdgeMarkerColor(value);
    applyEdgeStyle(() => ({ data: { edgeMarkerColor: value } as any }));
  };

  const handleEdgeArrowHeadTypeChange = (value: "open" | "closed") => {
    setEdgeArrowHeadType(value);
    // Re-apply current arrow setting so marker type updates
    handleEdgeArrowChange(edgeArrow);
  };

  const handleCanvasBackgroundColorChange = (value: string) => {
    setCanvasBackgroundColor(value);
  };

  const handleCanvasGridEnabledChange = (value: boolean) => {
    setCanvasGridEnabled(value);
  };

  const handleEdgeArrowHeadColorChange = (value: string) => {
    setEdgeArrowHeadColor(value);
    // Re-apply current arrow setting so marker color updates
    handleEdgeArrowChange(edgeArrow);
  };

  const handleNodeBackgroundChange = (value: string) => {
    setNodeBackground(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                nodeBackground: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleNodeBorderColorChange = (value: string) => {
    setNodeBorderColor(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                nodeBorderColor: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleNodeSizeChange = (value: number) => {
    setNodeSize(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                nodeSize: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleNodeShapeChange = (value: "rounded" | "square" | "circle") => {
    setNodeShape(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                nodeShape: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                fontSize: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  const handleFontColorChange = (value: string) => {
    setFontColor(value);
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data:
          selectedNodeIds.length === 0 || selectedNodeIds.includes(node.id)
            ? ({
                ...node.data,
                fontColor: value,
              } as NodeData)
            : (node.data as NodeData),
      })),
    );
  };

  return (
    <div
      className="h-screen w-full"
      style={{ backgroundColor: canvasBackgroundColor }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Toolbar
        fontFamily={fontFamily}
        fontColor={fontColor}
        fontSize={fontSize}
        nodeBackground={nodeBackground}
        nodeSize={nodeSize}
        nodeShape={nodeShape}
        nodeBorderColor={nodeBorderColor}
        nodeShowIcon={nodeShowIcon}
        canDeleteNodes={selectedNodeIds.length > 0}
        edgeAnimated={edgeAnimated}
        edgeMarker={edgeMarker}
        edgeWidth={edgeWidth}
        edgeColor={edgeColor}
        edgeStyle={edgeStyle}
        edgePreset={edgePreset}
        edgeArrow={edgeArrow}
        edgeSpeed={edgeSpeed}
        edgeMarkerColor={edgeMarkerColor}
        edgeArrowHeadType={edgeArrowHeadType}
        edgeArrowHeadColor={edgeArrowHeadColor}
        canvasBackgroundColor={canvasBackgroundColor}
        canvasGridEnabled={canvasGridEnabled}
        onFontFamilyChange={handleFontFamilyChange}
        onFontColorChange={handleFontColorChange}
        onFontSizeChange={handleFontSizeChange}
        onNodeBackgroundChange={handleNodeBackgroundChange}
        onNodeSizeChange={handleNodeSizeChange}
        onNodeShapeChange={handleNodeShapeChange}
        onNodeBorderColorChange={handleNodeBorderColorChange}
        onNodeShowIconChange={handleNodeShowIconChange}
        onDeleteNodes={handleDeleteSelectedNodes}
        onEdgeAnimatedChange={handleEdgeAnimatedChange}
        onEdgeMarkerChange={handleEdgeMarkerChange}
        onEdgeWidthChange={handleEdgeWidthChange}
        onEdgeColorChange={handleEdgeColorChange}
        onEdgeStyleChange={handleEdgeStyleChange}
        onEdgePresetChange={handleEdgePresetChange}
        onEdgeArrowChange={handleEdgeArrowChange}
        onEdgeSpeedChange={handleEdgeSpeedChange}
        onEdgeMarkerColorChange={handleEdgeMarkerColorChange}
        onEdgeArrowHeadTypeChange={handleEdgeArrowHeadTypeChange}
        onEdgeArrowHeadColorChange={handleEdgeArrowHeadColorChange}
        onCanvasBackgroundColorChange={handleCanvasBackgroundColorChange}
        onCanvasGridEnabledChange={handleCanvasGridEnabledChange}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        multiSelectionKeyCode="Shift"
        fitView
        attributionPosition="bottom-left"
        style={{ backgroundColor: canvasBackgroundColor }}
        onSelectionChange={({ nodes: selNodes, edges: selEdges }) => {
          const nextNodeIds = selNodes.map((n) => n.id);
          const nextEdgeIds = selEdges.map((e) => e.id);

          const nodesChanged =
            nextNodeIds.length !== selectedNodeIds.length ||
            nextNodeIds.some((id, i) => id !== selectedNodeIds[i]);
          const edgesChanged =
            nextEdgeIds.length !== selectedEdgeIds.length ||
            nextEdgeIds.some((id, i) => id !== selectedEdgeIds[i]);

          if (nodesChanged) {
            setSelectedNodeIds(nextNodeIds);
          }
          if (edgesChanged) {
            setSelectedEdgeIds(nextEdgeIds);
          }

          if (selNodes.length === 1) {
            const n = selNodes[0] as FlowNode;
            const data = (n.data || {}) as NodeData;

            if (data.fontFamily && data.fontFamily !== fontFamily) {
              setFontFamily(data.fontFamily);
            }
            if (data.fontColor && data.fontColor !== fontColor) {
              setFontColor(data.fontColor);
            }
            if (
              typeof data.fontSize === "number" &&
              data.fontSize !== fontSize
            ) {
              setFontSize(data.fontSize);
            }
            if (data.nodeBackground && data.nodeBackground !== nodeBackground) {
              setNodeBackground(data.nodeBackground);
            }
            if (
              data.nodeBorderColor &&
              data.nodeBorderColor !== nodeBorderColor
            ) {
              setNodeBorderColor(data.nodeBorderColor);
            }
            if (data.nodeShape && data.nodeShape !== nodeShape) {
              setNodeShape(data.nodeShape);
            }
            if (
              typeof data.nodeSize === "number" &&
              data.nodeSize !== nodeSize
            ) {
              setNodeSize(data.nodeSize);
            }
          }
        }}
      >
        <Controls />
        {canvasGridEnabled && <Background gap={20} color="#1e293b" />}
      </ReactFlow>
    </div>
  );
}
