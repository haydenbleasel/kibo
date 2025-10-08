"use client";

import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Real-time Validation";

const Example = () => {
  const [password, setPassword] = useState("");

  const validations = [
    { text: "At least 8 characters", valid: password.length >= 8 },
    { text: "Contains a number", valid: /\d/.test(password) },
    { text: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    { text: "Contains special character", valid: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="password-realtime">Create Password</Label>
      <Input
        className="bg-background"
        id="password-realtime"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        type="password"
        value={password}
      />
      <div className="space-y-1">
        {validations.map((validation, index) => (
          <div
            className={`flex items-center gap-2 text-sm ${
              validation.valid
                ? "text-green-600 dark:text-green-400"
                : "text-muted-foreground"
            }`}
            key={index}
          >
            {validation.valid ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
            <span>{validation.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
