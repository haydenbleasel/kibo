import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Form with Radio Group";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Export Data</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Export Format</AlertDialogTitle>
        <AlertDialogDescription>
          Choose the format you want to export your data in.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="py-4">
        <RadioGroup defaultValue="json">
          <div className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
            <RadioGroupItem id="json" value="json" />
            <Label className="flex-1 cursor-pointer" htmlFor="json">
              <div className="font-medium">JSON</div>
              <div className="text-muted-foreground text-xs">
                JavaScript Object Notation
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
            <RadioGroupItem id="csv" value="csv" />
            <Label className="flex-1 cursor-pointer" htmlFor="csv">
              <div className="font-medium">CSV</div>
              <div className="text-muted-foreground text-xs">
                Comma-separated values
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
            <RadioGroupItem id="xml" value="xml" />
            <Label className="flex-1 cursor-pointer" htmlFor="xml">
              <div className="font-medium">XML</div>
              <div className="text-muted-foreground text-xs">
                Extensible Markup Language
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Export</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
