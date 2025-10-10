import { Skeleton } from "@/components/ui/skeleton";

export const title = "Simple List Items";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div className="flex items-center gap-3" key={i}>
        <Skeleton className="h-4 w-4 rounded-sm" />
        <Skeleton className="h-4 flex-1" />
      </div>
    ))}
  </div>
);

export default Example;
