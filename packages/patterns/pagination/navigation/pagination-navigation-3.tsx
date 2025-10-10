import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const title = "First and Last";

const Example = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink className="gap-1 px-2.5" href="#">
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="gap-1 px-2.5" href="#">
          Last
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default Example;
