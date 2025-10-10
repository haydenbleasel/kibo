import { Skeleton } from "@/components/ui/skeleton";

export const title = "List with Avatars";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <div className="flex items-center gap-3" key={i}>
        <Skeleton className="size-10 flex-shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export default Example;
