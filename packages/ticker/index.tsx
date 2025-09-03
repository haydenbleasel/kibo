"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { createContext, memo, useContext, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type TickerContextValue = {
  formatter: Intl.NumberFormat;
};

const DEFAULT_CURRENCY = "USD";
const DEFAULT_LOCALE = "en-US";

const defaultFormatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
  style: "currency",
  currency: DEFAULT_CURRENCY,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TickerContext = createContext<TickerContextValue>({
  formatter: defaultFormatter,
});

export const useTickerContext = () => useContext(TickerContext);

export type TickerProps = HTMLAttributes<HTMLButtonElement> & {
  currency?: string;
  locale?: string;
};

export const Ticker = memo(
  ({
    children,
    className,
    currency = DEFAULT_CURRENCY,
    locale = DEFAULT_LOCALE,
    ...props
  }: TickerProps & { children: ReactNode }) => {
    const formatter = useMemo(() => {
      try {
        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency: currency.toUpperCase(),
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      } catch {
        return defaultFormatter;
      }
    }, [currency, locale]);

    return (
      <TickerContext.Provider value={{ formatter }}>
        <button
          className={cn(
            "inline-flex items-center gap-1.5 whitespace-nowrap align-middle",
            className
          )}
          type="button"
          {...props}
        >
          {children}
        </button>
      </TickerContext.Provider>
    );
  }
);
Ticker.displayName = "Ticker";

export type TickerIconProps = HTMLAttributes<HTMLImageElement> & {
  src?: string;
  symbol?: string;
  asChild?: boolean;
};

export const TickerIcon = memo(
  ({
    src,
    symbol,
    className,
    asChild,
    children,
    ...props
  }: TickerIconProps) => {
    if (asChild) {
      return (
        <div
          className={cn(
            "overflow-hidden rounded-full border border-border bg-muted",
            className
          )}
        >
          {children}
        </div>
      );
    }

    return (
      <Avatar className={cn("size-7 border border-border bg-muted", className)}>
        <AvatarImage src={src} {...props} />
        <AvatarFallback className="font-semibold text-muted-foreground text-sm">
          {symbol?.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    );
  }
);
TickerIcon.displayName = "TickerIcon";

export type TickerSymbolProps = HTMLAttributes<HTMLSpanElement> & {
  symbol: string;
};

export const TickerSymbol = memo(
  ({ symbol, className, ...props }: TickerSymbolProps) => (
    <span className={cn("font-medium", className)} {...props}>
      {symbol.toUpperCase()}
    </span>
  )
);
TickerSymbol.displayName = "TickerSymbol";

export type TickerPriceProps = HTMLAttributes<HTMLSpanElement> & {
  price: number;
};

export const TickerPrice = memo(
  ({ price, className, ...props }: TickerPriceProps) => {
    const context = useTickerContext();

    const formattedPrice = useMemo(
      () => context.formatter.format(price),
      [price, context]
    );

    return (
      <span className={cn("text-muted-foreground", className)} {...props}>
        {formattedPrice}
      </span>
    );
  }
);
TickerPrice.displayName = "TickerPrice";

export type TickerPriceChangeProps = HTMLAttributes<HTMLSpanElement> & {
  change: number;
  isPercent?: boolean;
};

export const TickerPriceChange = memo(
  ({ change, isPercent, className, ...props }: TickerPriceChangeProps) => {
    const isPositiveChange = useMemo(() => change >= 0, [change]);
    const context = useTickerContext();

    const changeFormatted = useMemo(() => {
      if (isPercent) {
        return `${change.toFixed(2)}%`;
      }
      return context.formatter.format(change);
    }, [change, isPercent, context]);

    return (
      <span
        className={cn(
          "flex items-center gap-0.5",
          isPositiveChange
            ? "text-green-600 dark:text-green-500"
            : "text-red-600 dark:text-red-500",
          className
        )}
        {...props}
      >
        <svg
          aria-labelledby="ticker-change-icon-title"
          className={isPositiveChange ? "" : "rotate-180"}
          fill="currentColor"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="ticker-change-icon-title">
            {isPositiveChange ? "Up icon" : "Down icon"}
          </title>
          <path d="M24 22h-24l12-20z" />
        </svg>
        {changeFormatted}
      </span>
    );
  }
);
TickerPriceChange.displayName = "TickerPriceChange";
