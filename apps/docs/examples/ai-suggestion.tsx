'use client';

import { AISuggestion, AISuggestions } from '@repo/ai/suggestion';

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

const Example = () => {
  const handleSuggestionClick = (suggestion: string) => {
    console.log('Selected suggestion:', suggestion);
  };

  return (
    <AISuggestions>
      {suggestions.map((suggestion) => (
        <AISuggestion
          key={suggestion}
          suggestion={suggestion}
          onClick={handleSuggestionClick}
        />
      ))}
    </AISuggestions>
  );
};

export default Example;
