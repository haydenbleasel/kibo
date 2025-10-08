import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export const title = "Card Details";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Add Payment Method</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Add card details</DialogTitle>
        <DialogDescription>
          Enter your card information to add a payment method.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardName">Cardholder name</Label>
          <Input id="cardName" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry date</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="default" />
          <Label className="font-normal text-sm" htmlFor="default">
            Set as default payment method
          </Label>
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Add Card</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
