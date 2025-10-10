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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const title = "Form with Checkboxes";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Notification Settings</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Notification Preferences</AlertDialogTitle>
        <AlertDialogDescription>
          Choose which notifications you want to receive.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="space-y-4 py-4">
        <div className="flex items-start space-x-3">
          <Checkbox defaultChecked id="email-notif" />
          <div className="grid gap-1.5">
            <Label className="font-medium" htmlFor="email-notif">
              Email Notifications
            </Label>
            <p className="text-muted-foreground text-sm">
              Receive email updates about your account activity
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox defaultChecked id="push-notif" />
          <div className="grid gap-1.5">
            <Label className="font-medium" htmlFor="push-notif">
              Push Notifications
            </Label>
            <p className="text-muted-foreground text-sm">
              Get push notifications on your devices
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox id="sms-notif" />
          <div className="grid gap-1.5">
            <Label className="font-medium" htmlFor="sms-notif">
              SMS Notifications
            </Label>
            <p className="text-muted-foreground text-sm">
              Receive important alerts via text message
            </p>
          </div>
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Save Preferences</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
