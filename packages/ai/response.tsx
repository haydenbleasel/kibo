'use client';

import { cn } from '@/lib/utils';
import ReactMarkdown, { type Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type AIResponseProps = Options & {
  className?: string;
};

export function AIResponse({ className, ...props }: AIResponseProps) {
  return (
    <div
      className={cn(
        'prose dark:prose-invert prose-pre:p-0 prose-p:leading-relaxed',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-2">{children}</p>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {children}
            </a>
          ),
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code
                  className="rounded bg-muted px-1 py-0.5 font-mono text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="mt-2 mb-2 overflow-x-auto rounded-lg bg-muted p-4">
                <code className="font-mono text-sm" {...props}>
                  {children}
                </code>
              </pre>
            );
          },
        }}
        {...props}
      />
    </div>
  );
}
