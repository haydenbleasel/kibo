'use client';

import { GripVerticalIcon } from 'lucide-react';
import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  type ComponentProps,
  createContext,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  type TouchEventHandler,
  useContext,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

type ImageComparisonContextType = {
  sliderPosition: number;
  setSliderPosition: (pos: number) => void;
  motionSliderPosition: MotionValue<number>;
  mode: 'hover' | 'drag';
};

const ImageComparisonContext = createContext<
  ImageComparisonContextType | undefined
>(undefined);

const useImageComparisonContext = () => {
  const context = useContext(ImageComparisonContext);

  if (!context) {
    throw new Error(
      'useImageComparisonContext must be used within a ImageComparison'
    );
  }

  return context;
};

export type ComparisonProps = HTMLAttributes<HTMLDivElement> & {
  mode?: 'hover' | 'drag';
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export const Comparison = ({
  className,
  mode = 'drag',
  onDragStart,
  onDragEnd,
  ...props
}: ComparisonProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(motionValue, {
    bounce: 0,
    duration: 0,
  });
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (domRect: DOMRect, clientX: number) => {
    if (!isDragging && mode === 'drag') {
      return;
    }

    const x = clientX - domRect.left;
    const percentage = Math.min(Math.max((x / domRect.width) * 100, 0), 100);
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  const handleMouseDrag: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!event) {
      return;
    }

    const containerRect = event.currentTarget.getBoundingClientRect();

    handleDrag(containerRect, event.clientX);
  };

  const handleTouchDrag: TouchEventHandler<HTMLDivElement> = (event) => {
    if (!event) {
      return;
    }

    const containerRect = event.currentTarget.getBoundingClientRect();
    const touches = Array.from(event.touches);

    handleDrag(containerRect, touches.at(0)?.clientX ?? 0);
  };

  const handleDragStart = () => {
    if (mode === 'drag') {
      setIsDragging(true);
      onDragStart?.();
    }
  };

  const handleDragEnd = () => {
    if (mode === 'drag') {
      setIsDragging(false);
      onDragEnd?.();
    }
  };

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition, mode }}
    >
      <div
        aria-label="Comparison slider"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={sliderPosition}
        className={cn(
          'relative isolate w-full select-none overflow-hidden',
          className
        )}
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleMouseDrag}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleTouchDrag}
        onTouchStart={handleDragStart}
        role="slider"
        tabIndex={0}
        {...props}
      />
    </ImageComparisonContext.Provider>
  );
};

export type ComparisonItemProps = ComponentProps<typeof motion.div> & {
  position: 'left' | 'right';
};

export const ComparisonItem = ({
  className,
  position,
  ...props
}: ComparisonItemProps) => {
  const { motionSliderPosition } = useImageComparisonContext();
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.div
      aria-hidden="true"
      className={cn('absolute inset-0 h-full w-full object-cover', className)}
      role="img"
      style={{
        clipPath: position === 'left' ? leftClipPath : rightClipPath,
      }}
      {...props}
    />
  );
};

export type ComparisonHandleProps = ComponentProps<typeof motion.div> & {
  children?: ReactNode;
};

export const ComparisonHandle = ({
  className,
  children,
  ...props
}: ComparisonHandleProps) => {
  const { motionSliderPosition, mode } = useImageComparisonContext();
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        '-translate-x-1/2 absolute top-0 z-50 flex h-full w-10 items-center justify-center',
        mode === 'drag' && 'cursor-grab active:cursor-grabbing',
        className
      )}
      role="presentation"
      style={{ left }}
      {...props}
    >
      {children ?? (
        <>
          <div className="-translate-x-1/2 absolute left-1/2 h-full w-1 bg-background" />
          {mode === 'drag' && (
            <div className="z-50 flex items-center justify-center rounded-sm bg-background px-0.5 py-1">
              <GripVerticalIcon className="h-4 w-4 select-none text-muted-foreground" />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};
