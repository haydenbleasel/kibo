import { Code, Database, FileText, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const title = "Command with Badges";

const Example = () => (
  <Command className="h-auto w-full max-w-lg rounded-lg border shadow-md">
    <CommandInput placeholder="Search components..." />
    <CommandList>
      <CommandEmpty>No components found.</CommandEmpty>
      <CommandGroup heading="Components">
        <CommandItem>
          <FileText />
          <span>Button</span>
          <Badge className="ml-auto" variant="secondary">
            Stable
          </Badge>
        </CommandItem>
        <CommandItem>
          <Code />
          <span>Input</span>
          <Badge className="ml-auto" variant="secondary">
            Stable
          </Badge>
        </CommandItem>
        <CommandItem>
          <Database />
          <span>Table</span>
          <Badge className="ml-auto" variant="outline">
            Beta
          </Badge>
        </CommandItem>
        <CommandItem>
          <Package />
          <span>DataGrid</span>
          <Badge className="ml-auto" variant="outline">
            Beta
          </Badge>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

export default Example;
