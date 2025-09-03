"use client";

import { Pill, PillAvatar, PillAvatarGroup } from "@repo/pill";

const Example = () => (
  <Pill>
    <PillAvatarGroup>
      <PillAvatar
        fallback="HB"
        src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
      />
      <PillAvatar
        fallback="SC"
        src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
      />
      <PillAvatar
        fallback="LR"
        src="https://pbs.twimg.com/profile_images/1862717563311968256/xfgt1L9l_400x400.jpg"
      />
    </PillAvatarGroup>
    Loved by millions
  </Pill>
);

export default Example;
