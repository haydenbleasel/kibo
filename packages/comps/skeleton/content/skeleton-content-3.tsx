import { Skeleton } from "@/components/ui/skeleton";

export const title = "Comment Thread";

const Example = () => (
  <div className="flex w-full max-w-2xl flex-col gap-4">
    {Array.from({ length: 3 }).map((_, i) => (
      <div className="flex gap-3" key={i}>
        <Skeleton className="size-10 flex-shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-14" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Example;
