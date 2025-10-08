"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Wizard Steps";

const Example = () => {
  const [step, setStep] = useState(2);
  const totalSteps = 4;

  const steps = ["Account", "Profile", "Preferences", "Review"];

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={step === 1}
          onClick={() => setStep(Math.max(1, step - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
          Back
        </Button>
        <Button size="sm" variant="outline">
          Step {step} of {totalSteps}
        </Button>
        <Button
          disabled={step === totalSteps}
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
          size="sm"
          variant="outline"
        >
          Next
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          disabled={step === 1}
          onClick={() => setStep(Math.max(1, step - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
        </Button>
        {steps.map((name, i) => (
          <Button
            key={name}
            onClick={() => setStep(i + 1)}
            size="sm"
            variant={step === i + 1 ? "default" : "outline"}
          >
            {name}
          </Button>
        ))}
        <Button
          disabled={step === totalSteps}
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
          size="sm"
          variant="outline"
        >
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
