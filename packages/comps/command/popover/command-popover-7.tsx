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

export const title = "Command Popover with Status Indicators";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">View Services</Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-[400px] p-0">
      <Command>
        <CommandInput placeholder="Search services..." />
        <CommandList>
          <CommandEmpty>No services found.</CommandEmpty>
          <CommandGroup heading="Services">
            <CommandItem>
              <div className="size-3 rounded-full bg-green-500 text-green-500" />
              <span>API Server</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Running
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-green-500 text-green-500" />
              <span>Database</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Running
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-yellow-500 text-yellow-500" />
              <span>Cache Server</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Warning
              </span>
            </CommandItem>
            <CommandItem>
              <div className="size-3 rounded-full bg-red-500 text-red-500" />
              <span>Queue Worker</span>
              <span className="ml-auto text-muted-foreground text-xs">
                Stopped
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
);

export default Example;
