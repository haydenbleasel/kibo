import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Button Group Variants";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Cut</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Undo</Button>
      <Button variant="outline">Redo</Button>
    </ButtonGroup>
  </div>
);

export default Example;
