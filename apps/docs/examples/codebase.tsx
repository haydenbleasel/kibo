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
  type CodeBlockProps,
} from "@repo/code-block";
import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@repo/tree";
import { FileCode, FileJson, FileText, FileType } from "lucide-react";
import { useState } from "react";

type FileContent = {
  name: string;
  language: string;
  code: string;
};

const fileContents: Record<string, FileContent> = {
  "button.tsx": {
    name: "button.tsx",
    language: "tsx",
    code: `import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };`,
  },
  "utils.ts": {
    name: "utils.ts",
    language: "typescript",
    code: `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function absoluteUrl(path: string) {
  return \`\${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}\${path}\`;
}`,
  },
  "package.json": {
    name: "package.json",
    language: "json",
    code: `{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.263.1",
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}`,
  },
  "page.tsx": {
    name: "page.tsx",
    language: "tsx",
    code: `import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to My App</CardTitle>
          <CardDescription>
            Get started by editing this page in app/page.tsx
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This is a sample application built with Next.js and shadcn/ui.
          </p>
          <div className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`,
  },
  "globals.css": {
    name: "globals.css",
    language: "css",
    code: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}`,
  },
  "README.md": {
    name: "README.md",
    language: "markdown",
    code: `# My App

A modern web application built with Next.js and React.

## Getting Started

First, install the dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui component library
- 📝 TypeScript for type safety
- 🎯 ESLint for code quality

## Project Structure

\`\`\`
├── app/           # Next.js app directory
├── components/    # React components
│   └── ui/       # UI components
├── lib/          # Utility functions
└── public/       # Static assets
\`\`\`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)`,
  },
};

export default function CodebaseExample() {
  const [selectedFile, setSelectedFile] = useState<string>("button.tsx");

  // Convert fileContents to the format expected by CodeBlock
  const codeData: CodeBlockProps["data"] = Object.entries(fileContents).map(
    ([id, content]) => ({
      ...content,
      id,
      filename: content.name,
    })
  );

  const handleFileSelect = (fileId: string) => {
    if (fileContents[fileId]) {
      setSelectedFile(fileId);
    }
  };

  return (
    <div className="grid size-full grid-cols-[300px_1fr] divide-x overflow-hidden">
      {/* File Explorer */}
      <div className="size-full overflow-y-auto">
        <TreeProvider
          defaultExpandedIds={["src", "components", "ui", "app"]}
          onSelectionChange={(ids) => {
            if (ids.length > 0) {
              handleFileSelect(ids[0]);
            }
          }}
          selectedIds={[selectedFile]}
        >
          <TreeView>
            <TreeNode nodeId="src">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>src</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={1} nodeId="components">
                  <TreeNodeTrigger>
                    <TreeExpander hasChildren />
                    <TreeIcon hasChildren />
                    <TreeLabel>components</TreeLabel>
                  </TreeNodeTrigger>
                  <TreeNodeContent hasChildren>
                    <TreeNode isLast level={2} nodeId="ui">
                      <TreeNodeTrigger>
                        <TreeExpander hasChildren />
                        <TreeIcon hasChildren />
                        <TreeLabel>ui</TreeLabel>
                      </TreeNodeTrigger>
                      <TreeNodeContent hasChildren>
                        <TreeNode isLast level={3} nodeId="button.tsx">
                          <TreeNodeTrigger>
                            <TreeExpander />
                            <TreeIcon icon={<FileCode className="h-4 w-4" />} />
                            <TreeLabel>button.tsx</TreeLabel>
                          </TreeNodeTrigger>
                        </TreeNode>
                      </TreeNodeContent>
                    </TreeNode>
                  </TreeNodeContent>
                </TreeNode>
                <TreeNode level={1} nodeId="lib">
                  <TreeNodeTrigger>
                    <TreeExpander hasChildren />
                    <TreeIcon hasChildren />
                    <TreeLabel>lib</TreeLabel>
                  </TreeNodeTrigger>
                  <TreeNodeContent hasChildren>
                    <TreeNode isLast level={2} nodeId="utils.ts">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<FileType className="h-4 w-4" />} />
                        <TreeLabel>utils.ts</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  </TreeNodeContent>
                </TreeNode>
                <TreeNode isLast level={1} nodeId="app">
                  <TreeNodeTrigger>
                    <TreeExpander hasChildren />
                    <TreeIcon hasChildren />
                    <TreeLabel>app</TreeLabel>
                  </TreeNodeTrigger>
                  <TreeNodeContent hasChildren>
                    <TreeNode level={2} nodeId="page.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<FileCode className="h-4 w-4" />} />
                        <TreeLabel>page.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                    <TreeNode isLast level={2} nodeId="globals.css">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<FileText className="h-4 w-4" />} />
                        <TreeLabel>globals.css</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  </TreeNodeContent>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode nodeId="package.json">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon icon={<FileJson className="h-4 w-4" />} />
                <TreeLabel>package.json</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode isLast nodeId="README.md">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon icon={<FileText className="h-4 w-4" />} />
                <TreeLabel>README.md</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeView>
        </TreeProvider>
      </div>

      {/* Code Viewer */}
      <CodeBlock
        className="size-full overflow-y-auto rounded-none border-none"
        data={codeData}
        onValueChange={setSelectedFile}
        value={selectedFile}
      >
        <CodeBlockHeader>
          <CodeBlockFiles>
            {(item) => (
              <CodeBlockFilename key={item.filename} value={item.filename}>
                {item.filename}
              </CodeBlockFilename>
            )}
          </CodeBlockFiles>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody className="h-[calc(100%-3rem)]">
          {(item) => (
            <CodeBlockItem key={item.filename} value={item.filename}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    </div>
  );
}
