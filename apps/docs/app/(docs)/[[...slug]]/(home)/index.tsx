import { Blocks } from './components/blocks';
import { CallToAction } from './components/call-to-action';
import { Components } from './components/components';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Tweets } from './components/tweets';

const Home = () => (
  <div className="w-full divide-y divide-dotted px-0 pt-[var(--fd-nav-height)]">
    <Hero />
    <Components />
    <Blocks />
    <Tweets />
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
