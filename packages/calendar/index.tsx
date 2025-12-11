'use client'

import {getDay, getDaysInMonth, isSameDay} from 'date-fns'
import {atom, useAtom} from 'jotai'
import {
	Check,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsUpDown
} from 'lucide-react'
import {
	createContext,
	memo,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react'
import {Button} from '~Components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '~Components/ui/command'
import {Popover, PopoverContent, PopoverTrigger} from '~Components/ui/popover'
import {cn} from '~Utils/utils'

export interface CalendarState {
	month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
	year: number
}

const monthAtom = (date: Date) =>
	atom<CalendarState['month']>(
		new Date(date).getMonth() as CalendarState['month']
	)
const yearAtom = (date: Date) =>
	atom<CalendarState['year']>(new Date(date).getFullYear())

export const useCalendarMonth = ({currentDate}: {currentDate: Date}) =>
	useAtom(monthAtom(currentDate))
export const useCalendarYear = ({currentDate}: {currentDate: Date}) =>
	useAtom(yearAtom(currentDate))

interface CalendarContextProps {
	locale: Intl.LocalesArgument
	startDay: number
	currentDate: Date
}

const CalendarContext = createContext<CalendarContextProps>({
	locale: 'en-US',
	currentDate: new Date(),
	startDay: 0
})

export interface Status {
	id: string
	name: string
	color: string
}

export interface Feature {
	id: string
	name: string
	startAt: Date
	endAt: Date
	status: Status
	hasBookings?: boolean
}

interface ComboboxProps {
	value: string
	setValue: (value: string) => void
	data: {
		value: string
		label: string
	}[]
	labels: {
		button: string
		empty: string
		search: string
	}
	className?: string
}

export const monthsForLocale = (
	localeName: Intl.LocalesArgument,
	monthFormat: Intl.DateTimeFormatOptions['month'] = 'long'
) => {
	const format = new Intl.DateTimeFormat(localeName, {month: monthFormat})
		.format

	return [...new Array(12).keys()].map(m =>
		format(new Date(Date.UTC(2021, m, 2)))
	)
}

export const daysForLocale = (
	locale: Intl.LocalesArgument,
	startDay: number
) => {
	const weekdays: string[] = []
	const baseDate = new Date(2024, 0, startDay)

	for (let i = 0; i < 7; i++) {
		weekdays.push(
			new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(baseDate)
		)
		baseDate.setDate(baseDate.getDate() + 1)
	}

	return weekdays
}

const Combobox = ({
	value,
	setValue,
	data,
	labels,
	className
}: ComboboxProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverTrigger asChild={true}>
				<Button
					aria-expanded={open}
					className={cn('w-40 justify-between capitalize', className)}
					variant='outline'
				>
					{value
						? data.find(item => item.value === value)?.label
						: labels.button}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-40 p-0'>
				<Command
					filter={(value, search) => {
						const label = data.find(item => item.value === value)?.label

						return label?.toLowerCase().includes(search.toLowerCase()) ? 1 : 0
					}}
				>
					<CommandInput placeholder={labels.search} />
					<CommandList>
						<CommandEmpty>{labels.empty}</CommandEmpty>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									className='capitalize'
									key={item.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}
									value={item.value}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === item.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{item.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

interface OutOfBoundsDayProps {
	day: number
}

const OutOfBoundsDay = ({day}: OutOfBoundsDayProps) => (
	<div className='relative h-full w-full bg-secondary p-1 text-muted-foreground text-xs'>
		{day}
	</div>
)

export interface CalendarBodyProps {
	features: Feature[]
	children: (props: {feature: Feature}) => ReactNode
	currentDateClassName?: string
	showCurrentDate?: boolean
	currentDate?: Date
}

export const CalendarBody = ({
	features,
	children,
	currentDateClassName,
	showCurrentDate
}: CalendarBodyProps) => {
	const {startDay, currentDate} = useContext(CalendarContext)
	const [month] = useCalendarMonth({currentDate: currentDate || new Date()})
	const [year] = useCalendarYear({currentDate: currentDate || new Date()})

	// Memoize expensive date calculations
	const currentMonthDate = useMemo(
		() => new Date(year, month, 1),
		[year, month]
	)
	const daysInMonth = useMemo(
		() => getDaysInMonth(currentMonthDate),
		[currentMonthDate]
	)
	const firstDay = useMemo(
		() => (getDay(currentMonthDate) - startDay + 7) % 7,
		[currentMonthDate, startDay]
	)

	// Memoize previous month calculations
	const prevMonthData = useMemo(() => {
		const prevMonth = month === 0 ? 11 : month - 1
		const prevMonthYear = month === 0 ? year - 1 : year
		const prevMonthDays = getDaysInMonth(new Date(prevMonthYear, prevMonth, 1))
		const prevMonthDaysArray = Array.from(
			{length: prevMonthDays},
			(_, i) => i + 1
		)
		return {prevMonthDays, prevMonthDaysArray}
	}, [month, year])

	// Memoize next month calculations
	const nextMonthData = useMemo(() => {
		const nextMonth = month === 11 ? 0 : month + 1
		const nextMonthYear = month === 11 ? year + 1 : year
		const nextMonthDays = getDaysInMonth(new Date(nextMonthYear, nextMonth, 1))
		const nextMonthDaysArray = Array.from(
			{length: nextMonthDays},
			(_, i) => i + 1
		)
		return {nextMonthDaysArray}
	}, [month, year])

	// Memoize features filtering by day to avoid recalculating on every render
	const featuresByDay = useMemo(() => {
		const result: {[day: number]: Feature[]} = {}
		for (let day = 1; day <= daysInMonth; day++) {
			result[day] = features.filter(feature => {
				return isSameDay(new Date(feature.endAt), new Date(year, month, day))
			})
		}
		return result
	}, [features, daysInMonth, year, month])

	const days: ReactNode[] = []

	for (let i = 0; i < firstDay; i++) {
		const day =
			prevMonthData.prevMonthDaysArray[
				prevMonthData.prevMonthDays - firstDay + i
			]

		if (day) {
			days.push(<OutOfBoundsDay day={day} key={`prev-${i}`} />)
		}
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const featuresForDay = featuresByDay[day] || []
		const isToday =
			showCurrentDate && currentDate && isSameDay(currentDate, new Date(year, month, day))
		days.push(
			<div
				className={`relative flex h-full w-full flex-col gap-1 p-1 text-muted-foreground text-xs ${isToday ? `${currentDateClassName || 'bg-primary/50'}` : ''}`}
				key={day}
			>
				{day}
				<div>
					{featuresForDay.slice(0, 3).map(feature => children({feature}))}
				</div>
				{featuresForDay.length > 3 && (
					<span className='block text-muted-foreground text-xs'>
						+{featuresForDay.length - 3} more
					</span>
				)}
			</div>
		)
	}

	const remainingDays = 7 - ((firstDay + daysInMonth) % 7)
	if (remainingDays < 7) {
		for (let i = 0; i < remainingDays; i++) {
			const day = nextMonthData.nextMonthDaysArray[i]

			if (day) {
				days.push(<OutOfBoundsDay day={day} key={`next-${i}`} />)
			}
		}
	}

	return (
		<div className='grid flex-grow grid-cols-7'>
			{days.map((day, index) => (
				<div
					className={cn(
						'relative aspect-square overflow-hidden border-t border-r',
						index % 7 === 6 && 'border-r-0'
					)}
					key={index}
				>
					{day}
				</div>
			))}
		</div>
	)
}

export interface CalendarDatePickerProps {
	className?: string
	children: ReactNode
}

export const CalendarDatePicker = ({
	className,
	children
}: CalendarDatePickerProps) => (
	<div className={cn('flex items-center gap-1', className)}>{children}</div>
)

export interface CalendarMonthPickerProps {
	className?: string
}

export const CalendarMonthPicker = ({className}: CalendarMonthPickerProps) => {
	const {locale, currentDate} = useContext(CalendarContext)
	const [month, setMonth] = useCalendarMonth({
		currentDate: currentDate || new Date()
	})

	// Memoize month data to avoid recalculating date formatting
	const monthData = useMemo(() => {
		return monthsForLocale(locale).map((month, index) => ({
			value: index.toString(),
			label: month
		}))
	}, [locale])

	return (
		<Combobox
			className={className}
			data={monthData}
			labels={{
				button: 'Select month',
				empty: 'No month found',
				search: 'Search month'
			}}
			setValue={value =>
				setMonth(Number.parseInt(value, 10) as CalendarState['month'])
			}
			value={month.toString()}
		/>
	)
}

export interface CalendarYearPickerProps {
	className?: string
	start: number
	end: number
}

export const CalendarYearPicker = ({
	className,
	start,
	end
}: CalendarYearPickerProps) => {
	const {currentDate} = useContext(CalendarContext)
	const [year, setYear] = useCalendarYear({
		currentDate: currentDate || new Date()
	})

	return (
		<Combobox
			className={className}
			data={Array.from({length: end - start + 1}, (_, i) => ({
				value: (start + i).toString(),
				label: (start + i).toString()
			}))}
			labels={{
				button: 'Select year',
				empty: 'No year found',
				search: 'Search year'
			}}
			setValue={value => setYear(Number.parseInt(value, 10))}
			value={year.toString()}
		/>
	)
}

export interface CalendarDatePaginationProps {
	className?: string
}

export const CalendarDatePagination = ({
	className
}: CalendarDatePaginationProps) => {
	const {currentDate} = useContext(CalendarContext)
	const [month, setMonth] = useCalendarMonth({
		currentDate: currentDate || new Date()
	})
	const [year, setYear] = useCalendarYear({
		currentDate: currentDate || new Date()
	})

	const handlePreviousMonth = useCallback(() => {
		if (month === 0) {
			setMonth(11)
			setYear(year - 1)
		} else {
			setMonth((month - 1) as CalendarState['month'])
		}
	}, [month, year, setMonth, setYear])

	const handleNextMonth = useCallback(() => {
		if (month === 11) {
			setMonth(0)
			setYear(year + 1)
		} else {
			setMonth((month + 1) as CalendarState['month'])
		}
	}, [month, year, setMonth, setYear])

	return (
		<div className={cn('flex items-center gap-2', className)}>
			<Button onClick={handlePreviousMonth} size='icon' variant='ghost'>
				<ChevronLeftIcon size={16} />
			</Button>
			<Button onClick={handleNextMonth} size='icon' variant='ghost'>
				<ChevronRightIcon size={16} />
			</Button>
		</div>
	)
}

export interface CalendarDateProps {
	children: ReactNode
}

export const CalendarDate = ({children}: CalendarDateProps) => (
	<div className='flex items-center justify-between p-3'>{children}</div>
)

export interface CalendarHeaderProps {
	className?: string
}

export const CalendarHeader = ({className}: CalendarHeaderProps) => {
	const {locale, startDay} = useContext(CalendarContext)

	// Memoize days data to avoid recalculating date formatting
	const daysData = useMemo(() => {
		return daysForLocale(locale, startDay)
	}, [locale, startDay])

	return (
		<div className={cn('grid flex-grow grid-cols-7', className)}>
			{daysData.map(day => (
				<div className='p-3 text-right text-muted-foreground text-xs' key={day}>
					{day}
				</div>
			))}
		</div>
	)
}

export interface CalendarItemProps {
	feature: Feature
	className?: string
}

export const CalendarItem = memo(({feature, className}: CalendarItemProps) => (
	<div className={cn('flex items-center gap-2', className)}>
		<div
			className='h-2 w-2 shrink-0 rounded-full'
			style={{
				backgroundColor: feature.status.color
			}}
		/>
		<span className='truncate'>{feature.name}</span>
		{feature.hasBookings && (
			<span className='ml-auto text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full shrink-0'>
				📋
			</span>
		)}
	</div>
))

CalendarItem.displayName = 'CalendarItem'

export interface CalendarProviderProps {
	locale?: Intl.LocalesArgument
	startDay?: number
	children: ReactNode
	className?: string
	currentDate?: Date
}

export const CalendarProvider = ({
	locale = 'en-US',
	startDay = 0,
	currentDate = new Date(),
	children,
	className
}: CalendarProviderProps) => (
	<CalendarContext.Provider value={{locale, startDay, currentDate}}>
		<div className={cn('relative flex flex-col', className)}>{children}</div>
	</CalendarContext.Provider>
)
