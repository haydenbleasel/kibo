'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type {
  ComponentProps,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  VideoHTMLAttributes,
} from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Explicit type for reel items
export type ReelItem = {
  id: string | number;
  type: 'video' | 'image';
  src: string;
  duration: number; // Duration in seconds for both video and image
  alt?: string;
  title?: string;
  description?: string;
};

type ReelContextType = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  data: ReelItem[];
  currentItem: ReelItem;
  isNavigating: boolean;
  setIsNavigating: (navigating: boolean) => void;
  isTransitioning: boolean;
  setIsTransitioning: (transitioning: boolean) => void;
};

const ReelContext = createContext<ReelContextType | undefined>(undefined);

const useReelContext = () => {
  const context = useContext(ReelContext);
  if (!context) {
    throw new Error('useReelContext must be used within a Reel');
  }
  return context;
};

export type ReelProps = HTMLAttributes<HTMLDivElement> & {
  data: ReelItem[];
  defaultIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  defaultPlaying?: boolean;
  playing?: boolean;
  onPlayingChange?: (playing: boolean) => void;
  defaultMuted?: boolean;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  autoPlay?: boolean;
};

export const Reel = ({
  className,
  children,
  data,
  defaultIndex = 0,
  index: controlledIndex,
  onIndexChange: controlledOnIndexChange,
  defaultPlaying,
  playing: controlledPlaying,
  onPlayingChange: controlledOnPlayingChange,
  defaultMuted = true,
  muted: controlledMuted,
  onMutedChange: controlledOnMutedChange,
  autoPlay = true,
  ...props
}: ReelProps) => {
  const [currentIndex, setCurrentIndexState] = useControllableState({
    defaultProp: defaultIndex,
    prop: controlledIndex,
    onChange: controlledOnIndexChange,
  });

  const [isPlaying, setIsPlaying] = useControllableState({
    defaultProp: defaultPlaying ?? autoPlay,
    prop: controlledPlaying,
    onChange: controlledOnPlayingChange,
  });

  const [isMuted, setIsMuted] = useControllableState({
    defaultProp: defaultMuted,
    prop: controlledMuted,
    onChange: controlledOnMutedChange,
  });

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setCurrentIndex = useCallback(
    (index: number) => {
      setIsTransitioning(true);
      setProgress(0); // Reset progress immediately to prevent showing 100% during transition
      setCurrentIndexState(index);
    },
    [setCurrentIndexState]
  );

  const currentItem = data[currentIndex];

  return (
    <ReelContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        progress,
        setProgress,
        duration,
        setDuration,
        data,
        currentItem,
        isNavigating,
        setIsNavigating,
        isTransitioning,
        setIsTransitioning,
      }}
    >
      <div
        className={cn(
          'relative isolate h-full w-auto overflow-hidden bg-black',
          'aspect-[9/16]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ReelContext.Provider>
  );
};

export type ReelContentProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  children: (item: ReelItem, index: number) => ReactNode;
};

export const ReelContent = ({
  className,
  children,
  ...props
}: ReelContentProps) => {
  const { currentIndex, currentItem, setIsTransitioning } = useReelContext();

  const renderContent = () => {
    if (typeof children === 'function') {
      return children(currentItem, currentIndex);
    }
    const childrenArray = Array.isArray(children) ? children : [children];
    return childrenArray[currentIndex];
  };

  return (
    <div
      className={cn('relative size-full', className)}
      data-reel-content
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={currentIndex}
          onAnimationComplete={() => {
            // Mark transition as complete when fade-in completes
            setIsTransitioning(false);
          }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export type ReelItemProps = HTMLAttributes<HTMLDivElement>;

export const ReelItem = ({ className, children, ...props }: ReelItemProps) => (
  <div
    className={cn('relative size-full overflow-hidden', className)}
    data-reel-item
    {...props}
  >
    {children}
  </div>
);

export type ReelVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

const MS_TO_SECONDS = 1000;
const PERCENTAGE = 100;

export const ReelVideo = ({ className, ...props }: ReelVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    isPlaying,
    isMuted,
    setDuration,
    setProgress,
    currentIndex,
    setCurrentIndex,
    data,
    progress,
    currentItem,
    isTransitioning,
  } = useReelContext();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const pausedProgressRef = useRef<number>(0);
  const duration = currentItem.duration;

  // Set duration when component mounts or currentIndex changes
  useEffect(() => {
    setDuration(duration);
    // Don't reset progress here anymore - it's handled in ReelContent after transition
    if (!isTransitioning) {
      pausedProgressRef.current = 0;
    }
  }, [duration, setDuration, isTransitioning]);

  // Handle muting
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = isMuted;
  }, [isMuted]);

  // Store progress when pausing
  useEffect(() => {
    if (!isPlaying) {
      pausedProgressRef.current = progress;
    }
  }, [isPlaying, progress]);

  // Handle play/pause with duration-based progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying && !isTransitioning) {
      video.play().catch(() => {
        // Ignore autoplay errors
      });

      // Start progress animation only when not transitioning
      const elapsedTime = (pausedProgressRef.current * duration) / PERCENTAGE;
      startTimeRef.current = performance.now() - elapsedTime * MS_TO_SECONDS;

      const updateProgress = (currentTime: number) => {
        const elapsed =
          (currentTime - (startTimeRef.current || 0)) / MS_TO_SECONDS;
        const newProgress = (elapsed / duration) * PERCENTAGE;

        if (newProgress >= PERCENTAGE) {
          const totalItems = data?.length || 0;
          if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(0);
          }
        } else {
          setProgress(newProgress);
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else if (!isTransitioning) {
      video.pause();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isPlaying,
    duration,
    currentIndex,
    setProgress,
    setCurrentIndex,
    data,
    isTransitioning,
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
    }
  }, [currentIndex]);

  return (
    <video
      className={cn('absolute inset-0 size-full object-cover', className)}
      loop
      muted={isMuted}
      playsInline
      ref={videoRef}
      {...props}
    />
  );
};

