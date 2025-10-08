"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";

export const title = "Case Studies & Testimonials";

const Example = () => (
  <div className="pb-[50vh]">
    <div className="w-full max-w-md bg-background rounded-md p-px border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Success Stories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  CUSTOMER STORIES
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <NavigationMenuLink href="#">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Vercel</div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Increased deployment speed by 300% and reduced infrastructure
                      costs significantly."
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      Read case study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/stripe.png" />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Stripe</div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Scaled to process millions of transactions with 99.99%
                      uptime guarantee."
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      Read case study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/airbnb.png" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Airbnb</div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Improved user experience and reduced page load times by 50%
                      globally."
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      Read case study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shopify.png" />
                        <AvatarFallback>SH</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Shopify</div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Handled Black Friday traffic spike with zero downtime and
                      seamless scaling."
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      Read case study
                      <ArrowRight className="h-4 w-4" />
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
