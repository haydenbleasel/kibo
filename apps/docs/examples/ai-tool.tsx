'use client';

import { AIResponse } from '@repo/ai/response';
import {
  AITool,
  AIToolContent,
  AIToolHeader,
  AIToolParameters,
  AIToolResult,
  type AIToolStatus,
} from '@repo/ai/tool';

const toolCall: {
  name: string;
  description: string;
  status: AIToolStatus;
  parameters: Record<string, unknown>;
  result: string | undefined;
  error: string | undefined;
} = {
  name: 'database_query',
  description: 'Fetching user analytics data',
  status: 'completed',
  parameters: {
    query: 'SELECT COUNT(*) FROM users WHERE created_at >= ?',
    params: ['2024-01-01'],
    database: 'analytics',
  },
  result: `| User ID | Name | Email | Created At |
|---------|------|-------|------------|
| 1 | John Doe | john@example.com | 2024-01-15 |
| 2 | Jane Smith | jane@example.com | 2024-01-20 |
| 3 | Bob Wilson | bob@example.com | 2024-02-01 |
| 4 | Alice Brown | alice@example.com | 2024-02-10 |
| 5 | Charlie Davis | charlie@example.com | 2024-02-15 |`,
  error: undefined,
};

const Example = () => (
  <AITool key={toolCall.name}>
    <AIToolHeader
      description={toolCall.description}
      name={toolCall.name}
      status={toolCall.status}
    />
    <AIToolContent>
      <AIToolParameters parameters={toolCall.parameters} />
      {(toolCall.result || toolCall.error) && (
        <AIToolResult
          error={toolCall.error}
          result={<AIResponse>{toolCall.result}</AIResponse>}
        />
      )}
    </AIToolContent>
  </AITool>
);

export default Example;
