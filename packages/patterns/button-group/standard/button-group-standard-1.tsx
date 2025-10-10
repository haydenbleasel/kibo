import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Basic Button Group";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        Small
      </Button>
      <Button size="sm" variant="outline">
        Group
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="lg" variant="outline">
        Large
      </Button>
      <Button size="lg" variant="outline">
        Group
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
