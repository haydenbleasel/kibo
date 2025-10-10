import {
  ArchiveIcon,
  CheckSquareIcon,
  FolderIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Bulk Actions";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <CheckSquareIcon />
        Select All
      </Button>
      <Button size="sm" variant="outline">
        <Trash2Icon />
        Delete
      </Button>
      <Button size="sm" variant="outline">
        <ArchiveIcon />
        Archive
      </Button>
      <Button size="sm" variant="outline">
        <FolderIcon />
        Move
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        Select All (12)
      </Button>
      <Button size="sm" variant="outline">
        Delete (3)
      </Button>
      <Button size="sm" variant="outline">
        Archive (3)
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
