import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Checkboxes";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
        <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
        <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
