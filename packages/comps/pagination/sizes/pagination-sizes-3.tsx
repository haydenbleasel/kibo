import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export const title = "Large Size";

const Example = () => (
  <Pagination className="text-base">
    <PaginationContent className="gap-2">
      <PaginationItem>
        <PaginationPrevious href="#" size="lg" className="h-11 px-4" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="lg" className="h-11 w-11">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive size="lg" className="h-11 w-11">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="lg" className="h-11 w-11">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" size="lg" className="h-11 px-4" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
