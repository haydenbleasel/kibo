"use client";

import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
} from "@repo/stories";

const stories = [
  {
    id: 1,
    author: "Hayden Bleasel",
    avatar: "https://github.com/haydenbleasel.png",
    fallback: "HB",
  },
  {
    id: 2,
    author: "shadcn",
    avatar: "https://github.com/shadcn.png",
    fallback: "CN",
  },
  {
    id: 3,
    author: "Lee Robinson",
    avatar: "https://github.com/leerob.png",
    fallback: "LR",
  },
  {
    id: 4,
    author: "Serafim",
    avatar: "https://github.com/serafimcloud.png",
    fallback: "SC",
  },
];

const Example = () => (
  <div className="w-full max-w-4xl">
    <Stories>
      <StoriesContent className="justify-center">
        {stories.map((story) => (
          <Story className="aspect-square w-12 rounded-full p-0" key={story.id}>
            <StoryAuthor className="p-0">
              <span
                aria-hidden="true"
                className="inline-flex size-full rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5"
              >
                <span className="inline-flex size-full rounded-full bg-white p-0.5">
                  <StoryAuthorImage
                    className="size-full"
                    fallback={story.fallback}
                    src={story.avatar}
                  />
                </span>
              </span>
            </StoryAuthor>
          </Story>
        ))}
      </StoriesContent>
    </Stories>
  </div>
);

export default Example;
