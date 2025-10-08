import { MailIcon, UserPlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export const title = "Messages and Followers";

const Example = () => (
  <div className="flex flex-col gap-4">
    <ButtonGroup>
      <Button className="relative" size="sm" variant="outline">
        <MailIcon />
        Messages
        <Badge
          className="-top-1 -right-1 absolute h-5 min-w-5 rounded-full px-1 text-xs"
          variant="destructive"
        >
          8
        </Badge>
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <UserPlusIcon />
        Follow
      </Button>
      <ButtonGroupText>2.4k followers</ButtonGroupText>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="sm" variant="default">
        <UserPlusIcon />
        Following
      </Button>
      <ButtonGroupText>2.4k</ButtonGroupText>
    </ButtonGroup>
  </div>
);

export default Example;
