"use client";

import React from "react";
import Key from "./key";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, CornerDownLeft, ChevronUp, Zap } from "lucide-react"; // Example icons

interface KeyboardProps {
  opacity?: number;
  scale?: number;
  onKeyPress?: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ opacity = 1, scale = 1, onKeyPress }) => {
  const handleKeyPress = (key: string) => {
    if (onKeyPress) {
      onKeyPress(key);
    }
    // console.log(`Key pressed: ${key}`); // For demonstration
  };

  const keyRows = [
    [
      { label: "Q", value: "q" }, { label: "W", value: "w" }, { label: "E", value: "e" }, { label: "R", value: "r" },
      { label: "T", value: "t" }, { label: "Y", value: "y" }, { label: "U", value: "u" }, { label: "I", value: "i" },
      { label: "O", value: "o" }, { label: "P", value: "p" },
      { label: <ArrowBigLeft size={20} />, value: "backspace", variant: 'special' }
    ],
    [
      { label: "A", value: "a" }, { label: "S", value: "s" }, { label: "D", value: "d" }, { label: "F", value: "f" },
      { label: "G", value: "g" }, { label: "H", value: "h" }, { label: "J", value: "j" }, { label: "K", value: "k" },
      { label: "L", value: "l" }, 
      { label: <CornerDownLeft size={20} />, value: "enter", variant: 'special' }
    ],
    [
      { label: <ChevronUp size={20} />, value: "shift", variant: 'special' },
      { label: "Z", value: "z" }, { label: "X", value: "x" }, { label: "C", value: "c" }, { label: "V", value: "v" },
      { label: "B", value: "b" }, { label: "N", value: "n" }, { label: "M", value: "m" },
      { label: ",", value: "," }, { label: ".", value: "." },
    ],
    [
      { label: "123", value: "mode-switch", variant: 'special' },
      { label: "Space", value: "space", variant: 'spacebar' },
      { label: <Zap size={20} />, value: "symbols", variant: 'special' }
    ],
  ];

  return (
    <div
      className="bg-background p-3 rounded-lg shadow-xl transition-all duration-300" // Use theme variable for background
      style={{ opacity, transform: `scale(${scale})` }}
    >
      <div className="space-y-2">
        {keyRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-1.5 justify-center">
            {row.map((keyConfig) => (
              <Key
                key={keyConfig.value}
                label={keyConfig.label}
                value={keyConfig.value}
                onClick={() => handleKeyPress(keyConfig.value)}
                variant={keyConfig.variant as any}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
