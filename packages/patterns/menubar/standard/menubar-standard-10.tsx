import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Compact Menubar";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Options</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Settings</MenubarItem>
        <MenubarItem>Preferences</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Sign Out</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
