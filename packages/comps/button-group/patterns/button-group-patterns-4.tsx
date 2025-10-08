import { CopyIcon, DownloadIcon, SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Kbd } from "@/components/ui/kbd";

export const title = "Keyboard Shortcuts";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <CopyIcon />
        Copy
        <Kbd className="ml-2">⌘C</Kbd>
      </Button>
      <Button size="sm" variant="outline">
        <SaveIcon />
        Save
        <Kbd className="ml-2">⌘S</Kbd>
      </Button>
      <Button size="sm" variant="outline">
        <DownloadIcon />
        Export
        <Kbd className="ml-2">⌘E</Kbd>
      </Button>
    </ButtonGroup>
    <ButtonGroup orientation="vertical">
      <Button className="justify-between" size="sm" variant="outline">
        <div className="flex items-center gap-2">
          <CopyIcon />
          Copy
        </div>
        <Kbd>⌘C</Kbd>
      </Button>
      <Button className="justify-between" size="sm" variant="outline">
        <div className="flex items-center gap-2">
          <SaveIcon />
          Save
        </div>
        <Kbd>⌘S</Kbd>
      </Button>
      <Button className="justify-between" size="sm" variant="outline">
        <div className="flex items-center gap-2">
          <DownloadIcon />
          Export
        </div>
        <Kbd>⌘E</Kbd>
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
