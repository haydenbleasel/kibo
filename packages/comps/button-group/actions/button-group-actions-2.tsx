import { DownloadIcon, Edit2Icon, Share2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "File Operations";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <DownloadIcon />
        Download
      </Button>
      <Button size="sm" variant="outline">
        <Share2Icon />
        Share
      </Button>
      <Button size="sm" variant="outline">
        <Edit2Icon />
        Edit
      </Button>
      <Button size="sm" variant="outline">
        <Trash2Icon />
        Delete
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <DownloadIcon />
      </Button>
      <Button size="sm" variant="outline">
        <Share2Icon />
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
