'use client';

import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from '@repo/ai/conversation';
import { AIMessage, AIMessageContent } from '@repo/ai/message';
import { useEffect, useState } from 'react';

const messages = [
  'Hello, how are you?',
  'I am good, thank you!',
  'What is your name?',
  'My name is John Doe.',
  'Nice to meet you, John!',
  'Likewise! How can I help you today?',
  'I have some questions about programming.',
  "I'd be happy to help with that! What would you like to know?",
  "What's the best way to learn JavaScript?",
  'I recommend starting with the basics and building small projects.',
  "That makes sense. Any specific resources you'd recommend?",
  'MDN Web Docs and freeCodeCamp are great places to start.',
  'Thanks for the suggestions! What about frameworks?',
  'React is a popular choice for beginners.',
  "I've heard of React. What makes it special?",
  'It has a large community and great documentation.',
  'That sounds promising. How long does it take to learn?',
  'It depends on your background, but a few months is typical.',
  'I have some Python experience. Will that help?',
  "Yes, that's a great foundation! Many concepts transfer over.",
  "That's encouraging. What should I build first?",
  'Start with a simple todo app or weather widget.',
  'Those sound like good practice projects.',
  'They help you learn the fundamentals while building something useful.',
  "I'll give it a try. Any other tips?",
  "Practice regularly and don't be afraid to make mistakes.",
  "That's good advice. Thanks for your help!",
  "You're welcome! Feel free to ask if you have more questions.",
  'I will. Have a great day!',
  'You too! Good luck with your learning journey!',
];

const Example = () => {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setVisibleMessages((prev) => [...prev, messages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AIConversation className="relative size-full rounded-lg border">
      <AIConversationContent>
        {visibleMessages.map((message, index) => (
          <AIMessage from={index % 2 === 0 ? 'user' : 'assistant'} key={index}>
            <AIMessageContent>{message}</AIMessageContent>
          </AIMessage>
        ))}
      </AIConversationContent>
      <AIConversationScrollButton />
    </AIConversation>
  );
};

export default Example;
