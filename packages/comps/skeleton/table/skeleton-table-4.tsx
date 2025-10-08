import { Skeleton } from "@/components/ui/skeleton";

export const title = "Expandable Rows";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-3">
    <div className="grid grid-cols-4 gap-4 border-b pb-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-20" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-4 items-center gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="size-4 rounded-sm" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="rounded-md bg-muted/50 py-2 pr-4 pl-10">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-4 rounded-sm" />
        <Skeleton className="h-4 flex-1" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  </div>
);

export default Example;
