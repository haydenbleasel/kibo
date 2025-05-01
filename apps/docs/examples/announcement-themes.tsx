'use client';

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@repo/announcement';
import { ArrowUpRightIcon } from 'lucide-react';

const Example = () => (
  <>
    <Announcement themed className="bg-rose-100 text-rose-700">
      <AnnouncementTag>Error</AnnouncementTag>
      <AnnouncementTitle>
        Something went wrong
        <ArrowUpRightIcon size={16} className="shrink-0 opacity-70" />
      </AnnouncementTitle>
    </Announcement>

    <Announcement themed className="bg-emerald-100 text-emerald-700">
      <AnnouncementTag>Success</AnnouncementTag>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon size={16} className="shrink-0 opacity-70" />
      </AnnouncementTitle>
    </Announcement>

    <Announcement themed className="bg-orange-100 text-orange-700">
      <AnnouncementTag>Warning</AnnouncementTag>
      <AnnouncementTitle>
        Approaching your limit
        <ArrowUpRightIcon size={16} className="shrink-0 opacity-70" />
      </AnnouncementTitle>
    </Announcement>

    <Announcement themed className="bg-sky-100 text-sky-700">
      <AnnouncementTag>Info</AnnouncementTag>
      <AnnouncementTitle>
        Welcome to the platform
        <ArrowUpRightIcon size={16} className="shrink-0 opacity-70" />
      </AnnouncementTitle>
    </Announcement>
  </>
);

export default Example;
