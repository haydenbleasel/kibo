"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Zap, Shield, BarChart, Globe, Lock, Smartphone } from "lucide-react";

export const title = "Feature Cards with Icons";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                <NavigationMenuLink href="#">
                  <Zap className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Lightning Fast</span>
                    <span className="text-muted-foreground">
                      Built for speed with optimized performance
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Shield className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Enterprise Security</span>
                    <span className="text-muted-foreground">
                      Bank-level encryption and compliance
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <BarChart className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Advanced Analytics</span>
                    <span className="text-muted-foreground">
                      Real-time insights and reporting
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Globe className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Global CDN</span>
                    <span className="text-muted-foreground">
                      Fast delivery to users worldwide
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Lock className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Data Privacy</span>
                    <span className="text-muted-foreground">
                      GDPR and CCPA compliant
                    </span>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <span className="font-medium">Mobile Ready</span>
                    <span className="text-muted-foreground">
                      Responsive design for all devices
                    </span>
                  </div>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default Example;
