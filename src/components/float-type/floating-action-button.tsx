"use client";

import React from "react";
import { motion } from "framer-motion"; // Using framer-motion for easier drag
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  id: string;
  label: string | React.ReactNode;
  initialPosition?: { x: number; y: number };
  onClick?: () => void;
  containerRef?: React.RefObject<HTMLElement>; // Reference to the drag constraints container
  opacity?: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  id,
  label,
  initialPosition = { x: 0, y: 0 },
  onClick,
  containerRef,
  opacity = 1,
}) => {
  return (
    <motion.button
      drag
      dragConstraints={containerRef}
      dragMomentum={false} // Optional: disable momentum for snappier feel
      initial={{ x: initialPosition.x, y: initialPosition.y, opacity }}
      animate={{ opacity }} // Animate opacity changes
      whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "fixed px-4 py-2 rounded-lg shadow-lg cursor-grab active:cursor-grabbing",
        "bg-secondary text-secondary-foreground font-mono font-semibold", // Use theme variables
        "hover:bg-accent hover:text-accent-foreground", // Use theme variables
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      )}
      style={{ touchAction: 'none' }} // Prevent default touch actions like scrolling
      aria-label={`Floating action button ${typeof label === 'string' ? label : id}`}
    >
      {label}
    </motion.button>
  );
};

export default FloatingActionButton;
