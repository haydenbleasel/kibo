'use client';

import { Announcement, AnnouncementTitle } from '@repo/announcement';
import { ArrowUpRightIcon } from 'lucide-react';

const Example = () => (
  <Announcement>
    <AnnouncementTitle>
      New feature added
      <ArrowUpRightIcon size={16} className="shrink-0 text-muted-foreground" />
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
