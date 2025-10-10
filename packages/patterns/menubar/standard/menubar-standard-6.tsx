import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Submenu";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New File</MenubarItem>
        <MenubarSub>
          <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Document 1.txt</MenubarItem>
            <MenubarItem>Document 2.txt</MenubarItem>
            <MenubarItem>Document 3.txt</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>Save</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
