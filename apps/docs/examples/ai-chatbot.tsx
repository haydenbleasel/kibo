'use client';

import {
  AIInput,
  AIInputButton,
  AIInputModelSelect,
  AIInputModelSelectContent,
  AIInputModelSelectItem,
  AIInputModelSelectTrigger,
  AIInputModelSelectValue,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
  AIInputTools,
} from '@repo/ai/input';
import { AIMessage, AIMessageAvatar, AIMessageContent } from '@repo/ai/message';
import { AIResponse } from '@repo/ai/response';
import { GlobeIcon, MicIcon, PlusIcon, SendIcon } from 'lucide-react';
import Image from 'next/image';
import { type FormEventHandler, useState } from 'react';

const messages: {
  from: 'user' | 'assistant';
  content: string;
  avatar: string;
  name: string;
}[] = [
  {
    from: 'user',
    content: 'Can you explain how to use React hooks effectively?',
    avatar: 'https://github.com/haydenbleasel.png',
    name: 'Hayden Bleasel',
  },
  {
    from: 'assistant',
    content: `# React Hooks Best Practices

React hooks are a powerful feature that let you use state and other React features without writing classes. Here are some tips for using them effectively:

## Rules of Hooks

1. **Only call hooks at the top level** of your component or custom hooks
2. **Don't call hooks inside loops, conditions, or nested functions**

## Common Hooks

- **useState**: For local component state
- **useEffect**: For side effects like data fetching
- **useContext**: For consuming context
- **useReducer**: For complex state logic
- **useCallback**: For memoizing functions
- **useMemo**: For memoizing values

## Example of useState and useEffect

\`\`\`jsx
function ProfilePage({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // This runs after render and when userId changes
    fetchUser(userId).then(userData => {
      setUser(userData);
    });
  }, [userId]);
  
  return user ? <Profile user={user} /> : <Loading />;
}
\`\`\`

Would you like me to explain any specific hook in more detail?`,
    avatar: 'https://github.com/openai.png',
    name: 'OpenAI',
  },
  {
    from: 'user',
    content:
      'Yes, could you explain useCallback and useMemo in more detail? When should I use one over the other?',
    avatar: 'https://github.com/haydenbleasel.png',
    name: 'Hayden Bleasel',
  },
  {
    from: 'assistant',
    content: `## useCallback vs useMemo

Both hooks help with performance optimization, but they serve different purposes:

### useCallback

\`useCallback\` memoizes **functions** to prevent unnecessary re-renders of child components that receive functions as props.

\`\`\`jsx
// Without useCallback - a new function is created on every render
const handleClick = () => {
  console.log(count);
};

// With useCallback - the function is only recreated when dependencies change
const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
\`\`\`

### useMemo

\`useMemo\` memoizes **values** to avoid expensive recalculations on every render.

\`\`\`jsx
// Without useMemo - expensive calculation runs on every render
const sortedList = expensiveSort(items);

// With useMemo - calculation only runs when items change
const sortedList = useMemo(() => expensiveSort(items), [items]);
\`\`\`

### When to use which?

- Use **useCallback** when:
  - Passing callbacks to optimized child components that rely on reference equality
  - Working with event handlers that you pass to child components

- Use **useMemo** when:
  - You have computationally expensive calculations
  - You want to avoid recreating objects that are used as dependencies for other hooks

### Performance Note

Don't overuse these hooks! They come with their own overhead. Only use them when you have identified a genuine performance issue.`,
    avatar: 'https://github.com/openai.png',
    name: 'OpenAI',
  },
];

const models = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'openai.com' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'openai.com' },
  { id: 'claude-2', name: 'Claude 2', provider: 'anthropic.com' },
  { id: 'claude-instant', name: 'Claude Instant', provider: 'anthropic.com' },
  { id: 'palm-2', name: 'PaLM 2', provider: 'google.com' },
  { id: 'llama-2-70b', name: 'Llama 2 70B', provider: 'meta.com' },
  { id: 'llama-2-13b', name: 'Llama 2 13B', provider: 'meta.com' },
  { id: 'cohere-command', name: 'Command', provider: 'cohere.com' },
  { id: 'mistral-7b', name: 'Mistral 7B', provider: 'mistral.ai' },
];

const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message');
    console.log('Submitted message:', message);
  };

  return (
    <div className="relative size-full">
      <div className="size-full overflow-y-auto p-4 pb-36 sm:p-8">
        {messages.map(({ content, ...message }, index) => (
          <AIMessage key={index} from={message.from}>
            <AIMessageContent>
              <AIResponse>{content}</AIResponse>
            </AIMessageContent>
            <AIMessageAvatar src={message.avatar} name={message.name} />
          </AIMessage>
        ))}
      </div>
      <AIInput
        onSubmit={handleSubmit}
        className="absolute right-8 bottom-8 left-8 w-auto"
      >
        <AIInputTextarea />
        <AIInputToolbar>
          <AIInputTools>
            <AIInputButton>
              <PlusIcon size={16} />
            </AIInputButton>
            <AIInputButton>
              <MicIcon size={16} />
            </AIInputButton>
            <AIInputButton>
              <GlobeIcon size={16} />
              <span>Search</span>
            </AIInputButton>
            <AIInputModelSelect value={model} onValueChange={setModel}>
              <AIInputModelSelectTrigger>
                <AIInputModelSelectValue />
              </AIInputModelSelectTrigger>
              <AIInputModelSelectContent>
                {models.map((model) => (
                  <AIInputModelSelectItem key={model.id} value={model.id}>
                    <Image
                      src={`https://img.logo.dev/${model.provider}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
                      alt={model.provider}
                      className="inline-flex size-4"
                      width={16}
                      height={16}
                      unoptimized
                    />
                    {model.name}
                  </AIInputModelSelectItem>
                ))}
              </AIInputModelSelectContent>
            </AIInputModelSelect>
          </AIInputTools>
          <AIInputSubmit>
            <SendIcon size={16} />
          </AIInputSubmit>
        </AIInputToolbar>
      </AIInput>
    </div>
  );
};

export default Example;
