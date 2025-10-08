import { Code, Database, FileText, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Command Popover with Badges";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Browse Components</Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-[400px] p-0">
      <Command>
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
    </PopoverContent>
  </Popover>
);

export default Example;
