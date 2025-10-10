import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const title = "Small Size";

const Example = () => (
  <Pagination className="text-sm">
    <PaginationContent className="gap-0.5">
      <PaginationItem>
        <PaginationPrevious className="h-7 px-2 text-xs" href="#" size="sm" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-7 w-7 text-xs" href="#" size="sm">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-7 w-7 text-xs" href="#" isActive size="sm">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-7 w-7 text-xs" href="#" size="sm">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext className="h-7 px-2 text-xs" href="#" size="sm" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
