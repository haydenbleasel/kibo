import { Skeleton } from "@/components/ui/skeleton";

export const title = "Vertical Card Layout";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 overflow-hidden rounded-md border">
    <Skeleton className="h-40 w-full rounded-none" />
    <div className="flex flex-col gap-3 p-4">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
      <div className="mt-2 flex items-center justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  </div>
);

export default Example;
