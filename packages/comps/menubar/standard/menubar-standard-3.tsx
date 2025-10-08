import { File, Folder, Save } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const title = "Menubar with Icons";

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <File />
          New File
        </MenubarItem>
        <MenubarItem>
          <Folder />
          Open
        </MenubarItem>
        <MenubarItem>
          <Save />
          Save
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default Example;
