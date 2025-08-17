'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import chroma from 'chroma-js';
import type { Day as WeekDay } from 'date-fns';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfYear,
  formatISO,
  getDay,
  getMonth,
  getYear,
  nextDay,
  parseISO,
  startOfYear,
  subWeeks,
} from 'date-fns';
import {
  createContext,
  type CSSProperties,
  Fragment,
  type ReactElement,
  type ReactNode,
  useContext,
  useMemo,
} from 'react';
import { cn } from '@/lib/utils';

export interface Activity {
  date: string;
  count: number;
  level: number;
}

type Week = Array<Activity | undefined>;

export interface Labels {
  months?: Array<string>;
  weekdays?: Array<string>;
  totalCount?: string;
  legend?: {
    less?: string;
    more?: string;
  };
}

type Color = string;
type ColorScale = Array<Color>;

export interface Theme {
  light: ColorScale;
  dark: ColorScale;
}

export type ThemeInput =
  | {
      light: ColorScale | [from: Color, to: Color];
      dark?: ColorScale | [from: Color, to: Color];
    }
  | {
      light?: ColorScale | [from: Color, to: Color];
      dark: ColorScale | [from: Color, to: Color];
    };

interface BlockAttributes {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  ry: number;
  fill: string;
  'data-date': string;
  'data-level': number;
}

export type BlockElement = ReactElement<BlockAttributes>;

interface MonthLabel {
  weekIndex: number;
  label: string;
}

const DEFAULT_MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DEFAULT_LABELS: Labels = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
};

interface ContributionGraphContextType {
  data: Activity[];
  weeks: Week[];
  blockMargin: number;
  blockRadius: number;
  blockSize: number;
  colorScheme: 'light' | 'dark' | undefined;
  colorScale: ColorScale;
  fontSize: number;
  labels: Labels;
  labelHeight: number;
  loading: boolean;
  maxLevel: number;
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement;
  theme: Theme;
  totalCount: number;
  weekStart: WeekDay;
  year: number;
  width: number;
  height: number;
}

const ContributionGraphContext = createContext<ContributionGraphContextType | null>(
  null
);

const useContributionGraph = () => {
  const context = useContext(ContributionGraphContext);
  if (!context) {
    throw new Error(
      'ContributionGraph components must be used within a ContributionGraph'
    );
  }
  return context;
};

function fillHoles(activities: Activity[]): Activity[] {
  if (activities.length === 0) {
    return [];
  }

  const calendar = new Map<string, Activity>(
    activities.map((a) => [a.date, a])
  );
  const firstActivity = activities[0] as Activity;
  const lastActivity = activities[activities.length - 1] as Activity;

  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date),
  }).map((day) => {
    const date = formatISO(day, { representation: 'date' });

    if (calendar.has(date)) {
      return calendar.get(date) as Activity;
    }

    return {
      date,
      count: 0,
      level: 0,
    };
  });
}

function groupByWeeks(
  activities: Activity[],
  weekStart: WeekDay = 0
): Week[] {
  if (activities.length === 0) {
    return [];
  }

  const normalizedActivities = fillHoles(activities);
  const firstActivity = normalizedActivities[0] as Activity;
  const firstDate = parseISO(firstActivity.date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart
      ? firstDate
      : subWeeks(nextDay(firstDate, weekStart), 1);

  const paddedActivities = [
    ...(Array(
      differenceInCalendarDays(firstDate, firstCalendarDate)
    ).fill(undefined) as Activity[]),
    ...normalizedActivities,
  ];

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7);

  return Array(numberOfWeeks)
    .fill(undefined)
    .map((_, weekIndex) =>
      paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7)
    );
}

function getMonthLabels(
  weeks: Week[],
  monthNames: string[] = DEFAULT_MONTH_LABELS
): MonthLabel[] {
  return weeks
    .reduce<MonthLabel[]>((labels, week, weekIndex) => {
      const firstActivity = week.find((activity) => activity !== undefined);

      if (!firstActivity) {
        throw new Error(
          `Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`
        );
      }

      const month = monthNames[getMonth(parseISO(firstActivity.date))];

      if (!month) {
        const monthName = new Date(firstActivity.date).toLocaleString(
          'en-US',
          { month: 'short' }
        );
        throw new Error(
          `Unexpected error: undefined month label for ${monthName}.`
        );
      }

      const prevLabel = labels[labels.length - 1];

      if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
        return [...labels, { weekIndex, label: month }];
      }

      return labels;
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      const minWeeks = 3;

      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
      }

      if (index === labels.length - 1) {
        return weeks.slice(weekIndex).length >= minWeeks;
      }

      return true;
    });
}

