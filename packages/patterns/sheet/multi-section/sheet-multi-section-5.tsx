import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Sheet with Sticky Header and Footer";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>View Details</Button>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      <SheetHeader>
        <SheetTitle>Product Information</SheetTitle>
        <SheetDescription>
          Detailed product specifications and features
        </SheetDescription>
      </SheetHeader>
      <Separator />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-2 font-semibold text-sm">Description</h4>
            <p className="text-muted-foreground text-sm">
              This is a comprehensive product description that includes all the
              important details about the product. It can be quite long and will
              scroll if needed.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-sm">Specifications</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>Feature 1: Value</li>
              <li>Feature 2: Value</li>
              <li>Feature 3: Value</li>
              <li>Feature 4: Value</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-sm">Reviews</h4>
            <p className="text-muted-foreground text-sm">
              Customer reviews and ratings would be displayed here.
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <SheetFooter>
        <Button className="w-full" variant="outline">
          Add to Wishlist
        </Button>
        <Button className="w-full">Add to Cart</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
