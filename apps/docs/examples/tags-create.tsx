'use client';

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
} from '@repo/tags';
import { CheckIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const defaultTags = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'vuejs', label: 'Vue.js' },
  { id: 'angular', label: 'Angular' },
  { id: 'svelte', label: 'Svelte' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'python', label: 'Python' },
  { id: 'ruby', label: 'Ruby' },
  { id: 'java', label: 'Java' },
  { id: 'csharp', label: 'C#' },
  { id: 'php', label: 'PHP' },
  { id: 'go', label: 'Go' },
];

const Example = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [tags, setTags] =
    useState<{ id: string; label: string }[]>(defaultTags);

  const handleRemove = (value: string) => {
    if (!selected.includes(value)) {
      return;
    }

    console.log(`removed: ${value}`);
    setSelected((prev) => prev.filter((v) => v !== value));
  };

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      handleRemove(value);
      return;
    }

    console.log(`selected: ${value}`);
    setSelected((prev) => [...prev, value]);
  };

  const handleCreateTag = () => {
    console.log(`created: ${newTag}`);

    setTags((prev) => [
      ...prev,
      {
        id: newTag,
        label: newTag,
      },
    ]);
    setSelected((prev) => [...prev, newTag]);
    setNewTag('');
  };

  return (
    <Tags className="max-w-[300px]">
      <TagsTrigger>
        {selected.map((tag) => (
          <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
            {tags.find((t) => t.id === tag)?.label}
          </TagsValue>
        ))}
      </TagsTrigger>
      <TagsContent>
        <TagsInput placeholder="Search tag..." onValueChange={setNewTag} />
        <TagsList>
          <TagsEmpty>
            <button
              type="button"
              className="mx-auto flex cursor-pointer items-center gap-2"
              onClick={handleCreateTag}
            >
              <PlusIcon size={14} className="text-muted-foreground" />
              Create new tag: {newTag}
            </button>
          </TagsEmpty>
          <TagsGroup>
            {tags.map((tag) => (
              <TagsItem key={tag.id} value={tag.id} onSelect={handleSelect}>
                {tag.label}
                {selected.includes(tag.id) && (
                  <CheckIcon size={14} className="text-muted-foreground" />
                )}
              </TagsItem>
            ))}
          </TagsGroup>
        </TagsList>
      </TagsContent>
    </Tags>
  );
};

export default Example;
