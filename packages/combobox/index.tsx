'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { ChevronsUpDownIcon } from 'lucide-react';
import {
  type ComponentProps,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type ComboboxData = {
  label: string;
  value: string;
};

type ComboboxContextType = {
  data: ComboboxData[];
  type: string;
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  width: number;
  setWidth: (width: number) => void;
};

const ComboboxContext = createContext<ComboboxContextType>({
  data: [],
  type: 'item',
  value: '',
  onValueChange: () => {},
  open: false,
  onOpenChange: () => {},
  width: 200,
  setWidth: () => {},
});

export type ComboboxProps = ComponentProps<typeof Popover> & {
  data: ComboboxData[];
  type: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Combobox = ({
  data,
  type,
  defaultValue,
  value: controlledValue,
  onValueChange: controlledOnValueChange,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...props
}: ComboboxProps) => {
  const [value, onValueChange] = useControllableState({
    defaultProp: defaultValue ?? '',
    prop: controlledValue,
    onChange: controlledOnValueChange,
  });
  const [open, onOpenChange] = useControllableState({
    defaultProp: defaultOpen,
    prop: controlledOpen,
    onChange: controlledOnOpenChange,
  });
  const [width, setWidth] = useState(200);

  return (
    <ComboboxContext.Provider
      value={{
        type,
        value,
        onValueChange,
        open,
        onOpenChange,
        data,
        width,
        setWidth,
      }}
    >
      <Popover {...props} onOpenChange={onOpenChange} open={open} />
    </ComboboxContext.Provider>
  );
};

export type ComboboxTriggerProps = ComponentProps<typeof Button>;

export const ComboboxTrigger = ({
  children,
  ...props
}: ComboboxTriggerProps) => {
  const { value, data, type, setWidth } = useContext(ComboboxContext);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Create a ResizeObserver to detect width changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = (entry.target as HTMLElement).offsetWidth;
        if (newWidth) {
          setWidth?.(newWidth);
        }
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, [setWidth]);

  return (
    <PopoverTrigger asChild>
      <Button variant="outline" {...props} ref={ref}>
        {children ?? (
          <span className="flex w-full items-center justify-between gap-2">
            {value
              ? data.find((item) => item.value === value)?.label
              : `Select ${type}...`}
            <ChevronsUpDownIcon
              className="shrink-0 text-muted-foreground"
              size={16}
            />
          </span>
        )}
      </Button>
    </PopoverTrigger>
  );
};

export type ComboboxContentProps = ComponentProps<typeof Command> & {
  popoverOptions?: ComponentProps<typeof PopoverContent>;
};

export const ComboboxContent = ({
  className,
  popoverOptions,
  ...props
}: ComboboxContentProps) => {
  const { width } = useContext(ComboboxContext);

  return (
    <PopoverContent
      className={cn('p-0', className)}
      style={{ width }}
      {...popoverOptions}
    >
      <Command {...props} />
    </PopoverContent>
  );
};

export type ComboboxInputProps = ComponentProps<typeof CommandInput>;

export const ComboboxInput = (props: ComboboxInputProps) => {
  const { type } = useContext(ComboboxContext);

  return <CommandInput placeholder={`Search ${type}...`} {...props} />;
};

export type ComboboxListProps = ComponentProps<typeof CommandList>;

export const ComboboxList = (props: ComboboxListProps) => (
  <CommandList {...props} />
);

export type ComboboxEmptyProps = ComponentProps<typeof CommandEmpty>;

export const ComboboxEmpty = ({ children, ...props }: ComboboxEmptyProps) => {
  const { type } = useContext(ComboboxContext);

  return (
    <CommandEmpty {...props}>{children ?? `No ${type} found.`}</CommandEmpty>
  );
};

export type ComboboxGroupProps = ComponentProps<typeof CommandGroup>;

export const ComboboxGroup = (props: ComboboxGroupProps) => (
  <CommandGroup {...props} />
);

export type ComboboxItemProps = ComponentProps<typeof CommandItem>;

export const ComboboxItem = (props: ComboboxItemProps) => {
  const { onValueChange, onOpenChange } = useContext(ComboboxContext);

  return (
    <CommandItem
      onSelect={(currentValue) => {
        onValueChange(currentValue);
        onOpenChange(false);
      }}
      {...props}
    />
  );
};

export type ComboboxSeparatorProps = ComponentProps<typeof CommandSeparator>;

export const ComboboxSeparator = (props: ComboboxSeparatorProps) => (
  <CommandSeparator {...props} />
);
