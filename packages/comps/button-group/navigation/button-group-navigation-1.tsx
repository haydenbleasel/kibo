"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Pagination";

const Example = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
          Previous
        </Button>
        <Button onClick={() => setCurrentPage(1)} size="sm" variant="outline">
          1
        </Button>
        <Button onClick={() => setCurrentPage(2)} size="sm" variant="outline">
          2
        </Button>
        <Button size="sm" variant="default">
          3
        </Button>
        <Button onClick={() => setCurrentPage(4)} size="sm" variant="outline">
          4
        </Button>
        <Button onClick={() => setCurrentPage(5)} size="sm" variant="outline">
          5
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          size="sm"
          variant="outline"
        >
          Next
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          size="sm"
          variant="outline"
        >
          <ChevronLeftIcon />
        </Button>
        <Button size="sm" variant="outline">
          Page {currentPage} of {totalPages}
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          size="sm"
          variant="outline"
        >
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
