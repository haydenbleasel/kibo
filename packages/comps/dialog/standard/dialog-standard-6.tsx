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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Newsletter";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Subscribe</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Subscribe to our newsletter</DialogTitle>
        <DialogDescription>
          Get the latest updates and news delivered to your inbox.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" placeholder="you@example.com" type="email" />
      </div>
      <DialogFooter>
        <Button type="button" variant="outline">
          Maybe Later
        </Button>
        <Button type="button">Subscribe</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
