import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Article Preview Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Read More</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Getting Started with React</SheetTitle>
        <SheetDescription>A comprehensive guide for beginners</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>By John Smith</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <div className="space-y-3 text-sm">
          <p>
            React is a popular JavaScript library for building user interfaces.
            In this guide, we'll cover the basics of getting started with React.
          </p>
          <p>
            You'll learn about components, props, state, and how to create your
            first React application from scratch.
          </p>
        </div>
        <Button className="w-full">Read Full Article</Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
