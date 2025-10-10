import { PlusIcon } from "lucide-react";
import { Fragment } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Item Group";

const people = [
  {
    username: "haydenbleasel",
    avatar: "https://github.com/haydenbleasel.png",
    email: "h****n@vercel.com",
  },
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "s****n@vercel.com",
  },
  {
    username: "rauchg",
    avatar: "https://github.com/rauchg.png",
    email: "r****g@vercel.com",
  },
];

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <ItemGroup>
      {people.map((person, index) => (
        <Fragment key={person.username}>
          <Item>
            <ItemMedia>
              <Avatar>
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent className="gap-1">
              <ItemTitle>{person.username}</ItemTitle>
              <ItemDescription>{person.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button className="rounded-full" size="icon" variant="ghost">
                <PlusIcon />
              </Button>
            </ItemActions>
          </Item>
          {index !== people.length - 1 && <ItemSeparator />}
        </Fragment>
      ))}
    </ItemGroup>
  </div>
);

export default Example;
