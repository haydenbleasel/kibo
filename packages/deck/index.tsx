'use client';

import {
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from 'motion/react';
import {
  Children,
  cloneElement,
  type HTMLAttributes,
  type ReactElement,
  useCallback,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

export type DeckProps = HTMLAttributes<HTMLDivElement>;

export const Deck = ({ children, className, ...props }: DeckProps) => (
  <div className={cn('relative isolate', className)} {...props} />
);

export type DeckCardsProps = HTMLAttributes<HTMLDivElement> & {
  onSwipe?: (index: number, direction: 'left' | 'right') => void;
  onSwipeEnd?: (index: number, direction: 'left' | 'right') => void;
  threshold?: number;
  stackSize?: number;
  perspective?: number;
  scale?: number;
};

export const DeckCards = ({
  children,
  className,
  onSwipe,
  onSwipeEnd,
  threshold = 150,
  stackSize = 3,
  perspective = 1000,
  scale = 0.05,
  ...props
}: DeckCardsProps) => {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(
    null
  );

  const handleSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (currentIndex >= childrenArray.length) {
        return;
      }

      setExitDirection(direction);

      if (direction === 'left') {
        onSwipe?.(currentIndex, 'left');
      } else {
        onSwipe?.(currentIndex, 'right');
      }

      onSwipeEnd?.(currentIndex, direction);

      // Move to next card after animation
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setExitDirection(null);
      }, 300);
    },
    [currentIndex, childrenArray.length, onSwipe, onSwipeEnd]
  );

  const visibleCards = childrenArray.slice(
    currentIndex,
    currentIndex + stackSize
  );

  if (currentIndex >= childrenArray.length) {
    return null;
  }

  return (
    <div
      className={cn('relative z-10 size-full', className)}
      style={{ perspective }}
      {...props}
    >
      {visibleCards.map((child, index) => {
        const isTopCard = index === 0;
        const zIndex = stackSize - index;
        const scaleValue = 1 - index * scale;
        const yOffset = index * 4;
        const cardKey = `${currentIndex}-${child.key || index}`;

        if (isTopCard) {
          return (
            <DeckCard
              exitDirection={exitDirection}
              key={cardKey}
              onSwipe={handleSwipe}
              style={{
                zIndex,
                scale: scaleValue,
                y: yOffset,
              }}
              threshold={threshold}
            >
              {child}
            </DeckCard>
          );
        }

        const nextCardScale = index === 1 && exitDirection ? 1 : scaleValue;
        const nextCardY = index === 1 && exitDirection ? 0 : yOffset;

        return (
          <motion.div
            animate={{
              scale: nextCardScale,
              y: nextCardY,
            }}
            className="absolute inset-0"
            key={cardKey}
            style={{
              zIndex,
              scale: scaleValue,
              y: yOffset,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

type DeckCardProps = {
  children: ReactElement;
  onSwipe: (direction: 'left' | 'right') => void;
  threshold: number;
  style?: object;
  exitDirection: 'left' | 'right' | null;
};

const DeckCard = ({
  children,
  onSwipe,
  threshold,
  style,
  exitDirection,
}: DeckCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(
    x,
    [-200, -threshold, 0, threshold, 200],
    [0, 1, 1, 1, 0]
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = threshold;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
  };

  // Handle programmatic exit animation
  let exitX = 0;
  if (exitDirection === 'left') {
    exitX = -500;
  } else if (exitDirection === 'right') {
    exitX = 500;
  }

  return (
    <motion.div
      animate={exitDirection ? { x: exitX, opacity: 0 } : undefined}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      style={{
        x,
        rotate,
        opacity,
        ...style,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileDrag={{ scale: 1.05 }}
    >
      {cloneElement(children as ReactElement<any>, {
        className: cn(
          'h-full w-full select-none rounded-lg shadow-lg',
          (children as any).props?.className
        ),
      })}
    </motion.div>
  );
};

export type DeckItemProps = HTMLAttributes<HTMLDivElement>;

export const DeckItem = ({ children, className, ...props }: DeckItemProps) => (
  <div
    className={cn(
      'flex h-full w-full items-center justify-center rounded-lg border bg-card text-card-foreground shadow-lg',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const DeckEmpty = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'absolute inset-0 flex w-full items-center justify-center rounded-lg border-2 border-muted-foreground/25 border-dashed text-muted-foreground',
      className
    )}
    {...props}
  >
    <p className="text-sm">No more cards</p>
  </div>
);
