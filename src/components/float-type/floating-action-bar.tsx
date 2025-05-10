"use client";

import React from "react";
import FloatingActionButton from "./floating-action-button";
import { MoveUp, MoveDown, MoveLeft, MoveRight, CornerDownLeft, Space } from "lucide-react";

interface FloatingActionBarProps {
  opacity?: number;
  containerRef?: React.RefObject<HTMLElement>;
}

const quickActions = [
  { id: "fab-w", label: <MoveUp size={20}/>, initialPosition: { x: 80, y: 50 } },
  { id: "fab-a", label: <MoveLeft size={20}/>, initialPosition: { x: 30, y: 100 } },
  { id: "fab-s", label: <MoveDown size={20}/>, initialPosition: { x: 80, y: 100 } },
  { id: "fab-d", label: <MoveRight size={20}/>, initialPosition: { x: 130, y: 100 } },
  { id: "fab-space", label: <Space size={20}/>, initialPosition: { x: 80, y: 150 } },
  { id: "fab-enter", label: <CornerDownLeft size={20}/>, initialPosition: { x: 180, y: 100 } },
];

const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ opacity = 1, containerRef }) => {
  return (
    <>
      {quickActions.map((action) => (
        <FloatingActionButton
          key={action.id}
          id={action.id}
          label={action.label}
          initialPosition={action.initialPosition}
          containerRef={containerRef}
          opacity={opacity}
          onClick={() => console.log(`${action.id} clicked`)} // Placeholder action
        />
      ))}
    </>
  );
};

export default FloatingActionBar;
