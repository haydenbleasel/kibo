import { Calendar } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const title = "Information with Status Badge";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Info</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <Calendar className="size-5" />
          Scheduled Maintenance
        </AlertDialogTitle>
        <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-2.5 py-0.5 font-semibold text-blue-700 text-xs dark:bg-blue-900 dark:text-blue-300">
          Upcoming
        </div>
        <AlertDialogDescription>
          We'll be performing scheduled maintenance on Sunday, March 15th from
          2:00 AM - 4:00 AM EST. During this time, the service may be
          temporarily unavailable.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Understood</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
