import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const title = "Disabled State";

const Example = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          className="pointer-events-none opacity-50"
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
