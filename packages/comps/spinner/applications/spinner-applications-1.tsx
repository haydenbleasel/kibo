import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";

export const title = "Spinner in Item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]">
    <Item className="bg-background" variant="outline">
      <ItemMedia variant="icon">
        <Spinner />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Downloading...</ItemTitle>
        <ItemDescription>129 MB / 1000 MB</ItemDescription>
      </ItemContent>
      <ItemActions className="hidden sm:flex">
        <Button size="sm" variant="outline">
          Cancel
        </Button>
      </ItemActions>
      <ItemFooter>
        <Progress value={75} />
      </ItemFooter>
    </Item>
  </div>
);

export default Example;
