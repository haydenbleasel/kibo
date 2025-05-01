'use client';

import { cn } from '@/lib/utils';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const themes = [
  {
    key: 'system',
    icon: Monitor,
    label: 'System theme',
  },
  {
    key: 'light',
    icon: Sun,
    label: 'Light theme',
  },
  {
    key: 'dark',
    icon: Moon,
    label: 'Dark theme',
  },
];

export type ThemeSwitcherProps = {
  value?: 'light' | 'dark' | 'system';
  onChange?: (theme: 'light' | 'dark' | 'system') => void;
  defaultValue?: 'light' | 'dark' | 'system';
  className?: string;
};

export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = 'system',
  className,
}: ThemeSwitcherProps) => {
  const [theme, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border',
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            type="button"
            key={key}
            className="relative h-6 w-6 rounded-full"
            onClick={() => setTheme(key as 'light' | 'dark' | 'system')}
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-full bg-secondary"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                'relative z-10 m-auto h-4 w-4',
                isActive ? 'text-foreground' : 'text-muted-foreground'
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
