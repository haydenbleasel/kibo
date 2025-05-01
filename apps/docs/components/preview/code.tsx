'use client';

import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
  type CodeBlockProps,
} from '@repo/code-block';

type PreviewCodeProps = {
  code: string;
  language: string;
  filename: string;
};

export const PreviewCode = ({ code, language, filename }: PreviewCodeProps) => {
  const data: CodeBlockProps['data'] = [
    {
      language,
      filename,
      code,
    },
  ];

  return (
    <CodeBlock
      data={data}
      defaultValue={data[0].language}
      className="overflow-auto rounded-none border-none"
    >
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
