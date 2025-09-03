"use client";

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

export default function TreeSimpleExample() {
  return (
    <TreeProvider>
      <TreeView>
        <TreeNode nodeId="documents">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Documents</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode level={1} nodeId="work">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Work</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="project-a">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Project A.pdf</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="project-b">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Project B.pdf</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode isLast level={1} nodeId="personal">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Personal</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="resume">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Resume.docx</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="cover-letter">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Cover Letter.docx</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode isLast nodeId="downloads">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Downloads</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode level={1} nodeId="installer">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>installer.exe</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode isLast level={1} nodeId="update">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>update.zip</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  );
}
