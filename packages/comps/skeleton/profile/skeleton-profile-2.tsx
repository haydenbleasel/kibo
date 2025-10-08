import { Skeleton } from "@/components/ui/skeleton";

export const title = "Profile Card";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4 rounded-md border p-6">
    <div className="flex items-center gap-4">
      <Skeleton className="size-16 flex-shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="flex gap-4 border-t pt-2">
      <div className="flex flex-1 flex-col items-center gap-2">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="flex flex-1 flex-col items-center gap-2">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="flex flex-1 flex-col items-center gap-2">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  </div>
);

export default Example;
