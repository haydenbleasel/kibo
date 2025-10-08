"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Code,
  Palette,
  BarChart,
  Shield,
  Zap,
  FileText,
  Video,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const title = "Full Mega Menu";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] p-6">
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                      CORE FEATURES
                    </h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <Sparkles className="h-5 w-5" />
                        <div>
                          <span className="font-medium">AI Assistant</span>
                          <span className="text-muted-foreground">
                            Intelligent code suggestions
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Code className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Code Editor</span>
                          <span className="text-muted-foreground">
                            Advanced syntax highlighting
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Palette className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Design Tools</span>
                          <span className="text-muted-foreground">
                            Visual design system builder
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                      ADVANCED
                    </h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <BarChart className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Analytics</span>
                          <span className="text-muted-foreground">
                            Real-time performance insights
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Shield className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Security</span>
                          <span className="text-muted-foreground">
                            Enterprise-grade protection
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Zap className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Automation</span>
                          <span className="text-muted-foreground">
                            Workflow automation tools
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                      RESOURCES
                    </h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm font-medium">Documentation</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Video className="h-4 w-4" />
                        <span className="text-sm font-medium">Video Tutorials</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm font-medium">Guides</span>
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                      COMPANY
                    </h4>
                    <div className="space-y-2">
                      <NavigationMenuLink href="#">
                        <span className="text-sm font-medium">About</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span className="text-sm font-medium">Blog</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <span className="text-sm font-medium">Careers</span>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="aspect-video rounded bg-background" />
                    <div className="mt-3 space-y-2">
                      <h4 className="font-semibold">Getting Started</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn the basics in just 5 minutes
                      </p>
                      <Button size="sm" className="w-full">
                        Watch Tutorial
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <h4 className="font-semibold">Need Help?</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Talk to our sales team
                    </p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      Contact Sales
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
