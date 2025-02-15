import Image from 'next/image';
import Grid from './grid.svg';

export const Header = () => (
  <span className="pointer-events-none absolute inset-0 flex h-[64rem] select-none justify-center overflow-hidden">
    <Image
      src={Grid}
      alt="Header Background"
      className="-translate-y-1/3 -ml-48"
      width={790}
      height={640}
    />
  </span>
);
