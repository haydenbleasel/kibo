import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export const title = "With First and Last";

const Example = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink href="#" className="gap-1 px-2.5">
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="gap-1 px-2.5">
          Last
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