function createColorScale(
  colors: [from: Color, to: Color],
  size: number
): ColorScale {
  return chroma.scale(colors).mode('lch').colors(size);
}

function isColorScale(colors: unknown[], size: number): colors is ColorScale {
  const invalidColor = colors.find((color) => !chroma.valid(color));

  if (invalidColor) {
    throw new Error(
      `Invalid color "${String(
        invalidColor
      )}" passed. All CSS color formats are accepted.`
    );
  }

  return colors.length === size;
}

function createTheme(input?: ThemeInput, size: number = 5): Theme {
  const defaultTheme: Theme = {
    light: createColorScale(['hsl(0, 0%, 92%)', 'hsl(0, 0%, 26%)'], size),
    dark: createColorScale(['hsl(0, 0%, 20%)', 'hsl(0, 0%, 92%)'], size),
  };

  if (input) {
    if (
      typeof input !== 'object' ||
      (input.light === undefined && input.dark === undefined)
    ) {
      throw new Error(
        `The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${size} colors respectively.`
      );
    }

    if (input.light) {
      const { length } = input.light;
      if (length !== 2 && length !== size) {
        throw new Error(
          `theme.light must contain exactly 2 or ${size} colors, ${length} passed.`
        );
      }
    }

    if (input.dark) {
      const { length } = input.dark;
      if (length !== 2 && length !== size) {
        throw new Error(
          `theme.dark must contain exactly 2 or ${size} colors, ${length} passed.`
        );
      }
    }

    input.light = input.light ?? defaultTheme.light;
    input.dark = input.dark ?? defaultTheme.dark;

    return {
      light: isColorScale(input.light, size)
        ? input.light
        : createColorScale(input.light, size),
      dark: isColorScale(input.dark, size)
        ? input.dark
        : createColorScale(input.dark, size),
    };
  }

  return defaultTheme;
}

function generateEmptyData(): Activity[] {
  const year = new Date().getFullYear();
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  });

  return days.map((date) => ({
    date: formatISO(date, { representation: 'date' }),
    count: 0,
    level: 0,
  }));
}

export interface ContributionGraphProps {
  data: Activity[];
  blockMargin?: number;
  blockRadius?: number;
  blockSize?: number;
  colorScheme?: 'light' | 'dark';
  fontSize?: number;
  labels?: Labels;
  maxLevel?: number;
  loading?: boolean;
  renderBlock?: (block: BlockElement, activity: Activity) => ReactElement;
  style?: CSSProperties;
  theme?: ThemeInput;
  totalCount?: number;
  weekStart?: WeekDay;
  children: ReactNode;
  className?: string;
}

export const ContributionGraph = ({
  data: dataProp,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  colorScheme = undefined,
  fontSize = 14,
  labels: labelsProp = undefined,
  maxLevel: maxLevelProp = 4,
  loading = false,
  renderBlock = undefined,
  style = {},
  theme: themeProp = undefined,
  totalCount: totalCountProp = undefined,
  weekStart = 0,
  children,
  className,
}: ContributionGraphProps) => {
  const maxLevel = Math.max(1, maxLevelProp);
  const theme = useMemo(
    () => createTheme(themeProp, maxLevel + 1),
    [themeProp, maxLevel]
  );
  const colorScale = theme[colorScheme ?? 'light'];

  const data = loading ? generateEmptyData() : dataProp;
  const weeks = useMemo(() => groupByWeeks(data, weekStart), [data, weekStart]);

  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const labelHeight = fontSize + 8; // LABEL_MARGIN

  const year = data.length > 0 ? getYear(parseISO(data[0].date)) : new Date().getFullYear();

  const totalCount =
    typeof totalCountProp === 'number'
      ? totalCountProp
      : data.reduce((sum, activity) => sum + activity.count, 0);

  const width = weeks.length * (blockSize + blockMargin) - blockMargin;
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;

  if (data.length === 0 && !loading) {
    return null;
  }

  return (
    <ContributionGraphContext.Provider
      value={{
        data,
        weeks,
        blockMargin,
        blockRadius,
        blockSize,
        colorScheme,
        colorScale,
        fontSize,
        labels,
        labelHeight,
        loading,
        maxLevel,
        renderBlock,
        theme,
        totalCount,
        weekStart,
        year,
        width,
        height,
      }}
    >
      <article
        className={cn(
          'flex w-max max-w-full flex-col gap-2',
          className
        )}
        style={{ fontSize, ...style }}
      >
        {children}
      </article>
    </ContributionGraphContext.Provider>
  );
};

export interface ContributionGraphCalendarProps {
  hideMonthLabels?: boolean;
  className?: string;
}

