import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Item with Avatar";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <Item className="bg-background" variant="outline">
      <ItemMedia>
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Hayden Bleasel</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          aria-label="Invite"
          className="rounded-full"
          size="sm"
          variant="outline"
        >
          <Plus />
        </Button>
      </ItemActions>
    </Item>
  </div>
);

export default Example;
