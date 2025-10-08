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
import { Badge } from "@/components/ui/badge";
import { FileText, Video, BookOpen, Download, Play } from "lucide-react";

export const title = "Resources with Lead Magnets";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
              <div className="grid grid-cols-[1fr_240px] gap-4">
                <div className="space-y-3">
                  <NavigationMenuLink href="#">
                    <FileText className="h-5 w-5" />
                    <div>
                      <span className="font-medium">Documentation</span>
                      <span className="text-muted-foreground">
                        Complete guides and API references
                      </span>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <Video className="h-5 w-5" />
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Video Tutorials</span>
                      <Badge variant="secondary">Free</Badge>
                    </div>
                    <span className="text-muted-foreground">
                      Learn with step-by-step video courses
                    </span>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <BookOpen className="h-5 w-5" />
                    <div>
                      <span className="font-medium">Blog</span>
                      <span className="text-muted-foreground">
                        Latest insights and best practices
                      </span>
                    </div>
                  </NavigationMenuLink>
                </div>
                <div className="space-y-3 rounded-lg bg-muted p-4">
                  <div className="aspect-video overflow-hidden rounded bg-background" />
                  <div className="space-y-2">
                    <Badge variant="default">Featured</Badge>
                    <h4 className="font-semibold">Complete Platform Guide</h4>
                    <p className="text-xs text-muted-foreground">
                      80-page comprehensive guide to mastering our platform
                    </p>
                  </div>
                  <Button size="sm" className="w-full">
                    <Download />
                    Download Free
                  </Button>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-primary/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Webinar: Advanced Strategies</h4>
                    <p className="text-sm text-muted-foreground">
                      Join our next live session on Friday at 2 PM EST
                    </p>
                  </div>
                  <Button size="sm">
                    <Play />
                    Register Now
                  </Button>
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
