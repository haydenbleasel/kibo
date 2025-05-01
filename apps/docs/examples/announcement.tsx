'use client';

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@repo/announcement';
import { ArrowUpRightIcon } from 'lucide-react';

const Example = () => (
  <div className="flex size-full items-center justify-center gap-4 bg-secondary">
    <Announcement>
      <AnnouncementTag>Latest update</AnnouncementTag>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon
          size={16}
          className="shrink-0 text-muted-foreground"
        />
      </AnnouncementTitle>
    </Announcement>
  </div>
);

export default Example;
