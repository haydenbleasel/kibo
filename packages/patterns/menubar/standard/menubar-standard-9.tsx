import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Sections";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>Actions</MenubarLabel>
        <MenubarItem>Cut</MenubarItem>
        <MenubarItem>Copy</MenubarItem>
        <MenubarItem>Paste</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>History</MenubarLabel>
        <MenubarItem>Undo</MenubarItem>
        <MenubarItem>Redo</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
