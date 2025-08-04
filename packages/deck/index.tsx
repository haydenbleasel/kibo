'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
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
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

export type DeckProps = HTMLAttributes<HTMLDivElement>;

export const Deck = ({ className, ...props }: DeckProps) => (
  <div className={cn('relative isolate', className)} {...props} />
);

export type DeckCardsProps = HTMLAttributes<HTMLDivElement> & {
  onSwipe?: (index: number, direction: 'left' | 'right') => void;
  onSwipeEnd?: (index: number, direction: 'left' | 'right') => void;
  threshold?: number;
  stackSize?: number;
  perspective?: number;
  scale?: number;
  currentIndex?: number;
  defaultCurrentIndex?: number;
  onCurrentIndexChange?: (index: number) => void;
  animateOnIndexChange?: boolean;
  indexChangeDirection?: 'left' | 'right';
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
  currentIndex: currentIndexProp,
  defaultCurrentIndex = 0,
  onCurrentIndexChange,
  animateOnIndexChange = true,
  indexChangeDirection = 'left',
  ...props
}: DeckCardsProps) => {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const [currentIndex, setCurrentIndex] = useControllableState({
    prop: currentIndexProp,
    defaultProp: defaultCurrentIndex,
    onChange: onCurrentIndexChange,
  });
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(
    null
  );
  const [displayIndex, setDisplayIndex] = useState(currentIndex);
  const isInternalChangeRef = useRef(false);
  const prevIndexRef = useRef(currentIndex);

  // Detect external currentIndex changes and trigger animation
  useEffect(() => {
    const prevIndex = prevIndexRef.current;

    // Skip initial mount and internal changes
    if (prevIndex === currentIndex || isInternalChangeRef.current) {
      isInternalChangeRef.current = false;
      prevIndexRef.current = currentIndex;
      setDisplayIndex(currentIndex);
      return;
    }

    // Only animate if the option is enabled and we have cards to show
    if (animateOnIndexChange && prevIndex < childrenArray.length) {
      setExitDirection(indexChangeDirection);

      // Update display index after animation completes
      setTimeout(() => {
        setExitDirection(null);
        setDisplayIndex(currentIndex);
      }, 300);
    } else {
      // No animation, update display index immediately
      setDisplayIndex(currentIndex);
    }

    prevIndexRef.current = currentIndex;
  }, [currentIndex, animateOnIndexChange, indexChangeDirection, childrenArray.length]);

  const handleSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (displayIndex >= childrenArray.length) {
        return;
      }

      setExitDirection(direction);

      if (direction === 'left') {
        onSwipe?.(displayIndex, 'left');
      } else {
        onSwipe?.(displayIndex, 'right');
      }

      onSwipeEnd?.(displayIndex, direction);

      // Move to next card after animation
      setTimeout(() => {
        isInternalChangeRef.current = true;
        const newIndex = displayIndex + 1;
        setCurrentIndex(newIndex);
        setDisplayIndex(newIndex);
        setExitDirection(null);
      }, 300);
    },
    [displayIndex, childrenArray.length, onSwipe, onSwipeEnd, setCurrentIndex]
  );

  const visibleCards = childrenArray.slice(
    displayIndex,
    displayIndex + stackSize
  );

  if (displayIndex >= childrenArray.length) {
    return null;
  }

  return (
    <div
      className={cn('relative z-10 size-full', className)}
      style={{ perspective }}
      {...props}
    >
      {visibleCards.map((child, index) => {
        const isTopCard = !index;
        const zIndex = stackSize - index;
        const scaleValue = 1 - index * scale;
        const yOffset = index * 4;
        const cardKey = `${displayIndex}-${child.key ?? index}`;

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

  let exitX = 0;

  if (exitDirection === 'left') {
    exitX = -500;
  } else if (exitDirection === 'right') {
    exitX = 500;
  }

  const castedChildren = children as ReactElement<HTMLAttributes<HTMLDivElement>>;

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
      {cloneElement(castedChildren, {
        className: cn(
          'h-full w-full select-none rounded-lg shadow-lg',
          castedChildren.props.className
        ),
      })}
    </motion.div>
  );
};

export type DeckItemProps = HTMLAttributes<HTMLDivElement>;

export const DeckItem = ({ className, ...props }: DeckItemProps) => (
  <div
    className={cn(
      'flex h-full w-full items-center justify-center rounded-lg border bg-card text-card-foreground shadow-lg',
      className
    )}
    {...props}
  />
);

export type DeckEmptyProps = HTMLAttributes<HTMLDivElement>;

export const DeckEmpty = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'absolute inset-0 flex items-center justify-center rounded-lg border border-dashed text-muted-foreground',
      className
    )}
    {...props}
  >
    {children ?? <p className="text-sm">No more cards</p>}
  </div>
);
