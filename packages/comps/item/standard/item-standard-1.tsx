import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Basic Item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Item className="bg-background" variant="outline">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </ItemActions>
    </Item>
  </div>
);

export default Example;
