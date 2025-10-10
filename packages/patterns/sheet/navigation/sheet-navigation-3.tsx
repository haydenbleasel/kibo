import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Nested Navigation Menu Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Menu</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Products</h3>
          <div className="flex flex-col gap-1 pl-4">
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              All Products
            </a>
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              New Arrivals
            </a>
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              Best Sellers
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Resources</h3>
          <div className="flex flex-col gap-1 pl-4">
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              Documentation
            </a>
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              Guides
            </a>
            <a
              className="text-muted-foreground text-sm hover:text-foreground"
              href="#"
            >
              API Reference
            </a>
          </div>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
);

export default Example;
