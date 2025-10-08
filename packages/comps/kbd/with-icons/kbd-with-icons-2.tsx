import { Delete } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Delete with Icon";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>
        <Delete />
        Del
      </Kbd>
    </KbdGroup>
  </div>
);

export default Example;
