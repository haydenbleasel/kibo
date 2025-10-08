import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const title = "Arrow Keys with Icons";

const Example = () => (
  <div className="rounded-md border bg-background p-4">
    <KbdGroup>
      <Kbd>
        <ArrowUp />
      </Kbd>
      <Kbd>
        <ArrowDown />
      </Kbd>
      <Kbd>
        <ArrowLeft />
      </Kbd>
      <Kbd>
        <ArrowRight />
      </Kbd>
    </KbdGroup>
  </div>
);

export default Example;
