import { Skeleton } from "@/components/ui/skeleton";

export const title = "Hierarchical List Items";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <div className="flex items-center gap-3">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-4 flex-1" />
    </div>
    <div className="flex items-center gap-3 pl-6">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-4 flex-1" />
    </div>
    <div className="flex items-center gap-3 pl-6">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-4 flex-1" />
    </div>
    <div className="flex items-center gap-3">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-4 flex-1" />
    </div>
    <div className="flex items-center gap-3 pl-6">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-4 flex-1" />
    </div>
  </div>
);

export default Example;
