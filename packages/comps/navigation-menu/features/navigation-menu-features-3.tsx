"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Users,
  MessageSquare,
  Calendar,
  FileText,
  BarChart,
  Settings,
} from "lucide-react";

export const title = "Feature Sections with Headers";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Collaboration</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px] p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Team Tools</h4>
                  <div className="space-y-1">
                    <NavigationMenuLink href="#">
                      <Users className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Team Management</span>
                        <span className="text-muted-foreground">
                          Organize and manage your team members
                        </span>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <MessageSquare className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Team Chat</span>
                        <span className="text-muted-foreground">
                          Real-time messaging and collaboration
                        </span>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Project Tools</h4>
                  <div className="space-y-1">
                    <NavigationMenuLink href="#">
                      <Calendar className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Project Timeline</span>
                        <span className="text-muted-foreground">
                          Track milestones and deadlines
                        </span>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <FileText className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Documentation</span>
                        <span className="text-muted-foreground">
                          Shared knowledge base and wikis
                        </span>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Management</h4>
                  <div className="space-y-1">
                    <NavigationMenuLink href="#">
                      <BarChart className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Reports</span>
                        <span className="text-muted-foreground">
                          Team performance and insights
                        </span>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <Settings className="h-4 w-4" />
                      <div>
                        <span className="font-medium">Settings</span>
                        <span className="text-muted-foreground">
                          Configure team preferences
                        </span>
                      </div>
                    </NavigationMenuLink>
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
