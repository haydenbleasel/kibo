import { Skeleton } from "@/components/ui/skeleton";

export const title = "Form with Sections";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-8">
    <div className="flex flex-col gap-4">
      <Skeleton className="h-5 w-40" />
      <div className="flex flex-col gap-4 border-l-2 pl-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <Skeleton className="h-5 w-32" />
      <div className="flex flex-col gap-4 border-l-2 pl-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
    <Skeleton className="h-10 w-32" />
  </div>
);

export default Example;
