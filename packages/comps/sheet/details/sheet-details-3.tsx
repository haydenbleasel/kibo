import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Order Details Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">View Order</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Order #12345</SheetTitle>
        <SheetDescription>Placed on January 15, 2024</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">Status</span>
          <Badge variant="secondary">Shipped</Badge>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-sm">Items</h4>
          <div className="flex justify-between text-sm">
            <span>Product Name x2</span>
            <span>$59.98</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Another Product x1</span>
            <span>$29.99</span>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$89.97</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-semibold text-sm">
            <span>Total</span>
            <span>$94.97</span>
          </div>
        </div>
        <Button className="w-full" variant="outline">
          Track Shipment
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
