import { AlertTriangle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Warning Outline";

const Example = () => (
  <Collapsible className="w-full max-w-lg rounded-lg border-2 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
    <CollapsibleTrigger className="flex w-full items-center gap-3 p-4">
      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
      <div className="flex-1 text-left">
        <div className="font-medium text-yellow-900 dark:text-yellow-100">
          Warning
        </div>
        <div className="text-sm text-yellow-700 dark:text-yellow-300">
          Click to view details
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent className="border-yellow-200 border-t-2 px-4 py-3 text-sm text-yellow-800 dark:border-yellow-900 dark:text-yellow-200">
      This action may have unintended consequences. Please review the
      documentation before proceeding.
    </CollapsibleContent>
  </Collapsible>
);

export default Example;
