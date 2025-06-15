'use client';

import { cn } from '@/lib/utils';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useCallback } from 'react';
import { StickToBottom, useStickToBottomContext } from 'use-stick-to-bottom';

export type AIConversationProps = ComponentProps<typeof StickToBottom>;

export const AIConversation = ({
  className,
  ...props
}: AIConversationProps) => (
  <StickToBottom
    className={cn('relative flex-1 overflow-y-auto', className)}
    resize="smooth"
    initial="smooth"
    role="log"
    {...props}
  />
);

export type AIConversationContentProps = ComponentProps<
  typeof StickToBottom.Content
>;

export const AIConversationContent = ({
  className,
  ...props
}: AIConversationContentProps) => (
  <StickToBottom.Content className={cn('p-4', className)} {...props} />
);

export const AIConversationScrollButton = () => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    !isAtBottom && (
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full"
        onClick={handleScrollToBottom}
      >
        <ArrowDownIcon className="size-4" />
      </Button>
    )
  );
};
