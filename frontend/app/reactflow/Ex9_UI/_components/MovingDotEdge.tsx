/*
 * Custom edge component used in the Ex9_UI React Flow example.
 * Draws a bezier edge with a moving dot and a hover delete control.
 */
"use client";

import React, { useState } from "react";
import {
  BaseEdge,
  type EdgeProps,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";

export function MovingDotEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
    style,
  } = props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const { setEdges } = useReactFlow();
  const [hovered, setHovered] = useState(false);

  const strokeColor =
    (style && (style as React.CSSProperties).stroke) || "#22c55e";

  const data: any = (props as any).data || {};
  const edgeAnimated: boolean = data.edgeAnimated ?? true;
  const edgeMarker: "none" | "point" | "square" | "diamond" =
    data.edgeMarker ?? "point";
  const edgeSpeed: "slow" | "normal" | "fast" = data.edgeSpeed ?? "normal";
  const edgeMarkerColor: string | undefined = data.edgeMarkerColor;

  const dur = edgeSpeed === "slow" ? "4s" : edgeSpeed === "fast" ? "1s" : "2s";

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <path id={`${id}-path`} d={edgePath} fill="none" stroke="none" />
      {edgeAnimated && edgeMarker !== "none" && (
        <>
          {edgeMarker === "point" && (
            <circle r={3} fill={edgeMarkerColor ?? strokeColor}>
              <animateMotion dur={dur} repeatCount="indefinite">
                <mpath xlinkHref={`#${id}-path`} />
              </animateMotion>
            </circle>
          )}
          {edgeMarker === "square" && (
            <rect
              width={6}
              height={6}
              fill={edgeMarkerColor ?? strokeColor}
              x={-3}
              y={-3}
            >
              <animateMotion dur={dur} repeatCount="indefinite">
                <mpath xlinkHref={`#${id}-path`} />
              </animateMotion>
            </rect>
          )}
          {edgeMarker === "diamond" && (
            <rect
              width={6}
              height={6}
              fill={edgeMarkerColor ?? strokeColor}
              x={-3}
              y={-3}
              transform="rotate(45)"
            >
              <animateMotion dur={dur} repeatCount="indefinite">
                <mpath xlinkHref={`#${id}-path`} />
              </animateMotion>
            </rect>
          )}
        </>
      )}
      {hovered && (
        <foreignObject
          x={labelX - 8}
          y={labelY - 8}
          width={16}
          height={16}
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <button
            onClick={handleDelete}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "999px",
              border: "1px solid #f97316",
              backgroundColor: "#020617",
              color: "#f97316",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </foreignObject>
      )}
    </g>
  );
}
