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

export const title = "Sheet with Action Buttons in Footer";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Create Task</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>New Task</SheetTitle>
        <SheetDescription>
          Create a new task and assign it to a team member
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="task-name">Task Name</Label>
          <Input id="task-name" placeholder="Enter task name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="assignee">Assignee</Label>
          <Input id="assignee" placeholder="Select assignee" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="due-date">Due Date</Label>
          <Input id="due-date" type="date" />
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline">Save Draft</Button>
        <Button>Create Task</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
