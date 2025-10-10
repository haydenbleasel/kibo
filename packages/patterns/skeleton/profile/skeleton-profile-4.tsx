import { Skeleton } from "@/components/ui/skeleton";

export const title = "Profile with Stats";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6 rounded-md border p-6">
    <div className="flex items-start gap-4">
      <Skeleton className="size-20 flex-shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center gap-2 rounded-md border p-3">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
      <div className="flex flex-col items-center gap-2 rounded-md border p-3">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
      <div className="flex flex-col items-center gap-2 rounded-md border p-3">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
    <Skeleton className="h-10 w-full" />
  </div>
);

export default Example;
