import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const title = "Large Size";

const Example = () => (
  <Pagination className="text-base">
    <PaginationContent className="gap-2">
      <PaginationItem>
        <PaginationPrevious className="h-11 px-4" href="#" size="lg" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-11 w-11" href="#" size="lg">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-11 w-11" href="#" isActive size="lg">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="h-11 w-11" href="#" size="lg">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext className="h-11 px-4" href="#" size="lg" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
