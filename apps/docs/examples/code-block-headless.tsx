'use client';

import { CodeBlock, CodeBlockBody, CodeBlockContent } from '@repo/code-block';
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
    <CodeBlockBody>
      {(item) => (
        <CodeBlockContent
          key={item.language}
          value={item.language}
          language={item.language as BundledLanguage}
        >
          {item.code}
        </CodeBlockContent>
      )}
    </CodeBlockBody>
  </CodeBlock>
);

export default Example;