export type ReelImageProps = Omit<ComponentProps<'img'>, 'alt'> & {
  alt: string;
  duration?: number;
  width?: number | string;
  height?: number | string;
};

const DEFAULT_IMAGE_DURATION = 5;

export const ReelImage = ({
  className,
  alt,
  duration = DEFAULT_IMAGE_DURATION,
  width,
  height,
  ...props
}: ReelImageProps) => {
  const {
    isPlaying,
    setDuration,
    setProgress,
    currentIndex,
    setCurrentIndex,
    data,
    progress,
    isTransitioning,
  } = useReelContext();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const pausedProgressRef = useRef<number>(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset progress when index changes
  useEffect(() => {
    setDuration(duration);
    // Don't reset progress here anymore - it's handled in ReelContent after transition
    if (!isTransitioning) {
      pausedProgressRef.current = 0;
    }
  }, [currentIndex, duration, setDuration, isTransitioning]);

  // Handle play/pause
  useEffect(() => {
    if (isPlaying && !isTransitioning) {
      const elapsedTime = (pausedProgressRef.current * duration) / PERCENTAGE;
      startTimeRef.current = performance.now() - elapsedTime * MS_TO_SECONDS;

      const updateProgress = (currentTime: number) => {
        const elapsed =
          (currentTime - (startTimeRef.current || 0)) / MS_TO_SECONDS;
        const newProgress = (elapsed / duration) * PERCENTAGE;

        if (newProgress >= PERCENTAGE) {
          const totalItems = data?.length || 0;

          if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(0);
          }
        } else {
          setProgress(newProgress);
          pausedProgressRef.current = newProgress;
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else if (!isTransitioning) {
      pausedProgressRef.current = progress;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isPlaying,
    duration,
    currentIndex,
    setProgress,
    setCurrentIndex,
    data,
    progress,
    isTransitioning,
  ]);

  return (
    // biome-ignore lint/performance/noImgElement: "Reel is framework-agnostic"
    <img
      alt={alt}
      className={cn('absolute inset-0 size-full object-cover', className)}
      height={height}
      width={width}
      {...props}
    />
  );
};

export type ReelProgressProps = HTMLAttributes<HTMLDivElement> & {
  children?: (
    item: ReelItem,
    index: number,
    isActive: boolean,
    progress: number
  ) => ReactNode;
};

export const ReelProgress = ({
  className,
  children,
  ...props
}: ReelProgressProps) => {
  const { progress, currentIndex, data, isPlaying, isNavigating } =
    useReelContext();
  const FULL_PROGRESS = 100;

  const calculateProgress = (index: number) => {
    if (index < currentIndex) {
      return FULL_PROGRESS;
    }
    if (index === currentIndex) {
      return progress;
    }

    return 0;
  };

  const calculateWidth = (index: number) => {
    if (index < currentIndex) {
      return '100%';
    }

    if (index === currentIndex) {
      return `${progress}%`;
    }

    return '0%';
  };

  const calculateTransition = (index: number) => {
    if (isNavigating) {
      return 'none';
    }

    if (index === currentIndex && isPlaying) {
      return 'none';
    }

    return 'width 0.3s ease-out';
  };

  if (typeof children === 'function') {
    return (
      <div
        className={cn(
          'absolute top-0 right-0 left-0 z-40 flex gap-1 p-2',
          className
        )}
        {...props}
      >
        {data.map((item, index) => (
          <div className="relative flex-1" key={`${item.id}-progress`}>
            {children(
              item,
              index,
              index === currentIndex,
              calculateProgress(index)
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'absolute top-0 right-0 left-0 z-40 flex gap-1 p-2',
        className
      )}
      {...props}
    >
      {data.map((item, index) => (
        <div
          className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/30"
          key={`${item.id}-progress`}
        >
          <div
            className="absolute top-0 left-0 h-full bg-white"
            style={{
              width: calculateWidth(index),
              transition: calculateTransition(index),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export type ReelControlsProps = HTMLAttributes<HTMLDivElement>;

export const ReelControls = ({ className, ...props }: ReelControlsProps) => {
  const {
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    currentIndex,
    setCurrentIndex,
    data,
    setIsNavigating,
  } = useReelContext();
  const totalItems = data?.length || 0;

  const NAVIGATION_RESET_DELAY = 50;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  return (
    <div
      className={cn(
        'absolute right-0 bottom-0 left-0 z-20 flex items-center justify-between p-4',
        'bg-gradient-to-t from-black/60 to-transparent',
        className
      )}
      {...props}
    >
      <Button
        aria-label="Previous"
        className='rounded-full text-white hover:bg-white/10 hover:text-white'
        disabled={currentIndex === 0}
        onClick={handlePrevious}
        size="icon"
        type="button"
        variant="ghost"
      >
        <ChevronLeft className="size-4" />
      </Button>

      <div className="flex gap-2">
        <Button
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className='rounded-full text-white hover:bg-white/10 hover:text-white'
          onClick={() => setIsPlaying(!isPlaying)}
          size="icon"
          variant="ghost"
        >
          {isPlaying ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
        </Button>

        <Button
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className='rounded-full text-white hover:bg-white/10 hover:text-white'
          onClick={() => setIsMuted(!isMuted)}
          size="icon"
          variant="ghost"
        >
          {isMuted ? (
            <VolumeX className="size-4" />
          ) : (
            <Volume2 className="size-4" />
          )}
        </Button>
      </div>

      <Button
        aria-label="Next"
        className='rounded-full text-white hover:bg-white/10 hover:text-white'
        disabled={currentIndex === totalItems - 1}
        onClick={handleNext}
        size="icon"
        variant="ghost"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export type ReelNavigationProps = HTMLAttributes<HTMLButtonElement>;

export const ReelNavigation = ({
  className,
  ...props
}: ReelNavigationProps) => {
  const { setCurrentIndex, currentIndex, data, setIsNavigating } =
    useReelContext();
  const totalItems = data?.length || 0;
  const NAVIGATION_RESET_DELAY = 50;
  const HALF_WIDTH_DIVISOR = 2;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / HALF_WIDTH_DIVISOR) {
      if (currentIndex > 0) {
        setIsNavigating(true);
        setCurrentIndex(currentIndex - 1);
        setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
      }
    } else if (currentIndex < totalItems - 1) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  return (
    <button
      className={cn('absolute inset-0 z-10 flex', className)}
      onClick={handleClick}
      type="button"
      {...props}
    >
      <div className="flex-1 cursor-pointer" />
      <div className="flex-1 cursor-pointer" />
    </button>
  );
};

export type ReelOverlayProps = HTMLAttributes<HTMLDivElement>;

export const ReelOverlay = ({
  className,
  children,
  ...props
}: ReelOverlayProps) => (
  <div
    className={cn('pointer-events-none absolute inset-0 z-30', className)}
    {...props}
  >
    {children}
  </div>
);

export type ReelHeaderProps = HTMLAttributes<HTMLDivElement>;

export const ReelHeader = ({
  className,
  children,
  ...props
}: ReelHeaderProps) => (
  <div
    className={cn(
      'absolute top-0 right-0 left-0 z-20 p-4 pt-6',
      'bg-gradient-to-b from-black/60 to-transparent',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export type ReelFooterProps = HTMLAttributes<HTMLDivElement>;

export const ReelFooter = ({
  className,
  children,
  ...props
}: ReelFooterProps) => (
  <div
    className={cn(
      'absolute right-0 bottom-0 left-0 z-20 p-4',
      'bg-gradient-to-t from-black/60 to-transparent',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
