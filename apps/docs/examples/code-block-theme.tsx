'use client';

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from '@repo/code-block';
import type { BundledLanguage } from 'shiki';

const code = [
  {
    language: 'jsx',
    filename: 'MyComponent.jsx',
    code: `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`,
  },
  {
    language: 'tsx',
    filename: 'MyComponent.tsx',
    code: `function MyComponent(props: { name: string }) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`,
  },
];

const Example = () => (
  <CodeBlock data={code} defaultValue={code[0].language}>
    <CodeBlockHeader>
      <CodeBlockFiles>
        {(item) => (
          <CodeBlockFilename key={item.language} value={item.language}>
            {item.filename}
          </CodeBlockFilename>
        )}
      </CodeBlockFiles>
      <CodeBlockSelect>
        <CodeBlockSelectTrigger>
          <CodeBlockSelectValue />
        </CodeBlockSelectTrigger>
        <CodeBlockSelectContent>
          {(item) => (
            <CodeBlockSelectItem key={item.language} value={item.language}>
              {item.language}
            </CodeBlockSelectItem>
          )}
        </CodeBlockSelectContent>
      </CodeBlockSelect>
      <CodeBlockCopyButton
        onCopy={() => console.log('Copied code to clipboard')}
        onError={() => console.error('Failed to copy code to clipboard')}
      />
    </CodeBlockHeader>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockContent
          key={item.language}
          value={item.language}
          language={item.language as BundledLanguage}
          themes={{
            light: 'github-light',
            dark: 'github-dark-default',
          }}
        >
          {item.code}
        </CodeBlockContent>
      )}
    </CodeBlockBody>
  </CodeBlock>
);

export default Example;
