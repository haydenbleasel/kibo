import { Skeleton } from "@/components/ui/skeleton";

export const title = "Blog Post";

const Example = () => (
  <div className="flex w-full max-w-3xl flex-col gap-6">
    <Skeleton className="h-10 w-3/4" />
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
    <Skeleton className="h-64 w-full" />
    <div className="flex flex-col gap-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <div className="flex flex-col gap-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  </div>
);

export default Example;
