import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const title = "Many Pages";

const Example = () => (
  <Pagination>
    <PaginationContent>
      {Array.from({ length: 10 }, (_, i) => (
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={i === 4}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </PaginationContent>
  </Pagination>
);

export default Example;
