"use client";

import { Announcement, AnnouncementTitle } from "@repo/announcement";
import { ArrowUpRightIcon } from "lucide-react";

const Example = () => (
  <Announcement>
    <AnnouncementTitle>
      New feature added
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
