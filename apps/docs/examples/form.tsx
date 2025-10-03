"use client";

import {
  Choicebox,
  ChoiceboxIndicator,
  ChoiceboxItem,
  ChoiceboxItemDescription,
  ChoiceboxItemHeader,
  ChoiceboxItemTitle,
} from "@repo/choicebox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@repo/combobox";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@repo/dropzone";
import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "@repo/mini-calendar";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import { Label } from "@repo/shadcn-ui/components/ui/label";
import { Textarea } from "@repo/shadcn-ui/components/ui/textarea";
import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@repo/tags";
import {
  CalendarIcon,
  ImageIcon,
  InfoIcon,
  MapPinIcon,
  TagIcon,
  UsersIcon,
} from "lucide-react";
import { type FormEventHandler, useState } from "react";
import { toast } from "sonner";

const eventTypes = [
  {
    value: "conference",
    label: "Conference",
    description: "Professional gathering with speakers and networking",
  },
  {
    value: "workshop",
    label: "Workshop",
    description: "Hands-on learning experience with practical activities",
  },
  {
    value: "meetup",
    label: "Meetup",
    description: "Casual gathering for like-minded individuals",
  },
  {
    value: "webinar",
    label: "Webinar",
    description: "Online presentation or seminar via video conference",
  },
];

const venues = [
  { value: "convention-center", label: "Downtown Convention Center" },
  { value: "hotel-ballroom", label: "Grand Hotel Ballroom" },
  { value: "university-hall", label: "University Main Hall" },
  { value: "co-working-space", label: "Tech Hub Co-working Space" },
  { value: "online", label: "Online/Virtual" },
];

const availableTags = [
  "Technology",
  "Business",
  "Marketing",
  "Design",
  "Development",
  "AI/ML",
  "Startup",
  "Networking",
  "Education",
  "Innovation",
  "Remote Work",
  "Leadership",
];

const Example = () => {
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [files, setFiles] = useState<File[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    toast.success("Event created successfully", {
      description: `${eventType} event created for ${selectedDate?.toLocaleDateString()} at ${venue}`,
    });
  };

  return (
    <div className="not-prose mx-auto max-w-[530px] p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 font-semibold text-3xl tracking-tight">
          Create Your Event
        </h1>
        <p className="text-balance text-muted-foreground">
          Fill out the form below to create and customize your upcoming event
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <InfoIcon className="size-5" />
            Basic Information
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input
                id="event-name"
                placeholder="Enter your event name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer</Label>
              <Input
                id="organizer"
                placeholder="Your name or organization"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your event in detail..."
              rows={3}
            />
          </div>
        </div>

        {/* Event Type Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <UsersIcon className="size-5" />
            Event Type
          </h2>
          <Choicebox onValueChange={setEventType} value={eventType}>
            {eventTypes.map((type) => (
              <ChoiceboxItem key={type.value} value={type.value}>
                <ChoiceboxItemHeader>
                  <ChoiceboxItemTitle>{type.label}</ChoiceboxItemTitle>
                  <ChoiceboxItemDescription>
                    {type.description}
                  </ChoiceboxItemDescription>
                </ChoiceboxItemHeader>
                <ChoiceboxIndicator />
              </ChoiceboxItem>
            ))}
          </Choicebox>
        </div>

        {/* Venue Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <MapPinIcon className="size-5" />
            Venue
          </h2>
          <Combobox
            data={venues}
            onValueChange={setVenue}
            type="venue"
            value={venue}
          >
            <ComboboxTrigger className="w-full" />
            <ComboboxContent>
              <ComboboxInput />
              <ComboboxList>
                <ComboboxEmpty />
                <ComboboxGroup>
                  {venues.map((venue) => (
                    <ComboboxItem key={venue.value} value={venue.value}>
                      {venue.label}
                    </ComboboxItem>
                  ))}
                </ComboboxGroup>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <CalendarIcon className="size-5" />
            Select Date
          </h2>
          <MiniCalendar
            className="w-fit"
            days={7}
            onValueChange={setSelectedDate}
            value={selectedDate}
          >
            <MiniCalendarNavigation direction="prev" />
            <MiniCalendarDays>
              {(date) => (
                <MiniCalendarDay date={date} key={date.toISOString()} />
              )}
            </MiniCalendarDays>
            <MiniCalendarNavigation direction="next" />
          </MiniCalendar>
        </div>

        {/* Tags Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <TagIcon className="size-5" />
            Event Tags
          </h2>
          <Tags>
            <TagsTrigger>
              {selectedTags.map((tag) => (
                <TagsValue key={tag} onRemove={() => handleTagRemove(tag)}>
                  {tag}
                </TagsValue>
              ))}
            </TagsTrigger>
            <TagsContent>
              <TagsInput placeholder="Search tags..." />
              <TagsList>
                <TagsEmpty>No tags found.</TagsEmpty>
                <TagsGroup>
                  {availableTags
                    .filter((tag) => !selectedTags.includes(tag))
                    .map((tag) => (
                      <TagsItem key={tag} onSelect={() => handleTagSelect(tag)}>
                        {tag}
                      </TagsItem>
                    ))}
                </TagsGroup>
              </TagsList>
            </TagsContent>
          </Tags>
        </div>

        {/* File Upload */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <ImageIcon className="size-5" />
            Event Images
          </h2>
          <Dropzone
            accept={{
              "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            }}
            maxFiles={5}
            maxSize={5 * 1024 * 1024} // 5MB
            onDrop={(acceptedFiles) => setFiles(acceptedFiles)}
          >
            <DropzoneEmptyState />
            <DropzoneContent />
          </Dropzone>
          {files.length > 0 && (
            <div className="text-muted-foreground text-sm">
              {files.length} file{files.length > 1 ? "s" : ""} selected
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit">Create Event</Button>
        </div>
      </form>
    </div>
  );
};

export default Example;
