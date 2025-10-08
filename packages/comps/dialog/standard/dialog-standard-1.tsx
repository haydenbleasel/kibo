import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const title = "Standard";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share this link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this document.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <input
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
            readOnly
            value="https://example.com/share/abc123"
          />
        </div>
        <Button className="px-3" size="sm">
          Copy
        </Button>
      </div>
      <DialogFooter className="sm:justify-start">
        <Button type="button" variant="secondary">
          Close
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
