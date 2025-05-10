"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface KeyProps {
  label: string | React.ReactNode;
  value?: string;
  className?: string;
  onClick?: (value: string) => void;
  variant?: 'default' | 'special' | 'spacebar';
}

const Key: React.FC<KeyProps> = ({
  label,
  value,
  className,
  onClick,
  variant = 'default',
}) => {
  const handleClick = () => {
    if (onClick && value) {
      onClick(value);
    }
  };

  const baseStyle = "flex items-center justify-center h-12 rounded-md shadow-md cursor-pointer transition-all duration-100 ease-out select-none font-mono";
  // Use theme variables for colors
  const colorStyle = "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground active:bg-primary active:scale-95";
  
  let sizeStyle = "min-w-[3rem] p-2 text-lg"; // Default key size

  if (variant === 'special') {
    sizeStyle = "min-w-[4.5rem] px-3 text-sm"; // Shift, Enter, Backspace
  } else if (variant === 'spacebar') {
    sizeStyle = "flex-grow min-w-[15rem] text-sm"; // Spacebar
  }

  return (
    <button
      onClick={handleClick}
      className={cn(baseStyle, colorStyle, sizeStyle, className)}
      aria-label={typeof label === 'string' ? label : value}
    >
      {label}
    </button>
  );
};

export default Key;
