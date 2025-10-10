import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Nested Button Groups";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Bold</Button>
        <Button variant="outline">Italic</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Underline</Button>
        <Button variant="outline">Strike</Button>
      </ButtonGroup>
    </ButtonGroup>
    <ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          Left
        </Button>
        <Button size="sm" variant="outline">
          Center
        </Button>
        <Button size="sm" variant="outline">
          Right
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          Justify
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  </div>
);

export default Example;
