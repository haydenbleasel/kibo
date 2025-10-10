import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const title = "Spacious";

const Example = () => (
  <Pagination>
    <PaginationContent className="gap-3">
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
