import { Command } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Command with Icon";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>
        <Command />
      </Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
);

export default Example;
