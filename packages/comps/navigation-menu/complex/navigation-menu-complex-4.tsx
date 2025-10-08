"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Database,
  Lock,
} from "lucide-react";

export const title = "Tabbed Mega Menu";

const Example = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="pb-[50vh]">
      <div className="w-full max-w-md bg-background rounded-md p-px border">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[700px] p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4 grid w-full grid-cols-3">
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                    <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                  </TabsList>
                  <TabsContent value="web" className="mt-0">
                    <div className="grid grid-cols-3 gap-4">
                      <NavigationMenuLink href="#">
                        <Globe className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Web Hosting</span>
                          <span className="text-muted-foreground">
                            Fast, reliable hosting
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Monitor className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Static Sites</span>
                          <span className="text-muted-foreground">
                            Deploy in seconds
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Cloud className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Edge Network</span>
                          <span className="text-muted-foreground">
                            Global CDN delivery
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </TabsContent>
                  <TabsContent value="mobile" className="mt-0">
                    <div className="grid grid-cols-3 gap-4">
                      <NavigationMenuLink href="#">
                        <Smartphone className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Mobile SDK</span>
                          <span className="text-muted-foreground">
                            Native app development
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Monitor className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Cross-Platform</span>
                          <span className="text-muted-foreground">
                            React Native & Flutter
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Lock className="h-5 w-5" />
                        <div>
                          <span className="font-medium">App Security</span>
                          <span className="text-muted-foreground">
                            Secure your mobile apps
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </TabsContent>
                  <TabsContent value="infrastructure" className="mt-0">
                    <div className="grid grid-cols-3 gap-4">
                      <NavigationMenuLink href="#">
                        <Database className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Databases</span>
                          <span className="text-muted-foreground">
                            Managed SQL & NoSQL
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Cloud className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Cloud Storage</span>
                          <span className="text-muted-foreground">
                            Scalable object storage
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#">
                        <Lock className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Security</span>
                          <span className="text-muted-foreground">
                            DDoS & firewall protection
                          </span>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="mt-6 rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Need help choosing?</strong> Our team can help you find
                    the right solution for your needs.
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
