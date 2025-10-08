import { Skeleton } from "@/components/ui/skeleton";

export const title = "Simple Table Rows";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-3">
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
);

export default Example;
