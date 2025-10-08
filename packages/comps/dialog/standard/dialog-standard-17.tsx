"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const title = "Onboarding";

const Example = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Origin UI",
      description:
        "Discover a powerful collection of components designed to enhance your development workflow.",
      media: (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="relative">
            <div className="h-32 w-32 rounded-full border-[16px] border-gray-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-gray-700" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Build Faster",
      description:
        "Use our pre-built components to accelerate your development process and ship products faster.",
      media: (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="text-8xl">⚡</div>
        </div>
      ),
    },
    {
      title: "Fully Customizable",
      description:
        "Every component is built with flexibility in mind. Customize colors, sizes, and behaviors to match your brand.",
      media: (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600">
          <div className="text-8xl">🎨</div>
        </div>
      ),
    },
    {
      title: "Ready to Start?",
      description:
        "Join thousands of developers who are already building amazing products with our component library.",
      media: (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-600">
          <div className="text-8xl">🚀</div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Start Onboarding</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="space-y-6">
          {steps[currentStep].media}
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-2xl">{steps[currentStep].title}</h2>
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentStep ? "bg-foreground" : "bg-muted"
                  )}
                  key={index}
                />
              ))}
            </div>
            <div className="flex gap-4">
              {currentStep < steps.length - 1 && (
                <Button onClick={handleSkip} variant="ghost">
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {currentStep === steps.length - 1 ? "Get Started" : "Next"}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
