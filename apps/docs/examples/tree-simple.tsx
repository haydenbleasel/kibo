'use client';

import { Tree, TreeContent, TreeItem, TreeLeaf, TreeTrigger } from '@repo/tree';

const Example = () => (
  <Tree className="w-48">
    <TreeItem defaultOpen>
      <TreeTrigger>Folder 1</TreeTrigger>
      <TreeContent>
        <TreeLeaf>File 1.txt</TreeLeaf>
        <TreeLeaf>File 2.txt</TreeLeaf>
        <TreeItem>
          <TreeTrigger>Subfolder</TreeTrigger>
          <TreeContent>
            <TreeLeaf>File 3.txt</TreeLeaf>
          </TreeContent>
        </TreeItem>
      </TreeContent>
    </TreeItem>
    <TreeLeaf>File 4.txt</TreeLeaf>
  </Tree>
);

export default Example;
