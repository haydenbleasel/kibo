"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Popover with Steps";

const Example = () => {
  const [step, setStep] = useState(1);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Start Tour</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Step {step} of 3</h4>
            <p className="text-muted-foreground text-sm">
              {step === 1 && "Welcome to the tour. Let's get started!"}
              {step === 2 && "Here's an important feature to know about."}
              {step === 3 && "You're all set! Enjoy using the app."}
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <Button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              size="sm"
              variant="outline"
            >
              Previous
            </Button>
            <Button
              disabled={step === 3}
              onClick={() => setStep(step + 1)}
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
