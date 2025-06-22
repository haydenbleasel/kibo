'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type AIBranchContextType = {
  currentBranch: number;
  totalBranches: number;
  goToPrevious: () => void;
  goToNext: () => void;
  branches: ReactElement[];
  setBranches: (branches: ReactElement[]) => void;
};

const AIBranchContext = createContext<AIBranchContextType | null>(null);

const useAIBranch = () => {
  const context = useContext(AIBranchContext);

  if (!context) {
    throw new Error('AIBranch components must be used within AIBranch');
  }

  return context;
};

export type AIBranchProps = HTMLAttributes<HTMLDivElement> & {
  defaultBranch?: number;
  onBranchChange?: (branchIndex: number) => void;
};

export const AIBranch = ({
  defaultBranch = 0,
  onBranchChange,
  className,
  ...props
}: AIBranchProps) => {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  const [branches, setBranches] = useState<ReactElement[]>([]);

  const handleBranchChange = (newBranch: number) => {
    setCurrentBranch(newBranch);
    onBranchChange?.(newBranch);
  };

  const goToPrevious = () => {
    const newBranch =
      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
    handleBranchChange(newBranch);
  };

  const goToNext = () => {
    const newBranch =
      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
    handleBranchChange(newBranch);
  };

  const contextValue: AIBranchContextType = {
    currentBranch,
    totalBranches: branches.length,
    goToPrevious,
    goToNext,
    branches,
    setBranches,
  };

  return (
    <AIBranchContext.Provider value={contextValue}>
      <div
        className={cn('grid w-full gap-2 [&>div]:pb-0', className)}
        {...props}
      />
    </AIBranchContext.Provider>
  );
};

export type AIBranchMessagesProps = {
  children: ReactElement | ReactElement[];
};

export const AIBranchMessages = ({ children }: AIBranchMessagesProps) => {
  const { currentBranch, setBranches, branches } = useAIBranch();
  const childrenArray = Array.isArray(children) ? children : [children];

  // Use useEffect to update branches when they change
  useEffect(() => {
    if (branches.length !== childrenArray.length) {
      setBranches(childrenArray);
    }
  }, [childrenArray, branches, setBranches]);

  return childrenArray.map((branch, index) => (
    <div
      className={cn(
        'grid gap-2 [&>div]:pb-0',
        index === currentBranch ? 'block' : 'hidden'
      )}
      key={index}
    >
      {branch}
    </div>
  ));
};

export type AIBranchSelectorProps = HTMLAttributes<HTMLDivElement> & {
  from: 'user' | 'assistant';
};

export const AIBranchSelector = ({
  className,
  from,
  ...props
}: AIBranchSelectorProps) => {
  const { totalBranches } = useAIBranch();

  // Don't render if there's only one branch
  if (totalBranches <= 1) {
    return null;
  }

  return (
    <div
      className={cn(
        'flex items-center gap-2 self-end px-10',
        from === 'assistant' ? 'justify-start' : 'justify-end',
        className
      )}
      {...props}
    />
  );
};

export type AIBranchPreviousProps = {
  className?: string;
  children?: ReactNode;
};

export const AIBranchPrevious = ({
  className,
  children,
}: AIBranchPreviousProps) => {
  const { goToPrevious, totalBranches } = useAIBranch();

  return (
    <Button
      aria-label="Previous branch"
      className={cn(
        'size-7 shrink-0 rounded-full text-muted-foreground transition-colors',
        'hover:bg-accent hover:text-foreground',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={totalBranches <= 1}
      onClick={goToPrevious}
      size="icon"
      type="button"
      variant="ghost"
    >
      {children ?? <ChevronLeftIcon size={14} />}
    </Button>
  );
};

export type AIBranchNextProps = {
  className?: string;
  children?: ReactNode;
};

export const AIBranchNext = ({ className, children }: AIBranchNextProps) => {
  const { goToNext, totalBranches } = useAIBranch();

  return (
    <Button
      aria-label="Next branch"
      className={cn(
        'size-7 shrink-0 rounded-full text-muted-foreground transition-colors',
        'hover:bg-accent hover:text-foreground',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={totalBranches <= 1}
      onClick={goToNext}
      size="icon"
      type="button"
      variant="ghost"
    >
      {children ?? <ChevronRightIcon size={14} />}
    </Button>
  );
};

export type AIBranchPageProps = {
  className?: string;
};

export const AIBranchPage = ({ className }: AIBranchPageProps) => {
  const { currentBranch, totalBranches } = useAIBranch();

  return (
    <span
      className={cn(
        'font-medium text-muted-foreground text-xs tabular-nums',
        className
      )}
    >
      {currentBranch + 1} of {totalBranches}
    </span>
  );
};
