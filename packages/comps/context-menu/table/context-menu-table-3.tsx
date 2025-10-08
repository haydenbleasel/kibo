import { Download, FileText, Table } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Table Export Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click on table
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <Download />
            <span>Export Data</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            <FileText />
            <span>Export as CSV</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Table />
            <span>Export as Excel</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <FileText />
            <span>Export as PDF</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <FileText />
            <span>Export as JSON</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Download />
        <span>Download Selected Rows</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
