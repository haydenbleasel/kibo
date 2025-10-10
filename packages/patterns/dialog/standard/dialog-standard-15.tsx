"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const title = "Plan Selection";

const Example = () => {
  const [selectedPlan, setSelectedPlan] = useState<
    "hobby" | "pro" | "enterprise"
  >("pro");

  const plans = [
    {
      id: "hobby" as const,
      name: "Hobby",
      price: "$0",
      description: "For personal projects",
    },
    {
      id: "pro" as const,
      name: "Pro",
      price: "$29",
      description: "For professionals",
    },
    {
      id: "enterprise" as const,
      name: "Enterprise",
      price: "$99",
      description: "For large teams",
    },
  ];

  const features = [
    "Unlimited projects",
    "Advanced analytics",
    "Priority support",
    "Custom domain",
    "Team collaboration",
    "API access",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Choose Plan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Choose your plan</DialogTitle>
          <DialogDescription>
            Select the plan that best fits your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {plans.map((plan) => (
              <button
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-colors",
                  selectedPlan === plan.id
                    ? "border-primary bg-primary/5"
                    : "border-input hover:border-primary/50"
                )}
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                type="button"
              >
                <span className="font-semibold">{plan.name}</span>
                <span className="font-bold text-lg">{plan.price}</span>
                <span className="text-center text-muted-foreground text-xs">
                  {plan.description}
                </span>
              </button>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Features included:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li className="flex items-center gap-2 text-sm" key={index}>
                  <CheckIcon className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button">
            Continue with {plans.find((p) => p.id === selectedPlan)?.name}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
