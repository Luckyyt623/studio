"use client";

import React, { useState, useRef } from "react";
import Keyboard from "@/components/float-type/keyboard";
import FloatingActionBar from "@/components/float-type/floating-action-bar";
import SettingsPanel from "@/components/float-type/settings-panel";
import { Button } from "@/components/ui/button";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

export default function FloatTypePage() {
  const [masterVisibility, setMasterVisibility] = useState(true);
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const [quickActionsVisible, setQuickActionsVisible] = useState(true);
  const [transparency, setTransparency] = useState(1); // 0.1 (mostly transparent) to 1 (opaque)
  const [keyboardScale, setKeyboardScale] = useState(1); // Scale factor: 0.5x to 1.5x
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  const effectiveKeyboardVisible = masterVisibility && keyboardVisible;
  const effectiveQuickActionsVisible = masterVisibility && quickActionsVisible;

  const handleKeyPress = (key: string) => {
    // In a real scenario, this would interact with an input field or system.
    // For this demo, we'll just log it.
    console.log("Key pressed on virtual keyboard:", key);
  };

  return (
    <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-foreground hover:bg-accent/20 hover:text-accent-foreground"
        onClick={() => setSettingsPanelOpen(!settingsPanelOpen)}
        aria-label={settingsPanelOpen ? "Close settings panel" : "Open settings panel"}
      >
        {settingsPanelOpen ? <PanelRightClose size={24} /> : <PanelRightOpen size={24} />}
      </Button>

      <main ref={mainContainerRef} className="flex-1 relative p-4 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
        style={{ marginRight: settingsPanelOpen ? '320px' : '0px' }} // Adjust margin based on panel state
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {effectiveKeyboardVisible && (
            <div className="pointer-events-auto">
              <Keyboard
                opacity={transparency}
                scale={keyboardScale}
                onKeyPress={handleKeyPress}
              />
            </div>
          )}
        </div>
        
        {/* Floating Action Bar renders its children as fixed, so it doesn't need to be wrapped */}
        {effectiveQuickActionsVisible && (
          <FloatingActionBar
            opacity={transparency}
            containerRef={mainContainerRef} // Pass ref for drag constraints
          />
        )}
      </main>

      <div 
        className="fixed top-0 right-0 h-full transition-transform duration-300 ease-in-out z-40"
        style={{ transform: settingsPanelOpen ? 'translateX(0%)' : 'translateX(100%)' }}
      >
        <SettingsPanel
          masterVisibility={masterVisibility}
          onToggleMasterVisibility={() => setMasterVisibility((v) => !v)}
          keyboardVisible={keyboardVisible}
          onToggleKeyboardVisibility={() => setKeyboardVisible((v) => !v)}
          quickActionsVisible={quickActionsVisible}
          onToggleQuickActionsVisibility={() => setQuickActionsVisible((v) => !v)}
          transparency={transparency}
          onSetTransparency={setTransparency}
          keyboardScale={keyboardScale}
          onSetKeyboardScale={setKeyboardScale}
        />
      </div>
    </div>
  );
}
