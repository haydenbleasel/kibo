"use client";

import {
  ArrowRight,
  BarChart,
  BookOpen,
  Code,
  FileText,
  Palette,
  Shield,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Full Mega Menu";

const coreFeatures = [
  {
    icon: Sparkles,
    label: "AI Assistant",
    description: "Intelligent code suggestions",
    href: "#",
  },
  {
    icon: Code,
    label: "Code Editor",
    description: "Advanced syntax highlighting",
    href: "#",
  },
  {
    icon: Palette,
    label: "Design Tools",
    description: "Visual design system builder",
    href: "#",
  },
];

const advancedFeatures = [
  {
    icon: BarChart,
    label: "Analytics",
    description: "Real-time performance insights",
    href: "#",
  },
  {
    icon: Shield,
    label: "Security",
    description: "Enterprise-grade protection",
    href: "#",
  },
  {
    icon: Zap,
    label: "Automation",
    description: "Workflow automation tools",
    href: "#",
  },
];

const resources = [
  { icon: FileText, label: "Documentation", href: "#" },
  { icon: Video, label: "Video Tutorials", href: "#" },
  { icon: BookOpen, label: "Guides", href: "#" },
];

const company = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const sidebar = {
  tutorial: {
    title: "Getting Started",
    description: "Learn the basics in just 5 minutes",
    button: { label: "Watch Tutorial", icon: ArrowRight },
  },
  contact: {
    title: "Need Help?",
    description: "Talk to our sales team",
    button: { label: "Contact Sales" },
  },
};

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] p-6">
                <div className="grid grid-cols-[2fr_1fr_1fr] gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-3 font-semibold text-muted-foreground text-sm">
                        CORE FEATURES
                      </h4>
                      <div className="space-y-2">
                        {coreFeatures.map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <NavigationMenuLink
                              className="flex flex-row items-start gap-2"
                              href={feature.href}
                              key={feature.label}
                            >
                              <Icon className="size-5" />
                              <div>
                                <span className="block font-medium">
                                  {feature.label}
                                </span>
                                <span className="block text-muted-foreground">
                                  {feature.description}
                                </span>
                              </div>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-muted-foreground text-sm">
                        ADVANCED
                      </h4>
                      <div className="space-y-2">
                        {advancedFeatures.map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <NavigationMenuLink
                              className="flex flex-row items-start gap-2"
                              href={feature.href}
                              key={feature.label}
                            >
                              <Icon className="size-5" />
                              <div>
                                <span className="block font-medium">
                                  {feature.label}
                                </span>
                                <span className="block text-muted-foreground">
                                  {feature.description}
                                </span>
                              </div>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-3 font-semibold text-muted-foreground text-sm">
                        RESOURCES
                      </h4>
                      <div className="space-y-2">
                        {resources.map((resource) => {
                          const Icon = resource.icon;
                          return (
                            <NavigationMenuLink
                              className="flex flex-row items-start gap-2"
                              href={resource.href}
                              key={resource.label}
                            >
                              <Icon className="size-4" />
                              <span className="font-medium text-sm">
                                {resource.label}
                              </span>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-muted-foreground text-sm">
                        COMPANY
                      </h4>
                      <div className="space-y-2">
                        {company.map((item) => (
                          <NavigationMenuLink href={item.href} key={item.label}>
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <div className="aspect-video rounded bg-background" />
                      <div className="mt-3 space-y-2">
                        <h4 className="font-semibold">
                          {sidebar.tutorial.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {sidebar.tutorial.description}
                        </p>
                        <Button className="w-full" size="sm">
                          {sidebar.tutorial.button.label}
                          <sidebar.tutorial.button.icon />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h4 className="font-semibold">{sidebar.contact.title}</h4>
                      <p className="mt-1 text-muted-foreground text-sm">
                        {sidebar.contact.description}
                      </p>
                      <Button
                        className="mt-3 w-full"
                        size="sm"
                        variant="outline"
                      >
                        {sidebar.contact.button.label}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
