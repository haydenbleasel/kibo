"use client";

import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryImage,
  StoryOverlay,
  StoryTitle,
} from "@repo/stories";

const stories = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    fallback: "AJ",
    preview:
      "https://images.unsplash.com/photo-1753731683731-1032f9457b02?w=1636&fit=crop",
    title: "Mountain Adventure",
  },
  {
    id: 2,
    author: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    fallback: "SC",
    preview:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=533&fit=crop",
    title: "Ocean Waves",
  },
  {
    id: 3,
    author: "Mike Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    fallback: "MR",
    preview:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=533&fit=crop",
    title: "Forest Trail",
  },
  {
    id: 4,
    author: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    fallback: "EW",
    preview:
      "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=533&fit=crop",
    title: "City Lights",
  },
  {
    id: 5,
    author: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    fallback: "DK",
    preview:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&fit=crop",
    title: "Desert Road",
  },
];

const Example = () => (
  <Stories>
    <StoriesContent>
      {stories.map((story) => (
        <Story className="aspect-[3/4] w-[200px]" key={story.id}>
          <StoryImage alt={story.title} src={story.preview} />
          <StoryOverlay side="top" />
          <StoryOverlay side="bottom" />
          <StoryTitle className="truncate font-medium text-sm">
            {story.title}
          </StoryTitle>
          <StoryAuthor>
            <StoryAuthorImage
              fallback={story.fallback}
              name={story.author}
              src={story.avatar}
            />
            <StoryAuthorName>{story.author}</StoryAuthorName>
          </StoryAuthor>
        </Story>
      ))}
    </StoriesContent>
  </Stories>
);

export default Example;
