"use client";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@repo/announcement";
import { ArrowUpRightIcon } from "lucide-react";

const Example = () => (
  <>
    <Announcement
      className="bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100"
      themed
    >
      <AnnouncementTag>Error</AnnouncementTag>
      <AnnouncementTitle>
        Something went wrong
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100"
      themed
    >
      <AnnouncementTag>Success</AnnouncementTag>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100"
      themed
    >
      <AnnouncementTag>Warning</AnnouncementTag>
      <AnnouncementTitle>
        Approaching your limit
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100"
      themed
    >
      <AnnouncementTag>Info</AnnouncementTag>
      <AnnouncementTitle>
        Welcome to the platform
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>
  </>
);

export default Example;
