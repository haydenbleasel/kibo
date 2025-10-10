import { Skeleton } from "@/components/ui/skeleton";

export const title = "Table with Pagination";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-4 border-b pb-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="grid grid-cols-4 gap-4" key={i}>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between border-t pt-3">
      <Skeleton className="h-4 w-32" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </div>
  </div>
);

export default Example;
