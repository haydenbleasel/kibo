import { Skeleton } from "@/components/ui/skeleton";

export const title = "Table with Avatars";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-3">
    <div className="grid grid-cols-4 gap-4 border-b pb-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-16" />
    </div>
    {Array.from({ length: 4 }).map((_, i) => (
      <div className="grid grid-cols-4 items-center gap-4" key={i}>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 flex-shrink-0 rounded-full" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    ))}
  </div>
);

export default Example;
