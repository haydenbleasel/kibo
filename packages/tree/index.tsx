'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/shadcn-ui/components/ui/collapsible';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import {
  type ComponentProps,
  createContext,
  forwardRef,
  useContext,
} from 'react';

type TreeContextType = {
  level: number;
};

const TreeContext = createContext<TreeContextType>({
  level: 0,
});

export type TreeProps = ComponentProps<typeof Collapsible>;

export const Tree: React.ForwardRefExoticComponent<
  TreeProps & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TreeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <TreeContext.Provider value={{ level: 0 }}>
        <div
          className={cn('tree-root', className)}
          data-slot="tree"
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TreeContext.Provider>
    );
  }
);

Tree.displayName = 'Tree';

export type TreeItemProps = ComponentProps<typeof Collapsible> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const TreeItem = forwardRef<
  React.ElementRef<typeof Collapsible>,
  TreeItemProps
>(
  (
    {
      children,
      className,
      defaultOpen = false,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      ...props
    },
    ref
  ) => {
    const { level } = useContext(TreeContext);
    const [open, onOpenChange] = useControllableState({
      defaultProp: defaultOpen,
      prop: controlledOpen,
      onChange: controlledOnOpenChange,
    });

    return (
      <TreeContext.Provider value={{ level: level + 1 }}>
        <Collapsible
          className={cn('tree-item', className)}
          data-slot="tree-item"
          onOpenChange={onOpenChange}
          open={open}
          ref={ref}
          {...props}
        >
          {children}
        </Collapsible>
      </TreeContext.Provider>
    );
  }
);

TreeItem.displayName = 'TreeItem';

export type TreeTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
  icon?: React.ReactNode;
};

export const TreeTrigger: React.ForwardRefExoticComponent<
  TreeTriggerProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, TreeTriggerProps>(
  ({ children, className, icon, ...props }, ref) => {
  const { level } = useContext(TreeContext);

  return (
    <CollapsibleTrigger
      className={cn(
        'tree-trigger flex w-full items-center gap-1 rounded-md px-2 py-1 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg.tree-chevron]:rotate-90',
        className
      )}
      data-slot="tree-trigger"
      ref={ref}
      style={{ paddingLeft: `${level * 12 + 8}px` }}
      {...props}
    >
      <ChevronRightIcon className="tree-chevron h-4 w-4 shrink-0 transition-transform duration-200" />
      {icon && <span className="tree-icon shrink-0">{icon}</span>}
      <span className="tree-label flex-1 truncate">{children}</span>
    </CollapsibleTrigger>
  );
});

TreeTrigger.displayName = 'TreeTrigger';

export type TreeContentProps = ComponentProps<typeof CollapsibleContent>;

export const TreeContent: React.ForwardRefExoticComponent<
  TreeContentProps & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TreeContentProps>(
  ({ children, className, ...props }, ref) => {
  return (
    <CollapsibleContent
      className={cn('tree-content', className)}
      data-slot="tree-content"
      ref={ref}
      {...props}
    >
      {children}
    </CollapsibleContent>
  );
});

TreeContent.displayName = 'TreeContent';

export type TreeLeafProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
};

export const TreeLeaf = forwardRef<HTMLDivElement, TreeLeafProps>(
  ({ children, className, icon, ...props }, ref) => {
    const { level } = useContext(TreeContext);

    return (
      <div
        className={cn(
          'tree-leaf flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground',
          className
        )}
        data-slot="tree-leaf"
        ref={ref}
        style={{ paddingLeft: `${level * 12 + 32}px` }}
        {...props}
      >
        {icon && <span className="tree-icon shrink-0">{icon}</span>}
        <span className="tree-label flex-1 truncate">{children}</span>
      </div>
    );
  }
);

TreeLeaf.displayName = 'TreeLeaf';
