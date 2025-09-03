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
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TreeControlledExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [expandedIds] = useState<string[]>([
    "team",
    "engineering",
    "design",
    "product",
  ]);

  const handleClearSelection = () => {
    setSelectedIds([]);
  };

  const handleSelectAll = () => {
    const allIds = ["alice", "bob", "carol", "david", "eve", "frank"];
    setSelectedIds(allIds);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={handleSelectAll} size="sm" variant="outline">
          Select All Team Members
        </Button>
        <Button onClick={handleClearSelection} size="sm" variant="outline">
          Clear Selection
        </Button>
      </div>

      <TreeProvider
        defaultExpandedIds={expandedIds}
        multiSelect
        onSelectionChange={setSelectedIds}
        selectedIds={selectedIds}
      >
        <TreeView>
          <TreeNode isLast nodeId="team">
            <TreeNodeTrigger>
              <TreeExpander hasChildren />
              <TreeIcon hasChildren />
              <TreeLabel>Team</TreeLabel>
            </TreeNodeTrigger>
            <TreeNodeContent hasChildren>
              <TreeNode level={1} nodeId="engineering">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Engineering</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="alice">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Alice Johnson</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="bob">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Bob Smith</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode level={1} nodeId="design">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Design</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="carol">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Carol Williams</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="david">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>David Brown</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode isLast level={1} nodeId="product">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Product</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="eve">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Eve Davis</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="frank">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Frank Miller</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
            </TreeNodeContent>
          </TreeNode>
        </TreeView>
      </TreeProvider>

      {selectedIds.length > 0 && (
        <div className="text-muted-foreground text-sm">
          Selected: {selectedIds.join(", ")}
        </div>
      )}
    </div>
  );
}
