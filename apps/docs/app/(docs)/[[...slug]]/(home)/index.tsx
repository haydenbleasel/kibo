import { Blocks } from './components/blocks';
import { CallToAction } from './components/call-to-action';
import { Components } from './components/components';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Tweets } from './components/tweets';

const Home = () => (
  <div className="w-full bg-secondary pt-[var(--fd-nav-height)] dark:bg-background">
    <div className="container mx-auto divide-y divide-dotted border-x border-dotted px-0">
      <Hero />
      <Components />
      <Blocks />
      <Tweets />
      <CallToAction />
      <Footer />
    </div>
  </div>
);

export default Home;
