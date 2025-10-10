import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const title = "Simple Command Menu";

const Example = () => (
  <Command className="h-auto w-full max-w-lg rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search Emoji</CommandItem>
        <CommandItem>Calculator</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

export default Example;
