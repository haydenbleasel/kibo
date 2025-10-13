import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@repo/marquee";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  AlertCircleIcon,
  AppWindowIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  BarChartIcon,
  BellIcon,
  BetweenHorizontalStartIcon,
  BlocksIcon,
  BoneIcon,
  BoxIcon,
  BoxSelectIcon,
  BringToFrontIcon,
  BrushCleaningIcon,
  Calendar1Icon,
  CalendarIcon,
  CaseLowerIcon,
  CheckSquareIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  CommandIcon,
  ExpandIcon,
  EyeIcon,
  FormInputIcon,
  GalleryHorizontalIcon,
  GridIcon,
  GroupIcon,
  HomeIcon,
  KeyboardIcon,
  LaptopMinimalCheckIcon,
  Layers2Icon,
  LayoutIcon,
  ListIcon,
  Loader2Icon,
  LoaderIcon,
  MapIcon,
  MegaphoneIcon,
  MinusIcon,
  MoreVerticalIcon,
  NavigationIcon,
  PanelLeftIcon,
  PointerIcon,
  RadiusIcon,
  RectangleCircleIcon,
  RectangleEllipsisIcon,
  ScalingIcon,
  ScrollIcon,
  SendIcon,
  SlidersIcon,
  TableIcon,
  TablePropertiesIcon,
  TextCursorIcon,
  TextIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
  UngroupIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const data = [
  {
    icon: LayoutIcon,
    title: "Accordion",
    description:
      "Vertically stacked sections that expand and collapse to reveal content",
  },
  {
    icon: BellIcon,
    title: "Alert",
    description:
      "Prominent messages to capture user attention for important information",
  },
  {
    icon: AlertCircleIcon,
    title: "Alert Dialog",
    description:
      "Modal dialogs that interrupt users with important decisions or information",
  },
  {
    icon: ExpandIcon,
    title: "Aspect Ratio",
    description: "Container that maintains a consistent width-to-height ratio",
  },
  {
    icon: UserIcon,
    title: "Avatar",
    description:
      "Visual representation of a user or entity with image and fallback",
  },
  {
    icon: MegaphoneIcon,
    title: "Badge",
    description:
      "Small status indicators or labels for highlighting information",
  },
  {
    icon: HomeIcon,
    title: "Breadcrumb",
    description:
      "Navigation aid showing the current page's location in hierarchy",
  },
  {
    icon: PointerIcon,
    title: "Button",
    description: "Clickable elements that trigger actions or navigation",
  },
  {
    icon: GroupIcon,
    title: "Button Group",
    description:
      "Collection of related buttons grouped together as a single unit",
  },
  {
    icon: CalendarIcon,
    title: "Calendar",
    description:
      "Date selector with month and year navigation for picking dates",
  },
  {
    icon: GridIcon,
    title: "Card",
    description:
      "Container for grouping related content with optional header and footer",
  },
  {
    icon: GalleryHorizontalIcon,
    title: "Carousel",
    description: "Slideshow component for cycling through content or images",
  },
  {
    icon: BarChartIcon,
    title: "Chart",
    description:
      "Data visualization components for displaying graphs and charts",
  },
  {
    icon: CheckSquareIcon,
    title: "Checkbox",
    description:
      "Input allowing users to select one or multiple options from a list",
  },
  {
    icon: ChevronDownIcon,
    title: "Collapsible",
    description:
      "Content section that can be expanded or collapsed by the user",
  },
  {
    icon: ChevronsUpDownIcon,
    title: "Combobox",
    description:
      "Searchable select input combining dropdown with text filtering",
  },
  {
    icon: CommandIcon,
    title: "Command",
    description: "Fast, composable command menu for keyboard-driven navigation",
  },
  {
    icon: MoreVerticalIcon,
    title: "Context Menu",
    description: "Menu that appears on right-click with contextual actions",
  },
  {
    icon: TablePropertiesIcon,
    title: "Data Table",
    description: "Feature-rich table with sorting, filtering, and pagination",
  },
  {
    icon: Calendar1Icon,
    title: "Date Picker",
    description: "Calendar-based input for selecting dates or date ranges",
  },
  {
    icon: AppWindowIcon,
    title: "Dialog",
    description:
      "Modal window that requires user interaction before continuing",
  },
  {
    icon: PanelLeftIcon,
    title: "Drawer",
    description:
      "Sliding panel that overlays content from the edge of the screen",
  },
  {
    icon: ListIcon,
    title: "Dropdown Menu",
    description: "Menu with a list of actions or links triggered by a button",
  },
  {
    icon: BrushCleaningIcon,
    title: "Empty",
    description: "Placeholder state when no content or data is available",
  },
  {
    icon: BlocksIcon,
    title: "Field",
    description: "Form field wrapper with label, input, and error message",
  },
  {
    icon: SendIcon,
    title: "Form",
    description: "Complete form system with validation and error handling",
  },
  {
    icon: BringToFrontIcon,
    title: "Hover Card",
    description: "Card that appears when hovering over a trigger element",
  },
  {
    icon: FormInputIcon,
    title: "Input",
    description: "Text input field for collecting user information",
  },
  {
    icon: UngroupIcon,
    title: "Input Group",
    description: "Input with attached addons, icons, or buttons",
  },
  {
    icon: RectangleEllipsisIcon,
    title: "Input OTP",
    description:
      "Specialized input for one-time password or verification codes",
  },
  {
    icon: BoxIcon,
    title: "Item",
    description: "Reusable list item component with consistent styling",
  },
  {
    icon: KeyboardIcon,
    title: "Kbd",
    description: "Keyboard key representation for displaying shortcuts",
  },
  {
    icon: TextIcon,
    title: "Label",
    description: "Text label for form inputs and interactive elements",
  },
  {
    icon: MapIcon,
    title: "Menubar",
    description: "Horizontal menu bar with dropdown submenus",
  },
  {
    icon: NavigationIcon,
    title: "Navigation Menu",
    description: "Accessible navigation menu with nested dropdown support",
  },
  {
    icon: ArrowLeftRightIcon,
    title: "Pagination",
    description: "Navigation controls for moving between pages of content",
  },
  {
    icon: EyeIcon,
    title: "Popover",
    description: "Floating content panel triggered by user interaction",
  },
  {
    icon: Loader2Icon,
    title: "Progress",
    description: "Visual indicator showing completion status of a task",
  },
  {
    icon: RadiusIcon,
    title: "Radio Group",
    description:
      "Group of radio buttons allowing single selection from options",
  },
  {
    icon: ScalingIcon,
    title: "Resizable",
    description: "Panels with draggable handles for adjusting size",
  },
  {
    icon: ScrollIcon,
    title: "Scroll Area",
    description: "Customizable scrollable container with styled scrollbars",
  },
  {
    icon: BoxSelectIcon,
    title: "Select",
    description: "Dropdown menu for selecting a value from a list of options",
  },
  {
    icon: MinusIcon,
    title: "Separator",
    description: "Visual divider for separating content or interface sections",
  },
  {
    icon: Layers2Icon,
    title: "Sheet",
    description: "Sliding panel overlay for displaying supplementary content",
  },
  {
    icon: BoneIcon,
    title: "Skeleton",
    description: "Loading placeholder showing the shape of upcoming content",
  },
  {
    icon: SlidersIcon,
    title: "Slider",
    description:
      "Input for selecting a value from a range using a draggable handle",
  },
  {
    icon: LaptopMinimalCheckIcon,
    title: "Sonner",
    description: "Toast notification system for displaying temporary messages",
  },
  {
    icon: LoaderIcon,
    title: "Spinner",
    description: "Loading indicator showing an ongoing process or action",
  },
  {
    icon: ToggleLeftIcon,
    title: "Switch",
    description: "Toggle control for binary on/off states",
  },
  {
    icon: TableIcon,
    title: "Table",
    description: "Organized data display in rows and columns",
  },
  {
    icon: BetweenHorizontalStartIcon,
    title: "Tabs",
    description: "Layered content sections accessible via tab navigation",
  },
  {
    icon: TextCursorIcon,
    title: "Textarea",
    description: "Multi-line text input for longer form content",
  },
  {
    icon: RectangleCircleIcon,
    title: "Toggle",
    description: "Two-state button for enabling or disabling options",
  },
  {
    icon: ToggleRightIcon,
    title: "Toggle Group",
    description: "Group of toggle buttons with single or multiple selection",
  },
  {
    icon: CaseLowerIcon,
    title: "Tooltip",
    description: "Small popup displaying helpful information on hover",
  },
];

// Divide into 3 groups equally
const groups = data.reduce<{ [key: number]: typeof data }>(
  (acc, item, index) => {
    const group = Math.floor(index / Math.ceil(data.length / 3));
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  },
  []
);

export const Patterns = () => (
  <div className="container mx-auto grid gap-8">
    <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
      <div className="grid gap-4">
        <h2 className="max-w-lg font-semibold text-3xl">
          Thousands of ready-to-use patterns
        </h2>
        <p className="max-w-lg text-balance text-lg text-muted-foreground">
          Browse through 1000+ production-ready patterns built with shadcn/ui.
          Copy, customize, and ship faster than ever.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/patterns">
          <span>Explore patterns</span>
          <ArrowRightIcon size={16} />
        </Link>
      </Button>
    </div>
    <div className="grid gap-4">
      {Object.values(groups).map((items, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: "required"
        <Marquee key={index}>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent direction={index === 1 ? 'right' : 'left'} pauseOnHover={false}>
            {items.map((item) => (
              <MarqueeItem key={item.title}>
                <div className="rounded-lg border bg-card p-6" key={item.title}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <item.icon className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      ))}
    </div>
  </div>
);
