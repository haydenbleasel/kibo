import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Product Details Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">View Details</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Premium Headphones</SheetTitle>
        <SheetDescription>
          High-quality wireless headphones with noise cancellation
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <img
          alt="Premium Headphones"
          className="w-full rounded-md object-cover"
          src="https://placehold.co/400x300/6366f1/ffffff?text=Premium+Headphones"
        />
        <div className="flex items-center gap-2">
          <Badge>In Stock</Badge>
          <span className="font-bold text-2xl">$299.99</span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-sm">Features</h4>
          <ul className="list-inside list-disc space-y-1 text-muted-foreground text-sm">
            <li>Active noise cancellation</li>
            <li>30-hour battery life</li>
            <li>Bluetooth 5.0</li>
            <li>Premium comfort design</li>
          </ul>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
