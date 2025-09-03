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
    code: `function calculateDiscount(price, percentage) {
  const discount = price * (percentage / 100); // [!code focus]
  return price - discount;
}

// Example usage
const finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // 80`,
  },
  {
    language: "ts",
    filename: "utils.ts",
    code: `function calculateDiscount(price: number, percentage: number): number {
  const discount = price * (percentage / 100); // [!code focus]
  return price - discount;
}

// Example usage
const finalPrice: number = calculateDiscount(100, 20);
console.log(finalPrice); // 80`,
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
