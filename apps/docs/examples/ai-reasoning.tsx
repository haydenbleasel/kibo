'use client';

import {
  AIReasoning,
  AIReasoningContent,
  AIReasoningTrigger,
} from '@repo/ai/reasoning';
import { useCallback, useEffect, useState } from 'react';

const reasoningSteps = [
  'Let me think about this problem step by step.',
  '\n\nFirst, I need to understand what the user is asking for.',
  '\n\nThey want a reasoning component that opens automatically when streaming begins and closes when streaming finishes. The component should be composable and follow existing patterns in the codebase.',
  '\n\nThis seems like a collapsible component with state management would be the right approach.',
  '\n\nI should create a component that uses a controlled/uncontrolled pattern for flexibility. It needs to be aware of streaming state and handle auto-opening and closing based on that state. Most importantly, it should provide a smooth and intuitive user experience.',
  "\n\nThe component should be similar to how ChatGPT shows reasoning, with a clean and professional appearance that helps users understand the AI's thought process.",
].join('');

const Example = () => {
  const [content, setContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [tokens, setTokens] = useState<string[]>([]);

  // Function to chunk text into fake tokens of 3-4 characters
  const chunkIntoTokens = useCallback((text: string): string[] => {
    const tokens: string[] = [];
    let i = 0;
    while (i < text.length) {
      const chunkSize = Math.floor(Math.random() * 2) + 3; // Random size between 3-4
      tokens.push(text.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return tokens;
  }, []);

  useEffect(() => {
    const tokenizedSteps = chunkIntoTokens(reasoningSteps);
    setTokens(tokenizedSteps);
    setContent('');
    setCurrentTokenIndex(0);
    setIsStreaming(true);
  }, [chunkIntoTokens]);

  useEffect(() => {
    if (!isStreaming || currentTokenIndex >= tokens.length) {
      if (isStreaming) {
        setIsStreaming(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setContent((prev) => prev + tokens[currentTokenIndex]);
      setCurrentTokenIndex((prev) => prev + 1);
    }, 25); // Faster interval since we're streaming smaller chunks

    return () => clearTimeout(timer);
  }, [isStreaming, currentTokenIndex, tokens]);

  return (
    <div className="w-full p-4">
      <AIReasoning className="w-full" isStreaming={isStreaming}>
        <AIReasoningTrigger />
        <AIReasoningContent>{content}</AIReasoningContent>
      </AIReasoning>
    </div>
  );
};

export default Example;
