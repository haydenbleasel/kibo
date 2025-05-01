'use client';

import { AIResponse } from '@repo/ai/response';
import { useEffect, useState } from 'react';

const tokens = [
  'Hello',
  ' World',
  '\n\n',
  'This',
  ' is',
  ' a',
  ' **',
  'markdown',
  '**',
  ' response',
  ' from',
  ' an',
  ' AI',
  ' model',
  '.',
  '\n\n',
  '```',
  'javascript',
  '\n',
  'const',
  ' greeting',
  ' = ',
  "'Hello, world!'",
  ';',
  '\n',
  'console',
  '.',
  'log',
  '(',
  'greeting',
  ')',
  ';',
  '\n',
  '```',
  '\n\n',
  "Here's",
  ' a',
  ' [',
  'link',
  '](',
  'https://example.com',
  ')',
  ' and',
  ' some',
  ' more',
  ' text',
  ' with',
  ' a',
  ' list',
  ':',
  '\n\n',
  '-',
  ' Item',
  ' one',
  '\n',
  '-',
  ' Item',
  ' two',
  '\n',
  '-',
  ' Item',
  ' three',
];

const Example = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let currentContent = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < tokens.length) {
        currentContent += tokens[index];
        setContent(currentContent);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <AIResponse>{content}</AIResponse>;
};

export default Example;
