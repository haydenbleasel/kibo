import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export const title = "Small Size";

const Example = () => (
  <Pagination className="text-sm">
    <PaginationContent className="gap-0.5">
      <PaginationItem>
        <PaginationPrevious href="#" size="sm" className="h-7 px-2 text-xs" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="sm" className="h-7 w-7 text-xs">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          isActive
          size="sm"
          className="h-7 w-7 text-xs"
        >
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="sm" className="h-7 w-7 text-xs">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" size="sm" className="h-7 px-2 text-xs" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
