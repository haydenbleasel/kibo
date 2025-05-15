import { Blocks } from './components/blocks';
import { Components } from './components/components';
import { Hero } from './components/hero';

const Home = () => (
  <div className="w-full bg-secondary pt-[var(--fd-nav-height)]">
    <div className="container mx-auto divide-y divide-dotted border-x border-dotted px-0">
      <Hero />
      <Components />
      <Blocks />
    </div>
  </div>
);

export default Home;
