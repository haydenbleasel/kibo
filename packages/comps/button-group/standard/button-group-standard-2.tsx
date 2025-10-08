import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Vertical Button Group";

const Example = () => (
  <div className="flex gap-4">
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
    <ButtonGroup orientation="vertical">
      <Button size="sm" variant="outline">
        Option 1
      </Button>
      <Button size="sm" variant="outline">
        Option 2
      </Button>
      <Button size="sm" variant="outline">
        Option 3
      </Button>
      <Button size="sm" variant="outline">
        Option 4
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
