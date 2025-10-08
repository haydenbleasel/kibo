import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Create New Item Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Create New</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Item</SheetTitle>
        <SheetDescription>Add a new item to your collection.</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="item-name">Item Name</Label>
          <Input id="item-name" placeholder="Enter item name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" placeholder="Enter description" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="0.00" type="number" />
        </div>
      </div>
      <SheetFooter>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
        <Button className="w-full">Create</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
