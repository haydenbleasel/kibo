'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarStack } from '@repo/avatar-stack';

const Example = () => (
  <AvatarStack>
    <Avatar>
      <AvatarImage src="https://github.com/haydenbleasel.png" />
      <AvatarFallback>HB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/leerob.png" />
      <AvatarFallback>LR</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/serafimcloud.png" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  </AvatarStack>
);

export default Example;
