'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Portal } from 'radix-ui';
import type {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
} from 'react';
import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

type DialogStackContextType = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  totalDialogs: number;
  setTotalDialogs: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  clickable: boolean;
};

const DialogStackContext = createContext<DialogStackContextType>({
  activeIndex: 0,
  setActiveIndex: () => { },
  totalDialogs: 0,
  setTotalDialogs: () => { },
  isOpen: false,
  setIsOpen: () => { },
  clickable: false,
});

type DialogStackChildProps = {
  index?: number;
};

export type DialogStackProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  clickable?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
};

export const DialogStack = ({
  children,
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  clickable = false,
  ...props
}: DialogStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useControllableState({
    defaultProp: defaultOpen,
    prop: open,
    onChange: onOpenChange,
  });

  useEffect(() => {
    if (onOpenChange && isOpen !== undefined) {
      onOpenChange(isOpen);
    }
  }, [isOpen, onOpenChange]);

  return (
    <DialogStackContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        totalDialogs: 0,
        setTotalDialogs: () => { },
        isOpen: isOpen ?? false,
        setIsOpen: (value) => setIsOpen(Boolean(value)),
        clickable,
      }}
    >
      <div className={className} {...props}>
        {children}
      </div>
    </DialogStackContext.Provider>
  );
};

export type DialogStackTriggerProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

export const DialogStackTrigger = ({
  children,
  className,
  onClick,
  asChild,
  ...props
}: DialogStackTriggerProps) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackTrigger must be used within a DialogStack');
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    context.setIsOpen(true);
    onClick?.(e);
  };

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>;
      className?: string;
    }>;
    return cloneElement(child, {
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handleClick(e);
        child.props.onClick?.(e);
      },
      className: cn(className, child.props.className),
      ...props,
    });
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm',
        'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'bg-primary text-primary-foreground hover:bg-primary/90',
        'h-10 px-4 py-2',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export type DialogStackOverlayProps = HTMLAttributes<HTMLDivElement>;

