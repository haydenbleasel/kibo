'use client';

import { Tree, TreeContent, TreeItem, TreeLeaf, TreeTrigger } from '@repo/tree';
import {
  CodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  PackageIcon,
} from 'lucide-react';

const getFileIcon = (filename: string) => {
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'tsx':
    case 'ts':
    case 'js':
    case 'jsx':
      return <CodeIcon className="h-4 w-4 text-blue-500" />;
    case 'json':
      return <PackageIcon className="h-4 w-4 text-yellow-500" />;
    case 'md':
    case 'mdx':
      return <FileTextIcon className="h-4 w-4 text-green-500" />;
    case 'png':
    case 'jpg':
    case 'svg':
      return <ImageIcon className="h-4 w-4 text-purple-500" />;
    default:
      return <FileIcon className="h-4 w-4 text-gray-500" />;
  }
};

const Example = () => (
  <Tree className="w-80 rounded-lg border bg-background p-2">
    <TreeItem defaultOpen>
      <TreeTrigger icon={<FolderIcon className="h-4 w-4 text-blue-600" />}>
        my-app
      </TreeTrigger>
      <TreeContent>
        <TreeItem defaultOpen>
          <TreeTrigger icon={<FolderIcon className="h-4 w-4 text-blue-600" />}>
            src
          </TreeTrigger>
          <TreeContent>
            <TreeItem>
              <TreeTrigger
                icon={<FolderIcon className="h-4 w-4 text-blue-600" />}
              >
                components
              </TreeTrigger>
              <TreeContent>
                <TreeLeaf icon={getFileIcon('Header.tsx')}>Header.tsx</TreeLeaf>
                <TreeLeaf icon={getFileIcon('Footer.tsx')}>Footer.tsx</TreeLeaf>
                <TreeLeaf icon={getFileIcon('Sidebar.tsx')}>
                  Sidebar.tsx
                </TreeLeaf>
              </TreeContent>
            </TreeItem>
            <TreeItem>
              <TreeTrigger
                icon={<FolderIcon className="h-4 w-4 text-blue-600" />}
              >
                pages
              </TreeTrigger>
              <TreeContent>
                <TreeLeaf icon={getFileIcon('Home.tsx')}>Home.tsx</TreeLeaf>
                <TreeLeaf icon={getFileIcon('About.tsx')}>About.tsx</TreeLeaf>
                <TreeLeaf icon={getFileIcon('Contact.tsx')}>
                  Contact.tsx
                </TreeLeaf>
              </TreeContent>
            </TreeItem>
            <TreeItem>
              <TreeTrigger
                icon={<FolderIcon className="h-4 w-4 text-blue-600" />}
              >
                assets
              </TreeTrigger>
              <TreeContent>
                <TreeLeaf icon={getFileIcon('logo.svg')}>logo.svg</TreeLeaf>
                <TreeLeaf icon={getFileIcon('hero.png')}>hero.png</TreeLeaf>
                <TreeLeaf icon={getFileIcon('styles.css')}>styles.css</TreeLeaf>
              </TreeContent>
            </TreeItem>
            <TreeLeaf icon={getFileIcon('App.tsx')}>App.tsx</TreeLeaf>
            <TreeLeaf icon={getFileIcon('index.ts')}>index.ts</TreeLeaf>
          </TreeContent>
        </TreeItem>
        <TreeItem>
          <TreeTrigger icon={<FolderIcon className="h-4 w-4 text-blue-600" />}>
            public
          </TreeTrigger>
          <TreeContent>
            <TreeLeaf icon={getFileIcon('index.html')}>index.html</TreeLeaf>
            <TreeLeaf icon={getFileIcon('favicon.ico')}>favicon.ico</TreeLeaf>
          </TreeContent>
        </TreeItem>
        <TreeLeaf icon={getFileIcon('package.json')}>package.json</TreeLeaf>
        <TreeLeaf icon={getFileIcon('tsconfig.json')}>tsconfig.json</TreeLeaf>
        <TreeLeaf icon={getFileIcon('README.md')}>README.md</TreeLeaf>
      </TreeContent>
    </TreeItem>
  </Tree>
);

export default Example;
