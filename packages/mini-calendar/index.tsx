'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { addDays, format, isSameDay, isToday } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type HTMLAttributes,
  createContext,
  useContext,
  useState,
} from 'react';

// Context for sharing state between components
type MiniCalendarContextType = {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  startDate: Date;
  onNavigate: (direction: 'prev' | 'next') => void;
};

const MiniCalendarContext = createContext<MiniCalendarContextType | null>(null);

const useMiniCalendar = () => {
  const context = useContext(MiniCalendarContext);

  if (!context) {
    throw new Error('MiniCalendar components must be used within MiniCalendar');
  }

  return context;
};

// Helper function to get array of 5 consecutive dates
const getFiveDays = (startDate: Date): Date[] => {
  const days: Date[] = [];
  for (let i = 0; i < 5; i++) {
    days.push(addDays(startDate, i));
  }
  return days;
};

// Helper function to format date
const formatDate = (date: Date) => {
  const month = format(date, 'MMM');
  const day = format(date, 'd');

  return { month, day };
};

export type MiniCalendarProps = HTMLAttributes<HTMLDivElement> & {
  value?: Date;
  onValueChange?: (date: Date) => void;
  defaultDate?: Date;
};

export const MiniCalendar = ({
  value,
  onValueChange,
  defaultDate = new Date(),
  className,
  children,
  ...props
}: MiniCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [startDate, setStartDate] = useState<Date>(defaultDate);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onValueChange?.(date);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newStartDate = addDays(startDate, direction === 'next' ? 5 : -5);
    setStartDate(newStartDate);
  };

  const contextValue: MiniCalendarContextType = {
    selectedDate,
    onDateSelect: handleDateSelect,
    startDate,
    onNavigate: handleNavigate,
  };

  return (
    <MiniCalendarContext.Provider value={contextValue}>
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border bg-background p-2',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MiniCalendarContext.Provider>
  );
};

export type MiniCalendarNavigationProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    direction: 'prev' | 'next';
  };

export const MiniCalendarNavigation = ({
  direction,
  className,
  children,
  ...props
}: MiniCalendarNavigationProps) => {
  const { onNavigate } = useMiniCalendar();
  const Icon = direction === 'prev' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn('size-8 p-0', className)}
      onClick={() => onNavigate(direction)}
      {...props}
    >
      {children ?? <Icon className="h-4 w-4" />}
    </Button>
  );
};

export type MiniCalendarDaysProps = HTMLAttributes<HTMLDivElement>;

export const MiniCalendarDays = ({
  className,
  children,
  ...props
}: MiniCalendarDaysProps) => {
  const { startDate } = useMiniCalendar();
  const days = getFiveDays(startDate);

  return (
    <div className={cn('flex items-center gap-1', className)} {...props}>
      {children ??
        days.map((date) => (
          <MiniCalendarDay key={date.toISOString()} date={date} />
        ))}
    </div>
  );
};

export type MiniCalendarDayProps = ComponentProps<typeof Button> & {
  date: Date;
};

export const MiniCalendarDay = ({
  date,
  className,
  ...props
}: MiniCalendarDayProps) => {
  const { selectedDate, onDateSelect } = useMiniCalendar();
  const { month, day } = formatDate(date);
  const isSelected = selectedDate && isSameDay(date, selectedDate);
  const isTodayDate = isToday(date);

  return (
    <Button
      variant={isSelected ? 'default' : 'ghost'}
      size="sm"
      className={cn(
        'h-auto min-w-[3rem] flex-col gap-0 p-2 text-xs',
        isTodayDate && !isSelected && 'bg-accent',
        className
      )}
      onClick={() => onDateSelect(date)}
      {...props}
    >
      <span className="font-medium text-[10px] text-muted-foreground">
        {month}
      </span>
      <span className="font-semibold text-sm">{day}</span>
    </Button>
  );
};
