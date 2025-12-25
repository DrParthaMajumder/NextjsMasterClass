"use client";

import React from "react";
import { useReactFlow, getBezierPath, type EdgeProps } from "@xyflow/react";

export default function DeletableEdge({
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
  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const [isHovered, setIsHovered] = React.useState(false);
  const animShape = (data as any)?.animShape ?? "dot";

  const handleDeleteClick = (event: React.MouseEvent<SVGGElement>) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  return (
    <g style={{ pointerEvents: "all", cursor: "default" }}>
      <path
        d={edgePath}
        stroke="transparent"
        strokeWidth={16}
        fill="none"
        style={{ pointerEvents: "stroke" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        style={{ ...style, pointerEvents: "stroke" }}
        markerEnd={markerEnd}
      />

      {animShape !== "none" && (
        <>
          {animShape === "dot" && (
            <circle r={3} fill="#22c55e">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path={edgePath}
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
                calcMode="spline"
              />
            </circle>
          )}
          {animShape === "square" && (
            <rect x={-3} y={-3} width={6} height={6} fill="#22c55e">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path={edgePath}
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
                calcMode="spline"
              />
            </rect>
          )}
          {animShape === "diamond" && (
            <polygon points="0,-4 4,0 0,4 -4,0" fill="#22c55e">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path={edgePath}
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
                calcMode="spline"
              />
            </polygon>
          )}
        </>
      )}

      {isHovered && (
        <g
          transform={`translate(${labelX}, ${labelY})`}
          style={{ cursor: "pointer" }}
        >
          <circle
            r={8}
            fill="#fee2e2"
            stroke="#b91c1c"
            strokeWidth={1.5}
            onClick={handleDeleteClick}
          />
          <line
            x1={-3}
            y1={-3}
            x2={3}
            y2={3}
            stroke="#b91c1c"
            strokeWidth={1.5}
            onClick={handleDeleteClick}
          />
          <line
            x1={-3}
            y1={3}
            x2={3}
            y2={-3}
            stroke="#b91c1c"
            strokeWidth={1.5}
            onClick={handleDeleteClick}
          />
        </g>
      )}
    </g>
  );
}
