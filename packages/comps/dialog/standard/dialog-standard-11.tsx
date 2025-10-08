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

export const title = "Signin Form";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Sign In</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Welcome back</DialogTitle>
        <DialogDescription>
          Enter your credentials to access your account.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label className="font-normal text-sm" htmlFor="remember">
              Remember me
            </Label>
          </div>
          <button className="font-medium text-sm underline" type="button">
            Forgot password?
          </button>
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full">Sign In</Button>
      </DialogFooter>
      <p className="text-center text-muted-foreground text-sm">
        Don't have an account?{" "}
        <button className="font-medium underline" type="button">
          Sign up
        </button>
      </p>
    </DialogContent>
  </Dialog>
);

export default Example;
