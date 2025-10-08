import { HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Social Actions";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <HeartIcon />
        Like
      </Button>
      <Button size="sm" variant="outline">
        <MessageCircleIcon />
        Comment
      </Button>
      <Button size="sm" variant="outline">
        <Share2Icon />
        Share
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <HeartIcon />
      </Button>
      <Button size="sm" variant="outline">
        <MessageCircleIcon />
      </Button>
      <Button size="sm" variant="outline">
        <Share2Icon />
      </Button>
    </ButtonGroup>
  </div>
);

export default Example;
