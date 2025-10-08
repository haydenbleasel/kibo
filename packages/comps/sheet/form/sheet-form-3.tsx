import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export const title = "Search and Filter Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Filters</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Search & Filter</SheetTitle>
        <SheetDescription>
          Refine your search with filters below.
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search..." />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Categories</Label>
          <div className="flex items-center gap-2">
            <Checkbox id="cat1" />
            <label className="text-sm" htmlFor="cat1">
              Category 1
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cat2" />
            <label className="text-sm" htmlFor="cat2">
              Category 2
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cat3" />
            <label className="text-sm" htmlFor="cat3">
              Category 3
            </label>
          </div>
        </div>
        <Button className="w-full">Apply Filters</Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
