import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Item as Link";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <Item asChild>
      <a href="#">
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>
            Learn how to get started with our components.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </a>
    </Item>
    <Item asChild className="bg-background" variant="outline">
      <a href="#" rel="noopener noreferrer" target="_blank">
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>
            Opens in a new tab with security attributes.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </a>
    </Item>
  </div>
);

export default Example;
