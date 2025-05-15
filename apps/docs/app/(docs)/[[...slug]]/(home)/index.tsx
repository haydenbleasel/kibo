import { Blocks } from './components/blocks';
import { Components } from './components/components';
import { Hero } from './components/hero';
import { Tweets } from './components/tweets';

const Home = () => (
  <div className="w-full bg-secondary pt-[var(--fd-nav-height)] dark:bg-background">
    <div className="container mx-auto divide-y divide-dotted border-x border-dotted px-0">
      <Hero />
      <Components />
      <Blocks />
      <Tweets />
    </div>
  </div>
);

export default Home;
