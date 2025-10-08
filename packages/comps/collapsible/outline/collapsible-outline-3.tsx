import { Info } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Info Box Outline";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border-2 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
    <CollapsibleTrigger className="flex w-full items-center gap-3 p-4">
      <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      <span className="font-medium text-blue-900 dark:text-blue-100">
        Important Notice
      </span>
    </CollapsibleTrigger>
    <CollapsibleContent className="border-blue-200 border-t-2 px-4 py-3 text-blue-800 text-sm dark:border-blue-900 dark:text-blue-200">
      This is an informational message that provides additional context and
      details when expanded.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
