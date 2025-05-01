'use client';

import { AIResponse } from '@repo/ai/response';
import { useEffect, useState } from 'react';

const Example = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Simulate a streaming response
    const fullResponse =
      "# Hello World\n\nThis is a **markdown** response from an AI model.\n\n```javascript\nconst greeting = 'Hello, world!';\nconsole.log(greeting);\n```\n\nHere's a [link](https://example.com) and some more text with a list:\n\n- Item one\n- Item two\n- Item three";
    let currentContent = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullResponse.length) {
        currentContent += fullResponse[index];
        setContent(currentContent);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <AIResponse>{content}</AIResponse>;
};

export default Example;
