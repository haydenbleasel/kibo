import { Skeleton } from "@/components/ui/skeleton";

export const title = "Content with Sidebar";

const Example = () => (
  <div className="grid w-full max-w-5xl grid-cols-3 gap-8">
    <div className="col-span-2 flex flex-col gap-6">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-64 w-full" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 rounded-md border p-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex flex-col gap-3 rounded-md border p-4">
        <Skeleton className="h-5 w-32" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="flex items-center gap-2" key={i}>
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-4 flex-1" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Example;
