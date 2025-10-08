import { Skeleton } from "@/components/ui/skeleton";

export const title = "Search Form";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    <div className="flex gap-2">
      <Skeleton className="h-10 flex-1" />
      <Skeleton className="h-10 w-24" />
    </div>
    <div className="flex flex-col gap-3">
      <Skeleton className="h-4 w-16" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-28 rounded-full" />
      </div>
    </div>
    <Skeleton className="h-px w-full" />
    <div className="flex items-center justify-between">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
);

export default Example;
