'use client';

import { Button } from '@repo/shadcn-ui/components/ui/button';
import { Tree, TreeContent, TreeItem, TreeLeaf, TreeTrigger } from '@repo/tree';
import { FileIcon, FolderIcon } from 'lucide-react';
import { useState } from 'react';

const Example = () => {
  const [componentsOpen, setComponentsOpen] = useState(false);
  const [utilsOpen, setUtilsOpen] = useState(false);
  const [srcOpen, setSrcOpen] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          onClick={() => setComponentsOpen(!componentsOpen)}
          size="sm"
          variant="outline"
        >
          {componentsOpen ? 'Close' : 'Open'} Components
        </Button>
        <Button
          onClick={() => setUtilsOpen(!utilsOpen)}
          size="sm"
          variant="outline"
        >
          {utilsOpen ? 'Close' : 'Open'} Utils
        </Button>
        <Button
          onClick={() => {
            setComponentsOpen(true);
            setUtilsOpen(true);
            setSrcOpen(true);
          }}
          size="sm"
          variant="outline"
        >
          Expand All
        </Button>
        <Button
          onClick={() => {
            setComponentsOpen(false);
            setUtilsOpen(false);
            setSrcOpen(false);
          }}
          size="sm"
          variant="outline"
        >
          Collapse All
        </Button>
      </div>

      <Tree className="w-64 rounded-lg border p-2">
        <TreeItem onOpenChange={setSrcOpen} open={srcOpen}>
          <TreeTrigger icon={<FolderIcon className="h-4 w-4" />}>
            src
          </TreeTrigger>
          <TreeContent>
            <TreeItem onOpenChange={setComponentsOpen} open={componentsOpen}>
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
                <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
                  Modal.tsx
                </TreeLeaf>
              </TreeContent>
            </TreeItem>
            <TreeItem onOpenChange={setUtilsOpen} open={utilsOpen}>
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
            <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
              index.ts
            </TreeLeaf>
          </TreeContent>
        </TreeItem>
        <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>
          package.json
        </TreeLeaf>
        <TreeLeaf icon={<FileIcon className="h-4 w-4" />}>README.md</TreeLeaf>
      </Tree>
    </div>
  );
};

export default Example;
