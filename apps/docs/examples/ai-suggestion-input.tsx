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
import { AISuggestion, AISuggestions } from '@repo/ai/suggestion';
import { GlobeIcon, MicIcon, PlusIcon, SendIcon } from 'lucide-react';
import { type FormEventHandler, useState } from 'react';

const suggestions = [
  'What are the latest trends in AI?',
  'How does machine learning work?',
  'Explain quantum computing',
  'Best practices for React development',
  'Tell me about TypeScript benefits',
  'How to optimize database queries?',
  'What is the difference between SQL and NoSQL?',
  'Explain cloud computing basics',
];

const models = [
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  { id: 'claude-2', name: 'Claude 2' },
  { id: 'claude-instant', name: 'Claude Instant' },
  { id: 'palm-2', name: 'PaLM 2' },
  { id: 'llama-2-70b', name: 'Llama 2 70B' },
  { id: 'llama-2-13b', name: 'Llama 2 13B' },
  { id: 'cohere-command', name: 'Command' },
  { id: 'mistral-7b', name: 'Mistral 7B' },
];

const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);
  const [text, setText] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message');
    console.log('Submitted message:', message);
  };

  return (
    <div className="grid gap-4">
      <AISuggestions>
        {suggestions.map((suggestion) => (
          <AISuggestion
            key={suggestion}
            onClick={() => setText(suggestion)}
            suggestion={suggestion}
          />
        ))}
      </AISuggestions>
      <AIInput onSubmit={handleSubmit}>
        <AIInputTextarea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
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
            <AIInputModelSelect onValueChange={setModel} value={model}>
              <AIInputModelSelectTrigger>
                <AIInputModelSelectValue />
              </AIInputModelSelectTrigger>
              <AIInputModelSelectContent>
                {models.map((model) => (
                  <AIInputModelSelectItem key={model.id} value={model.id}>
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
