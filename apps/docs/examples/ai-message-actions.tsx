'use client';

import { 
  AIMessage, 
  AIMessageAvatar, 
  AIMessageContent,
  AIMessageActions
} from '@repo/ai/message';
import { HeartIcon, MessageSquareIcon, StarIcon } from 'lucide-react';
import { toast } from 'sonner';

const messages: {
  from: 'user' | 'assistant';
  content: string;
  avatar: string;
  name: string;
}[] = [
  {
    from: 'user',
    content: 'Hello, can you help me understand React hooks?',
    avatar: 'https://github.com/haydenbleasel.png',
    name: 'Hayden Bleasel',
  },
  {
    from: 'assistant',
    content: 'Of course! React hooks are functions that let you use state and other React features in functional components. The most common hooks are useState for managing component state and useEffect for side effects like data fetching.',
    avatar: 'https://github.com/openai.png',
    name: 'OpenAI',
  },
];

const Example = () => (
  <div className="space-y-4">
    {messages.map(({ content, ...message }, index) => (
      <AIMessage from={message.from} key={index}>
        <AIMessageContent>
          {content}
          <AIMessageActions
            message={content}
            actions={[
              {
                type: 'copy',
                handler: async (msg) => {
                  if (msg && navigator.clipboard) {
                    await navigator.clipboard.writeText(msg);
                    toast.success('Message copied to clipboard');
                  }
                }
              },
              ...(message.from === 'assistant' ? [
                {
                  type: 'like' as const,
                  handler: () => { toast.success('Message liked'); }
                },
                {
                  type: 'dislike' as const,
                  handler: () => { toast.success('Message disliked'); }
                },
                {
                  type: 'retry' as const,
                  handler: () => { toast.success('Regenerating response...'); }
                }
              ] : []),
              {
                type: 'custom' as const,
                icon: <StarIcon />,
                label: 'Bookmark message',
                handler: () => { toast.success('Message bookmarked'); }
              }
            ]}
            display="hover"
            position="bottom"
            align="right"
          />
        </AIMessageContent>
        <AIMessageAvatar name={message.name} src={message.avatar} />
      </AIMessage>
    ))}
  </div>
);

export default Example;