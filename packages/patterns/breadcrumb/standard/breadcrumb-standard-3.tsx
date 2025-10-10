import { FileText, Folder } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const title = "Breadcrumb with Icons";

const Example = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink className="flex items-center gap-1.5" href="/">
          <Folder className="size-4" />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink
          className="flex items-center gap-1.5"
          href="/components"
        >
          <Folder className="size-4" />
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="flex items-center gap-1.5">
          <FileText className="size-4" />
          Breadcrumb
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default Example;
