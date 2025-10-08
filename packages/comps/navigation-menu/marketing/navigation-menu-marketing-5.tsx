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
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Briefcase,
  Home,
} from "lucide-react";

export const title = "Industry Solutions";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  SOLUTIONS BY INDUSTRY
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tailored solutions for your specific industry needs
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Financial Services</div>
                      <p className="text-sm text-muted-foreground">
                        Secure, compliant solutions for banking and fintech
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">E-commerce</div>
                      <p className="text-sm text-muted-foreground">
                        Scale your online store with powerful tools
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Education</div>
                      <p className="text-sm text-muted-foreground">
                        Empower learning with modern technology
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Healthcare</div>
                      <p className="text-sm text-muted-foreground">
                        HIPAA-compliant solutions for providers
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Professional Services</div>
                      <p className="text-sm text-muted-foreground">
                        Tools for consultants and agencies
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Real Estate</div>
                      <p className="text-sm text-muted-foreground">
                        Streamline property management workflows
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
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
