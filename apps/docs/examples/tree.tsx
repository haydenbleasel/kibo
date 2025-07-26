'use client';

import { Tree, TreeContent, TreeItem, TreeLeaf, TreeTrigger } from '@repo/tree';
import { FileIcon, FolderIcon } from 'lucide-react';

const Example = () => (
  <Tree className="w-64 rounded-lg border p-2">
    <TreeItem defaultOpen>
      <TreeTrigger icon={<FolderIcon className="h-4 w-4" />}>src</TreeTrigger>
      <TreeContent>
        <TreeItem>
          <TreeTrigger icon={<FolderIcon className="h-4 w-4" />}>
            components
          </TreeTrigger>
          <TreeContent>
            <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
              Button.tsx
            </TreeLeaf>
            <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
              Input.tsx
            </TreeLeaf>
            <TreeItem>
              <TreeTrigger icon={<FolderIcon className="h-4 w-4" />}>
                ui
              </TreeTrigger>
              <TreeContent>
                <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
                  Dialog.tsx
                </TreeLeaf>
                <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
                  Modal.tsx
                </TreeLeaf>
              </TreeContent>
            </TreeItem>
          </TreeContent>
        </TreeItem>
        <TreeItem>
          <TreeTrigger icon={<FolderIcon className="h-4 w-4" />}>
            utils
          </TreeTrigger>
          <TreeContent>
            <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
              helpers.ts
            </TreeLeaf>
            <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
              constants.ts
            </TreeLeaf>
          </TreeContent>
        </TreeItem>
        <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>index.ts</TreeLeaf>
      </TreeContent>
    </TreeItem>
    <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>package.json</TreeLeaf>
    <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>README.md</TreeLeaf>
  </Tree>
);

export default Example;
