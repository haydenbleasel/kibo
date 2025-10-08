import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export const title = "Like with Count";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <HeartIcon />
        Like
      </Button>
      <ButtonGroupText>1.2k</ButtonGroupText>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <HeartIcon />
      </Button>
      <ButtonGroupText>342</ButtonGroupText>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="default">
        <HeartIcon className="fill-current" />
        Liked
      </Button>
      <ButtonGroupText>1.2k</ButtonGroupText>
    </ButtonGroup>
  </div>
);

export default Example;
