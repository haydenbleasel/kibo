import { Skeleton } from "@/components/ui/skeleton";

export const title = "List with Icons";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div className="flex items-center gap-3 rounded-md border p-3" key={i}>
        <Skeleton className="size-8 flex-shrink-0 rounded-md" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <Skeleton className="h-8 w-8 flex-shrink-0 rounded-md" />
      </div>
    ))}
  </div>
);

export default Example;
