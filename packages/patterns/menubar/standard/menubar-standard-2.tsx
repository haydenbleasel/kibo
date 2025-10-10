import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Shortcuts";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Cut <MenubarShortcut>⌘X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Copy <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
