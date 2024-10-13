import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { GanttExampleCustom } from '../components/gantt';
import { RoadmapUiIcon } from '../components/icons';
import { Navbar } from './components/navbar';
import { Waitlist } from './components/waitlist';
import EververseLogo from './eververse.png';
import ReactLogo from './react.svg';

export const metadata: Metadata = {
  title: 'Roadmap UI',
  description:
    'A collection of accessible, customizable, performant and open source components built for Eververse.',
};

const HomePage: FC = () => (
  <>
    <Navbar />
    <section className="container mx-auto flex max-w-5xl flex-col items-center gap-2 py-8 md:py-12 lg:py-16">
      <h1 className="text-center font-bold text-3xl leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Composable{' '}
        <Image
          src={ReactLogo}
          alt=""
          width={48}
          height={48}
          className="inline-block align-baseline select-none pointer-events-none"
        />{' '}
        React components for building interactive{' '}
        <RoadmapUiIcon className="-rotate-6 ml-2 inline-block translate-y-1 align-baseline select-none pointer-events-none" />{' '}
        roadmaps.
      </h1>
      <p className="mt-6 max-w-lg text-pretty text-center text-lg text-muted-foreground sm:text-xl">
        A collection of accessible, customizable, performant and open source
        components built for{' '}
        <a href="https://www.eververse.ai" target="_blank" rel="noreferrer">
          <Image
            src={EververseLogo}
            alt=""
            width={16}
            height={16}
            className="inline-block align-baseline select-none pointer-events-none"
          />{' '}
          Eververse.
        </a>
      </p>
      <div className="mt-4 flex w-full items-center justify-center space-x-4">
        <Waitlist />
        {/* <Installer />
        <GitHubButton /> */}
      </div>
    </section>
    <section className="container mx-auto">
      <div className="mt-8 flex h-[600px] w-full flex-col overflow-clip rounded-xl border bg-white">
        <GanttExampleCustom />
      </div>
    </section>
  </>
);

export default HomePage;