export const ContributionGraphCalendar = ({
  hideMonthLabels = false,
  className,
}: ContributionGraphCalendarProps) => {
  const {
    weeks,
    width,
    height,
    blockSize,
    blockMargin,
    blockRadius,
    colorScale,
    labels,
    labelHeight,
    loading,
    maxLevel,
    renderBlock,
  } = useContributionGraph();

  const monthLabels = useMemo(
    () => getMonthLabels(weeks, labels.months),
    [weeks, labels.months]
  );

  return (
    <div className={cn('max-w-full overflow-x-auto overflow-y-hidden', className)}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="block overflow-visible"
      >
        {!loading && !hideMonthLabels && (
          <g className="fill-current">
            {monthLabels.map(({ label, weekIndex }) => (
              <text
                key={weekIndex}
                x={(blockSize + blockMargin) * weekIndex}
                dominantBaseline="hanging"
              >
                {label}
              </text>
            ))}
          </g>
        )}
        {weeks.map((week, weekIndex) => (
          <g
            key={weekIndex}
            transform={`translate(${(blockSize + blockMargin) * weekIndex}, 0)`}
          >
            {week.map((activity, dayIndex) => {
              if (!activity) {
                return null;
              }

              if (activity.level < 0 || activity.level > maxLevel) {
                throw new RangeError(
                  `Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${maxLevel}.`
                );
              }

              const block = (
                <rect
                  x={0}
                  y={labelHeight + (blockSize + blockMargin) * dayIndex}
                  width={blockSize}
                  height={blockSize}
                  rx={blockRadius}
                  ry={blockRadius}
                  fill={colorScale[activity.level]}
                  data-date={activity.date}
                  data-level={activity.level}
                  className="stroke-black/[0.08] stroke-[1px] dark:stroke-white/[0.04]"
                />
              );

              return (
                <Fragment key={activity.date}>
                  {renderBlock ? renderBlock(block, activity) : block}
                </Fragment>
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
};

export interface ContributionGraphFooterProps {
  hideTotalCount?: boolean;
  hideColorLegend?: boolean;
  className?: string;
}

export const ContributionGraphFooter = ({
  hideTotalCount = false,
  hideColorLegend = false,
  className,
}: ContributionGraphFooterProps) => {
  const {
    loading,
    totalCount,
    year,
    labels,
    maxLevel,
    colorScale,
    blockSize,
    blockRadius,
  } = useContributionGraph();

  if (hideTotalCount && hideColorLegend) {
    return null;
  }

  return (
    <footer
      className={cn('flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4', className)}
    >
      {loading && <div>&nbsp;</div>}

      {!loading && !hideTotalCount && (
        <div className="text-muted-foreground">
          {labels.totalCount
            ? labels.totalCount
                .replace('{{count}}', String(totalCount))
                .replace('{{year}}', String(year))
            : `${totalCount} activities in ${year}`}
        </div>
      )}

      {!loading && !hideColorLegend && (
        <div className="ml-auto flex items-center gap-[3px]">
          <span className="mr-1 text-muted-foreground">
            {labels.legend?.less || 'Less'}
          </span>
          {Array(maxLevel + 1)
            .fill(undefined)
            .map((_, level) => (
              <svg width={blockSize} height={blockSize} key={level}>
                <rect
                  width={blockSize}
                  height={blockSize}
                  fill={colorScale[level]}
                  rx={blockRadius}
                  ry={blockRadius}
                  className="stroke-black/[0.08] stroke-[1px] dark:stroke-white/[0.04]"
                />
              </svg>
            ))}
          <span className="ml-1 text-muted-foreground">
            {labels.legend?.more || 'More'}
          </span>
        </div>
      )}
    </footer>
  );
};

export const ContributionGraphSkeleton = (
  props: Omit<ContributionGraphProps, 'data' | 'children'>
) => (
  <ContributionGraph data={[]} loading {...props}>
    <ContributionGraphCalendar />
    <ContributionGraphFooter />
  </ContributionGraph>
);

export function generateTestData(args?: {
  interval?: { start: Date; end: Date };
  maxLevel?: number;
}): Activity[] {
  const maxCount = 20;
  const maxLevel = args?.maxLevel ? Math.max(1, args.maxLevel) : 4;
  const now = new Date();

  const days = eachDayOfInterval(
    args?.interval ?? {
      start: startOfYear(now),
      end: endOfYear(now),
    }
  );

  return days.map((date) => {
    const c =
      Math.round(
        Math.random() * maxCount - Math.random() * (0.8 * maxCount)
      );
    const count = Math.max(0, c);
    const level = Math.ceil((count / maxCount) * maxLevel);

    return {
      date: formatISO(date, { representation: 'date' }),
      count,
      level,
    };
  });
}