"use client";

import type { BundledLanguage } from "@repo/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@repo/code-block";

const code = [
  {
    language: "js",
    filename: "utils.js",
    code: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity; // [!code --]
    const itemTotal = items[i].price * items[i].quantity; // [!code ++]
    total += itemTotal; // [!code ++]
  }
  return total;
}`,
  },
  {
    language: "ts",
    filename: "utils.ts",
    code: `interface Item {
  price: number;
  quantity: number;
}

function calculateTotal(items: Item[]): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity; // [!code --]
    const itemTotal = items[i].price * items[i].quantity; // [!code ++]
    total += itemTotal; // [!code ++]
  }
  return total;
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
        onCopy={() => console.log("Copied code to clipboard")}
        onError={() => console.error("Failed to copy code to clipboard")}
      />
    </CodeBlockHeader>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
);

export default Example;
