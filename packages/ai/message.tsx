import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/shadcn-ui/components/ui/avatar';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import {
  CopyIcon,
  RefreshCwIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrashIcon,
} from 'lucide-react';
import type { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type AIMessageProps = HTMLAttributes<HTMLDivElement> & {
  from: 'user' | 'assistant';
};

export const AIMessage = ({ className, from, ...props }: AIMessageProps) => (
  <div
    className={cn(
      'group flex w-full items-end justify-end gap-2 py-4',
      from === 'user' ? 'is-user' : 'is-assistant flex-row-reverse justify-end',
      '[&>div]:max-w-[80%]',
      className
    )}
    {...props}
  />
);

export type AIMessageContentProps = HTMLAttributes<HTMLDivElement>;

export const AIMessageContent = ({
  children,
  className,
  ...props
}: AIMessageContentProps) => (
  <div
    className={cn(
      'relative flex flex-col gap-2 rounded-lg px-4 py-3 text-sm',
      'bg-muted text-foreground',
      'group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <div className="is-user:dark flex-1">{children}</div>
  </div>
);

export type AIMessageAvatarProps = ComponentProps<typeof Avatar> & {
  src: string;
  name?: string;
};

export const AIMessageAvatar = ({
  src,
  name,
  className,
  ...props
}: AIMessageAvatarProps) => (
  <Avatar className={cn('size-8', className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || 'ME'}</AvatarFallback>
  </Avatar>
);

// Action Types
export type AIMessageActionType =
  | 'copy'
  | 'like'
  | 'dislike'
  | 'retry'
  | 'delete'
  | 'share'
  | 'custom';

export type AIMessageActionHandler = (message?: string) => void | Promise<void>;

export interface AIMessageActionConfig {
  type: AIMessageActionType;
  icon?: ReactNode;
  label?: string;
  handler?: AIMessageActionHandler;
  disabled?: boolean;
}

export type AIMessageActionsProps = HTMLAttributes<HTMLDivElement> & {
  actions?: AIMessageActionConfig[];
  position?: 'top' | 'bottom';
  display?: 'always' | 'hover';
  align?: 'left' | 'right';
  message?: string;
};

// Built-in action configurations
const defaultActionConfigs: Record<
  Exclude<AIMessageActionType, 'custom'>,
  Omit<AIMessageActionConfig, 'type'>
> = {
  copy: {
    icon: <CopyIcon />,
    label: 'Copy message',
    handler: async (message) => {
      if (message && navigator.clipboard) {
        await navigator.clipboard.writeText(message);
      }
    },
  },
  like: {
    icon: <ThumbsUpIcon />,
    label: 'Like message',
    handler: () => {
      // Default implementation - can be overridden
    },
  },
  dislike: {
    icon: <ThumbsDownIcon />,
    label: 'Dislike message',
    handler: () => {
      // Default implementation - can be overridden
    },
  },
  retry: {
    icon: <RefreshCwIcon />,
    label: 'Retry generation',
    handler: () => {
      // Default implementation - can be overridden
    },
  },
  delete: {
    icon: <TrashIcon />,
    label: 'Delete message',
    handler: () => {
      // Default implementation - can be overridden
    },
  },
  share: {
    icon: <ShareIcon />,
    label: 'Share message',
    handler: async (message) => {
      if (message && navigator.share) {
        await navigator.share({
          text: message,
        });
      }
    },
  },
};

export type AIMessageActionProps = HTMLAttributes<HTMLButtonElement> & {
  config: AIMessageActionConfig;
  message?: string;
};

export const AIMessageAction = ({
  config,
  message,
  className,
  ...props
}: AIMessageActionProps) => {
  const actionConfig =
    config.type !== 'custom'
      ? { ...defaultActionConfigs[config.type], ...config }
      : config;

  const handleClick = async () => {
    if (actionConfig.handler) {
      await actionConfig.handler(message);
    }
  };

  return (
    <Button
      className={cn(
        'size-8 opacity-70 transition-opacity hover:opacity-100',
        className
      )}
      disabled={config.disabled}
      onClick={handleClick}
      size="icon"
      title={actionConfig.label}
      variant="ghost"
      {...props}
    >
      {actionConfig.icon}
      <span className="sr-only">{actionConfig.label}</span>
    </Button>
  );
};

export const AIMessageActions = ({
  actions = [],
  position = 'bottom',
  display = 'hover',
  align = 'right',
  message,
  className,
  children,
  ...props
}: AIMessageActionsProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 transition-all duration-200',
        // Position styles
        position === 'top' ? 'order-first' : 'order-last',
        // Display styles
        display === 'hover' && 'opacity-0 group-hover:opacity-100',
        display === 'always' && 'opacity-100',
        // Alignment styles
        align === 'right' ? 'ml-auto justify-end' : 'mr-auto justify-start',
        className
      )}
      {...props}
    >
      {actions.map((action, index) => (
        <AIMessageAction
          config={action}
          key={`${action.type}-${index}`}
          message={message}
        />
      ))}
      {children}
    </div>
  );
};
