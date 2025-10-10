import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Contact Form Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Contact Us</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Contact Us</SheetTitle>
        <SheetDescription>
          Send us a message and we'll get back to you soon.
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Your message" />
        </div>
        <Button className="w-full">Send Message</Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
