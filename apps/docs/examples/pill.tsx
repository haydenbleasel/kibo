"use client";

import {
  Pill,
  PillAvatar,
  PillAvatarGroup,
  PillButton,
  PillDelta,
  PillIcon,
  PillIndicator,
  PillStatus,
} from "@repo/pill";
import { CheckCircleIcon, UsersIcon, XIcon } from "lucide-react";

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Pill>
      <PillAvatar
        fallback="HB"
        src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
      />
      @haydenbleasel
    </Pill>
    <Pill>
      <PillStatus>
        <CheckCircleIcon className="text-emerald-500" size={12} />
        Passed
      </PillStatus>
      Approval Status
    </Pill>
    <Pill>
      #kibo-ui
      <PillButton size="icon" variant="ghost">
        <XIcon size={12} />
      </PillButton>
    </Pill>
    <Pill>
      <PillIndicator pulse variant="success" />
      Active
    </Pill>
    <Pill>
      <PillIndicator variant="error" />
      Error
    </Pill>
    <Pill>
      <PillDelta delta={10} />
      Up 10%
    </Pill>
    <Pill>
      <PillDelta delta={-5} />
      Down 5%
    </Pill>
    <Pill>
      <PillDelta delta={0} />
      No change
    </Pill>
    <Pill>
      <PillIcon icon={UsersIcon} />
      17 users
    </Pill>
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
  </div>
);

export default Example;
