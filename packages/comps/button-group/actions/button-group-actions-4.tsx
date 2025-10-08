import { Edit2Icon, FlagIcon, ReplyIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Comment Actions";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="ghost">
        <ReplyIcon />
        Reply
      </Button>
      <Button size="sm" variant="ghost">
        <Edit2Icon />
        Edit
      </Button>
      <Button size="sm" variant="ghost">
        <Trash2Icon />
        Delete
      </Button>
      <Button size="sm" variant="ghost">
        <FlagIcon />
        Report
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <ReplyIcon />
      </Button>
      <Button size="sm" variant="outline">
        <Edit2Icon />
      </Button>
      <Button size="sm" variant="outline">
        <Trash2Icon />
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
