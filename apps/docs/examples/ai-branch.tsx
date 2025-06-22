'use client';

import {
  AIBranch,
  AIBranchMessages,
  AIBranchNext,
  AIBranchPage,
  AIBranchPrevious,
  AIBranchSelector,
} from '@repo/ai/branch';
import { AIMessage, AIMessageAvatar, AIMessageContent } from '@repo/ai/message';

const userMessages = [
  {
    id: 1,
    content: 'What are the key strategies for optimizing React performance?',
  },
  {
    id: 2,
    content: 'How can I improve the performance of my React application?',
  },
  {
    id: 3,
    content: 'What performance optimization techniques should I use in React?',
  },
];

const assistantMessages = [
  {
    id: 1,
    content:
      "Here's the first response to your question. This approach focuses on performance optimization.",
  },
  {
    id: 2,
    content:
      "Here's an alternative response. This approach emphasizes code readability and maintainability over pure performance.",
  },
  {
    id: 3,
    content:
      "And here's a third option. This balanced approach considers both performance and maintainability, making it suitable for most use cases.",
  },
];

const Example = () => {
  const handleBranchChange = (branchIndex: number) => {
    console.log('Branch changed to:', branchIndex);
  };

  return (
    <div>
      <AIBranch defaultBranch={0} onBranchChange={handleBranchChange}>
        <AIBranchMessages>
          {userMessages.map((message) => (
            <AIMessage from="user" key={message.id}>
              <AIMessageContent>{message.content}</AIMessageContent>
              <AIMessageAvatar
                name="Hayden Bleasel"
                src="https://github.com/haydenbleasel.png"
              />
            </AIMessage>
          ))}
        </AIBranchMessages>
        <AIBranchSelector from="user">
          <AIBranchPrevious />
          <AIBranchPage />
          <AIBranchNext />
        </AIBranchSelector>
      </AIBranch>

      <AIBranch defaultBranch={0} onBranchChange={handleBranchChange}>
        <AIBranchMessages>
          {assistantMessages.map((message) => (
            <AIMessage from="assistant" key={message.id}>
              <AIMessageContent>{message.content}</AIMessageContent>
              <AIMessageAvatar name="AI" src="https://github.com/openai.png" />
            </AIMessage>
          ))}
        </AIBranchMessages>
        <AIBranchSelector from="assistant">
          <AIBranchPrevious />
          <AIBranchPage />
          <AIBranchNext />
        </AIBranchSelector>
      </AIBranch>
    </div>
  );
};

export default Example;
