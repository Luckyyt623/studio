"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, KeyboardIcon, Gamepad2 } from "lucide-react";

interface SettingsPanelProps {
  masterVisibility: boolean;
  onToggleMasterVisibility: () => void;
  keyboardVisible: boolean;
  onToggleKeyboardVisibility: () => void;
  quickActionsVisible: boolean;
  onToggleQuickActionsVisibility: () => void;
  transparency: number;
  onSetTransparency: (value: number) => void;
  keyboardScale: number;
  onSetKeyboardScale: (value: number) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  masterVisibility,
  onToggleMasterVisibility,
  keyboardVisible,
  onToggleKeyboardVisibility,
  quickActionsVisible,
  onToggleQuickActionsVisibility,
  transparency,
  onSetTransparency,
  keyboardScale,
  onSetKeyboardScale,
}) => {
  return (
    <Card className="w-80 min-w-[320px] h-full border-l rounded-none shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">FloatType Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="master-visibility" className="flex items-center gap-2 text-base">
              {masterVisibility ? <Eye size={20} /> : <EyeOff size={20} />}
              Show All UI
            </Label>
            <Switch
              id="master-visibility"
              checked={masterVisibility}
              onCheckedChange={onToggleMasterVisibility}
            />
          </div>
        </div>

        <Separator />

        <div className={`space-y-4 transition-opacity duration-300 ${masterVisibility ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
          <div className="flex items-center justify-between">
            <Label htmlFor="keyboard-visibility" className="flex items-center gap-2">
              <KeyboardIcon size={18} />
              Keyboard
            </Label>
            <Switch
              id="keyboard-visibility"
              checked={keyboardVisible}
              onCheckedChange={onToggleKeyboardVisibility}
              disabled={!masterVisibility}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="quick-actions-visibility" className="flex items-center gap-2">
              <Gamepad2 size={18} />
              Quick Actions
            </Label>
            <Switch
              id="quick-actions-visibility"
              checked={quickActionsVisible}
              onCheckedChange={onToggleQuickActionsVisibility}
              disabled={!masterVisibility}
            />
          </div>
        </div>

        <Separator />
        
        <div className={`space-y-3 transition-opacity duration-300 ${masterVisibility ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
          <div>
            <Label htmlFor="transparency" className="mb-2 block">UI Transparency: {Math.round(transparency * 100)}%</Label>
            <Slider
              id="transparency"
              min={0.1}
              max={1}
              step={0.05}
              value={[transparency]}
              onValueChange={(value) => onSetTransparency(value[0])}
              disabled={!masterVisibility}
            />
          </div>

          <div>
            <Label htmlFor="keyboard-scale" className="mb-2 block">Keyboard Scale: {keyboardScale.toFixed(1)}x</Label>
            <Slider
              id="keyboard-scale"
              min={0.5}
              max={1.5}
              step={0.1}
              value={[keyboardScale]}
              onValueChange={(value) => onSetKeyboardScale(value[0])}
              disabled={!masterVisibility || !keyboardVisible}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsPanel;
