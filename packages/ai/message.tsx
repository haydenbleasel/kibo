import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { ComponentProps, HTMLAttributes } from 'react';
import { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components: Partial<Components> = {
  pre: ({ children }) => <>{children}</>,
  ol: ({ node, children, ...props }) => {
    return (
      <ol className="ml-4 list-outside list-decimal" {...props}>
        {children}
      </ol>
    );
  },
  li: ({ node, children, ...props }) => {
    return (
      <li className="py-1" {...props}>
        {children}
      </li>
    );
  },
  ul: ({ node, children, ...props }) => {
    return (
      <ul className="ml-4 list-outside list-decimal" {...props}>
        {children}
      </ul>
    );
  },
  strong: ({ node, children, ...props }) => {
    return (
      <span className="font-semibold" {...props}>
        {children}
      </span>
    );
  },
  a: ({ node, children, ...props }) => {
    return (
      // @ts-expect-error
      <a
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  h1: ({ node, children, ...props }) => {
    return (
      <h1 className="mt-6 mb-2 font-semibold text-3xl" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }) => {
    return (
      <h2 className="mt-6 mb-2 font-semibold text-2xl" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }) => {
    return (
      <h3 className="mt-6 mb-2 font-semibold text-xl" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }) => {
    return (
      <h4 className="mt-6 mb-2 font-semibold text-lg" {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ node, children, ...props }) => {
    return (
      <h5 className="mt-6 mb-2 font-semibold text-base" {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ node, children, ...props }) => {
    return (
      <h6 className="mt-6 mb-2 font-semibold text-sm" {...props}>
        {children}
      </h6>
    );
  },
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {children}
    </ReactMarkdown>
  );
};

const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children
);

export type MessagesProps = HTMLAttributes<HTMLDivElement>;

export const Messages = ({ className, ...props }: MessagesProps) => (
  <div className={cn('flex w-full flex-col gap-8', className)} {...props} />
);

export type MessageGroupProps = HTMLAttributes<HTMLDivElement> & {
  owner?: boolean;
};

export const MessageGroup = ({
  className,
  owner,
  ...props
}: MessageGroupProps) => (
  <div
    className={cn(
      'group flex items-end gap-2',
      owner ? '[&>div]:items-end' : '[&>div]:items-start'
    )}
    {...props}
  />
);

export type MessageProps = HTMLAttributes<HTMLDivElement>;

export const Message = ({ children, className, ...props }: MessageProps) => (
  <div
    className={cn(
      'flex flex-col gap-1 rounded-md border bg-background p-2 text-sm shadow-sm',
      className
    )}
    {...props}
  >
    <Markdown>{children as string}</Markdown>
  </div>
);

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  fallback?: string;
  src?: string;
};

export const MessageAvatar = ({
  className,
  src,
  fallback,
  ...props
}: MessageAvatarProps) => (
  <Avatar className={cn('size-8 shrink-0', className)} {...props}>
    <AvatarImage src={src} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);

export type MessageListProps = HTMLAttributes<HTMLDivElement>;

export const MessageList = ({ className, ...props }: MessageListProps) => (
  <div className={cn('flex flex-1 flex-col gap-2', className)} {...props} />
);
