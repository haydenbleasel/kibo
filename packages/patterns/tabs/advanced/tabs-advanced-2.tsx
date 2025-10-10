"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Controlled Tabs";

const Example = () => {
  const [activeTab, setActiveTab] = useState("step1");

  const handleNext = () => {
    if (activeTab === "step1") setActiveTab("step2");
    else if (activeTab === "step2") setActiveTab("step3");
  };

  const handlePrevious = () => {
    if (activeTab === "step3") setActiveTab("step2");
    else if (activeTab === "step2") setActiveTab("step1");
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      <Tabs onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="step1">Step 1</TabsTrigger>
          <TabsTrigger value="step2">Step 2</TabsTrigger>
          <TabsTrigger value="step3">Step 3</TabsTrigger>
        </TabsList>
        <TabsContent value="step1">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold text-lg">
              Step 1: Basic Information
            </h3>
            <p className="mb-4 text-muted-foreground text-sm">
              Let's start by collecting some basic information about your
              project.
            </p>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <p className="font-medium text-sm">Project Name</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Enter a name for your project
                </p>
              </div>
              <div className="rounded-md border p-4">
                <p className="font-medium text-sm">Description</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Brief description of what you're building
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="step2">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold text-lg">
              Step 2: Configuration
            </h3>
            <p className="mb-4 text-muted-foreground text-sm">
              Configure the settings and preferences for your project.
            </p>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <p className="font-medium text-sm">Framework</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Choose your preferred framework
                </p>
              </div>
              <div className="rounded-md border p-4">
                <p className="font-medium text-sm">Build Tool</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Select your build tool
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="step3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold text-lg">
              Step 3: Review & Confirm
            </h3>
            <p className="mb-4 text-muted-foreground text-sm">
              Review your selections and confirm to proceed.
            </p>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <p className="font-medium text-sm">Summary</p>
                <p className="mt-1 text-muted-foreground text-sm">
                  Everything looks good! You're ready to start building.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-between">
        <Button
          disabled={activeTab === "step1"}
          onClick={handlePrevious}
          variant="outline"
        >
          Previous
        </Button>
        <Button
          disabled={activeTab === "step3"}
          onClick={handleNext}
          variant="default"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Example;
