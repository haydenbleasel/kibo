"use client";

import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockItem,
  type CodeBlockProps,
} from "@repo/code-block";

type PreviewCodeProps = {
  code: string;
  language: string;
  filename: string;
};

export const PreviewCode = ({ code, language, filename }: PreviewCodeProps) => {
  const data: CodeBlockProps["data"] = [
    {
      language,
      filename,
      code,
    },
  ];

  return (
    <CodeBlock
      className="overflow-auto rounded-none border-none"
      data={data}
      defaultValue={data[0].language}
    >
      <div className="sticky top-0 z-1">
        <CodeBlockCopyButton className="absolute top-1 right-1.5" />
      </div>
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
};
