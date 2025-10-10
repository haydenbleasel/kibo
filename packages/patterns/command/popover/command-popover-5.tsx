import { Mail, MapPin, Phone, User } from "lucide-react";
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

export const title = "Command Popover with Descriptions";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Search Contacts</Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-[400px] p-0">
      <Command>
        <CommandInput placeholder="Search contacts..." />
        <CommandList>
          <CommandEmpty>No contacts found.</CommandEmpty>
          <CommandGroup heading="Contacts">
            <CommandItem>
              <User />
              <div className="flex flex-col">
                <span>John Doe</span>
                <span className="text-muted-foreground text-xs">
                  Software Engineer
                </span>
              </div>
            </CommandItem>
            <CommandItem>
              <Mail />
              <div className="flex flex-col">
                <span>jane@example.com</span>
                <span className="text-muted-foreground text-xs">Email</span>
              </div>
            </CommandItem>
            <CommandItem>
              <Phone />
              <div className="flex flex-col">
                <span>+1 (555) 123-4567</span>
                <span className="text-muted-foreground text-xs">Mobile</span>
              </div>
            </CommandItem>
            <CommandItem>
              <MapPin />
              <div className="flex flex-col">
                <span>San Francisco, CA</span>
                <span className="text-muted-foreground text-xs">Location</span>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
);

export default Example;
