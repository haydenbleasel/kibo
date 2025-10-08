import { Skeleton } from "@/components/ui/skeleton";

export const title = "Horizontal Card Layout";

const Example = () => (
  <div className="flex w-full max-w-lg gap-4 rounded-md border p-4">
    <Skeleton className="h-24 w-24 flex-shrink-0" />
    <div className="flex flex-1 flex-col gap-2">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="mt-auto flex items-center gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  </div>
);

export default Example;
