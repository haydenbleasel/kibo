import { Skeleton } from "@/components/ui/skeleton";

export const title = "Article Preview";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4 rounded-md border p-6">
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="flex gap-2 pt-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-24 rounded-full" />
    </div>
  </div>
);

export default Example;
