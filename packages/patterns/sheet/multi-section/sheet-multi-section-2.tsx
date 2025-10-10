"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Sheet with Tabs";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content:
      "Project overview content goes here. This could include project status, team members, and other relevant information.",
  },
  {
    id: "activity",
    label: "Activity",
    content:
      "Recent activity and updates for this project. View commits, pull requests, and other team activities.",
  },
  {
    id: "settings",
    label: "Settings",
    content:
      "Configure project settings including permissions, integrations, and preferences.",
  },
];

const Example = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Project Details</SheetTitle>
          <SheetDescription>
            View and manage project information
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 border-b">
            {tabs.map((tab) => (
              <button
                className={`px-3 pb-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-primary border-b-2 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Example;
