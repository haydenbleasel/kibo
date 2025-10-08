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
  Building,
  Users,
  Briefcase,
  Shield,
  HeadphonesIcon,
  Award,
} from "lucide-react";

export const title = "Feature Categories";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">For Enterprise</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Enterprise Platform</span>
                      <span className="text-muted-foreground">
                        Scalable solution for large organizations
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">SSO & SAML</span>
                      <span className="text-muted-foreground">
                        Advanced authentication options
                      </span>
                    </NavigationMenuLink>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">For Teams</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Team Collaboration</span>
                      <span className="text-muted-foreground">
                        Work together seamlessly
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Shared Workspaces</span>
                      <span className="text-muted-foreground">
                        Organize projects efficiently
                      </span>
                    </NavigationMenuLink>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">For Freelancers</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Client Management</span>
                      <span className="text-muted-foreground">
                        Manage multiple clients easily
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Time Tracking</span>
                      <span className="text-muted-foreground">
                        Track billable hours accurately
                      </span>
                    </NavigationMenuLink>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Security & Compliance</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Security Center</span>
                      <span className="text-muted-foreground">
                        Enterprise-grade security features
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Compliance</span>
                      <span className="text-muted-foreground">
                        Meet regulatory requirements
                      </span>
                    </NavigationMenuLink>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <HeadphonesIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Support & Services</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Premium Support</span>
                      <span className="text-muted-foreground">
                        24/7 dedicated support team
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Professional Services</span>
                      <span className="text-muted-foreground">
                        Expert consultation and training
                      </span>
                    </NavigationMenuLink>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Certification</h4>
                    </div>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Training Programs</span>
                      <span className="text-muted-foreground">
                        Get certified in our platform
                      </span>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <span className="font-medium">Partner Program</span>
                      <span className="text-muted-foreground">
                        Join our partner network
                      </span>
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
