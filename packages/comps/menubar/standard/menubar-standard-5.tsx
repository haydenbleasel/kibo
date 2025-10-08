import {
  Menubar,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Radio Groups";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>Layout</MenubarLabel>
        <MenubarRadioGroup value="grid">
          <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
          <MenubarRadioItem value="list">List</MenubarRadioItem>
          <MenubarRadioItem value="columns">Columns</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
