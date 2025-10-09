import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Item with Media and Icon";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Item asChild className="bg-background" size="sm" variant="outline">
      <a href="#">
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </a>
    </Item>
  </div>
);

export default Example;
