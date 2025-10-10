import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

export const title = "Spinner in List Item";

const Example = () => (
  <Item>
    <Spinner className="text-muted-foreground" />
    <ItemContent>
      <ItemTitle>Loading user profile</ItemTitle>
      <ItemDescription>Please wait while we fetch your data</ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