export const DialogStackOverlay = ({
  className,
  ...props
}: DialogStackOverlayProps) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackOverlay must be used within a DialogStack');
  }

  const handleClick = useCallback(() => {
    context.setIsOpen(false);
  }, [context.setIsOpen]);

  if (!context.isOpen) {
    return null;
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: "This is a clickable overlay"
    // biome-ignore lint/a11y/useKeyWithClickEvents: "This is a clickable overlay"
    <div
      className={cn(
        'fixed inset-0 z-50 bg-black/80',
        'data-[state=closed]:animate-out data-[state=open]:animate-in',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
};

export type DialogStackBodyProps = HTMLAttributes<HTMLDivElement> & {
  children:
  | ReactElement<DialogStackChildProps>[]
  | ReactElement<DialogStackChildProps>;
};

export const DialogStackBody = ({
  children,
  className,
  ...props
}: DialogStackBodyProps) => {
  const context = useContext(DialogStackContext);
  const [totalDialogs, setTotalDialogs] = useState(Children.count(children));

  if (!context) {
    throw new Error('DialogStackBody must be used within a DialogStack');
  }

  if (!context.isOpen) {
    return null;
  }

  return (
    <DialogStackContext.Provider
      value={{
        ...context,
        totalDialogs,
        setTotalDialogs,
      }}
    >
      <Portal.Root>
        <div
          className={cn(
            'pointer-events-none fixed inset-0 z-50 mx-auto flex w-full max-w-lg flex-col items-center justify-center',
            className
          )}
          {...props}
        >
          <div className="pointer-events-auto relative flex w-full flex-col items-center justify-center">
            {Children.map(children, (child, index) => {
              const childElement = child as ReactElement<{
                index: number;
                onClick: MouseEventHandler<HTMLButtonElement>;
                className?: string;
              }>;

              return cloneElement(childElement, {
                ...childElement.props,
                index,
              });
            })}
          </div>
        </div>
      </Portal.Root>
    </DialogStackContext.Provider>
  );
};

export type DialogStackContentProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
  offset?: number;
};

export const DialogStackContent = ({
  children,
  className,
  index = 0,
  offset = 10,
  ...props
}: DialogStackContentProps) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackContent must be used within a DialogStack');
  }

  if (!context.isOpen) {
    return null;
  }

  const handleClick = () => {
    if (context.clickable && context.activeIndex > index) {
      context.setActiveIndex(index ?? 0);
    }
  };

  const distanceFromActive = index - context.activeIndex;
  const translateY =
    distanceFromActive < 0
      ? `-${Math.abs(distanceFromActive) * offset}px`
      : `${Math.abs(distanceFromActive) * offset}px`;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: "This is a clickable dialog"
    // biome-ignore lint/a11y/useKeyWithClickEvents: "This is a clickable dialog"
    <div
      className={cn(
        'h-auto w-full rounded-lg border bg-background p-6 shadow-lg transition-all duration-300',
        className
      )}
      onClick={handleClick}
      style={{
        top: 0,
        transform: `translateY(${translateY})`,
        width: `calc(100% - ${Math.abs(distanceFromActive) * 10}px)`,
        zIndex: 50 - Math.abs(context.activeIndex - (index ?? 0)),
        position: distanceFromActive ? 'absolute' : 'relative',
        opacity: distanceFromActive > 0 ? 0 : 1,
        cursor:
          context.clickable && context.activeIndex > index
            ? 'pointer'
            : 'default',
      }}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full transition-all duration-300',
          context.activeIndex !== index &&
          'pointer-events-none select-none opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export type DialogStackTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const DialogStackTitle = ({
  children,
  className,
  ...props
}: DialogStackTitleProps) => (
  <h2
    className={cn(
      'font-semibold text-lg leading-none tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

export type DialogStackDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const DialogStackDescription = ({
  children,
  className,
  ...props
}: DialogStackDescriptionProps) => (
  <p className={cn('text-muted-foreground text-sm', className)} {...props}>
    {children}
  </p>
);

export type DialogStackHeaderProps = HTMLAttributes<HTMLDivElement>;

export const DialogStackHeader = ({
  className,
  ...props
}: DialogStackHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);

export type DialogStackFooterProps = HTMLAttributes<HTMLDivElement>;

export const DialogStackFooter = ({
  children,
  className,
  ...props
}: DialogStackFooterProps) => (
  <div
    className={cn('flex items-center justify-end space-x-2 pt-4', className)}
    {...props}
  >
    {children}
  </div>
);

export type DialogStackNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const DialogStackNext = ({
  children,
  className,
  asChild,
  ...props
}: DialogStackNextProps) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackNext must be used within a DialogStack');
  }

  const handleNext = () => {
    if (context.activeIndex < context.totalDialogs - 1) {
      context.setActiveIndex(context.activeIndex + 1);
    }
  };

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>;
      className?: string;
    }>;

    return cloneElement(child, {
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handleNext();
        child.props.onClick?.(e);
      },
      className: cn(className, child.props.className),
      ...props,
    });
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={context.activeIndex >= context.totalDialogs - 1}
      onClick={handleNext}
      type="button"
      {...props}
    >
      {children || 'Next'}
    </button>
  );
};

export type DialogStackPreviousProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

export const DialogStackPrevious = ({
  children,
  className,
  asChild,
  ...props
}: DialogStackPreviousProps) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackPrevious must be used within a DialogStack');
  }

  const handlePrevious = () => {
    if (context.activeIndex > 0) {
      context.setActiveIndex(context.activeIndex - 1);
    }
  };

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>;
      className?: string;
    }>;

    return cloneElement(child, {
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handlePrevious();
        child.props.onClick?.(e);
      },
      className: cn(className, child.props.className),
      ...props,
    });
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={context.activeIndex <= 0}
      onClick={handlePrevious}
      type="button"
      {...props}
    >
      {children || 'Previous'}
    </button>
  );
};
