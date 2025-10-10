"use client";

import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  Globe,
  Lock,
  Monitor,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Tabbed Mega Menu";

const tabs = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "infrastructure", label: "Infrastructure" },
];

const tabContent: Record<
  string,
  Array<{ icon: LucideIcon; title: string; description: string }>
> = {
  web: [
    {
      icon: Globe,
      title: "Web Hosting",
      description: "Fast, reliable hosting",
    },
    {
      icon: Monitor,
      title: "Static Sites",
      description: "Deploy in seconds",
    },
    {
      icon: Cloud,
      title: "Edge Network",
      description: "Global CDN delivery",
    },
  ],
  mobile: [
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Native app development",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "React Native & Flutter",
    },
    {
      icon: Lock,
      title: "App Security",
      description: "Secure your mobile apps",
    },
  ],
  infrastructure: [
    {
      icon: Database,
      title: "Databases",
      description: "Managed SQL & NoSQL",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Scalable object storage",
    },
    {
      icon: Lock,
      title: "Security",
      description: "DDoS & firewall protection",
    },
  ],
};

const Example = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="pr-[50vw] pb-[50vh]">
      <div className="w-full max-w-md rounded-md border bg-background p-px">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[700px] p-6">
                  <Tabs onValueChange={setActiveTab} value={activeTab}>
                    <TabsList className="mb-4 grid w-full grid-cols-3">
                      {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {tabs.map((tab) => (
                      <TabsContent
                        className="mt-0"
                        key={tab.value}
                        value={tab.value}
                      >
                        <div className="grid grid-cols-3 gap-4">
                          {tabContent[tab.value].map((item) => {
                            const Icon = item.icon;
                            return (
                              <NavigationMenuLink href="#" key={item.title}>
                                <Icon className="size-5" />
                                <div>
                                  <span className="block font-medium">
                                    {item.title}
                                  </span>
                                  <span className="block text-muted-foreground">
                                    {item.description}
                                  </span>
                                </div>
                              </NavigationMenuLink>
                            );
                          })}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                  <div className="mt-6 rounded-lg bg-muted p-4">
                    <p className="text-muted-foreground text-sm">
                      <strong>Need help choosing?</strong> Our team can help you
                      find the right solution for your needs.
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Example;
