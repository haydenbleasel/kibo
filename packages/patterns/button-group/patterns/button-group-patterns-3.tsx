"use client";

import { CopyIcon, DownloadIcon, Share2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const title = "Loading States";

const Example = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setLoading(action);
    setTimeout(() => setLoading(null), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={loading === "copy"}
          onClick={() => handleAction("copy")}
          size="sm"
          variant="outline"
        >
          <CopyIcon />
          {loading === "copy" ? "Copying..." : "Copy"}
        </Button>
        <Button
          disabled={loading === "download"}
          onClick={() => handleAction("download")}
          size="sm"
          variant="outline"
        >
          <DownloadIcon />
          {loading === "download" ? "Downloading..." : "Download"}
        </Button>
        <Button
          disabled={loading === "share"}
          onClick={() => handleAction("share")}
          size="sm"
          variant="outline"
        >
          <Share2Icon />
          {loading === "share" ? "Sharing..." : "Share"}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          disabled={loading !== null}
          onClick={() => handleAction("action1")}
          size="sm"
          variant="outline"
        >
          Action 1
        </Button>
        <Button
          disabled={loading !== null}
          onClick={() => handleAction("action2")}
          size="sm"
          variant="outline"
        >
          Action 2
        </Button>
        <Button
          disabled={loading !== null}
          onClick={() => handleAction("action3")}
          size="sm"
          variant="outline"
        >
          Action 3
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
