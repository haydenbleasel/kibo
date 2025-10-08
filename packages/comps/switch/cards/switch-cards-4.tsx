"use client";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Switch } from "@/components/ui/switch";

export const title = "Switch in Item";

const Example = () => (
  <Item className="bg-background" variant="outline">
    <ItemContent>
      <ItemTitle>Auto-save</ItemTitle>
      <ItemDescription>
        Automatically save your work as you type
      </ItemDescription>
    </ItemContent>
    <Switch defaultChecked />
  </Item>
);

export default Example;
