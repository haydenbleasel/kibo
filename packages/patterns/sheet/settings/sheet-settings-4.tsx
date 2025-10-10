import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const title = "Theme Settings Sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Appearance</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Appearance</SheetTitle>
        <SheetDescription>Customize how the app looks</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-3">
          <Label>Theme</Label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="light" name="theme" />
              <label className="text-sm" htmlFor="light">
                Light
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked id="dark" name="theme" />
              <label className="text-sm" htmlFor="dark">
                Dark
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="system" name="theme" />
              <label className="text-sm" htmlFor="system">
                System
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="compact">Compact Mode</Label>
          <Checkbox id="compact" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="animations">Enable Animations</Label>
          <Checkbox defaultChecked id="animations" />
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default Example;
