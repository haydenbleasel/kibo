'use client';

import { Pill, PillAvatar } from '@repo/pill';

const Example = () => (
  <Pill>
    <PillAvatar
      src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
      fallback="HB"
    />
    @haydenbleasel
  </Pill>
);

export default Example;
