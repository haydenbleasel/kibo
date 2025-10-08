import { CornerDownLeft } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Enter with Icon";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>
        <CornerDownLeft />
        Enter
      </Kbd>
    </KbdGroup>
  </div>
);

export default Example;
