"use client";

import { ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const title = "Case Studies & Testimonials";

const testimonials = [
  {
    company: "Vercel",
    avatarSrc: "https://github.com/vercel.png",
    avatarFallback: "VC",
    rating: 5,
    quote:
      "Increased deployment speed by 300% and reduced infrastructure costs significantly.",
    href: "#",
  },
  {
    company: "Stripe",
    avatarSrc: "https://github.com/stripe.png",
    avatarFallback: "ST",
    rating: 5,
    quote:
      "Scaled to process millions of transactions with 99.99% uptime guarantee.",
    href: "#",
  },
  {
    company: "Airbnb",
    avatarSrc: "https://github.com/airbnb.png",
    avatarFallback: "AB",
    rating: 5,
    quote:
      "Improved user experience and reduced page load times by 50% globally.",
    href: "#",
  },
  {
    company: "Shopify",
    avatarSrc: "https://github.com/shopify.png",
    avatarFallback: "SH",
    rating: 5,
    quote:
      "Handled Black Friday traffic spike with zero downtime and seamless scaling.",
    href: "#",
  },
];

const Example = () => (
  <div className="pr-[50vw] pb-[50vh]">
    <div className="w-full max-w-md rounded-md border bg-background p-px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Success Stories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] p-4">
                <div className="mb-4">
                  <h3 className="font-semibold text-muted-foreground text-sm">
                    CUSTOMER STORIES
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {testimonials.map((testimonial) => (
                    <NavigationMenuLink
                      href={testimonial.href}
                      key={testimonial.company}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="size-6">
                            <AvatarImage src={testimonial.avatarSrc} />
                            <AvatarFallback>
                              {testimonial.avatarFallback}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">
                              {testimonial.company}
                            </div>
                            <div className="flex gap-0.5">
                              {new Array(testimonial.rating)
                                .fill(null)
                                .map((_, i) => (
                                  <Star
                                    className="size-3 fill-yellow-500 text-yellow-500"
                                    key={i}
                                  />
                                ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-1 font-medium text-sm">
                          Read case study
                          <ArrowRight className="size-4" />
                        </div>
                      </div>
                    </NavigationMenuLink>
                  ))}
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
