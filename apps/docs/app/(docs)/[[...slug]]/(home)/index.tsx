import { Blocks } from './components/blocks';
import { CallToAction } from './components/call-to-action';
import { Components } from './components/components';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Tweets } from './components/tweets';

const Home = () => (
  <div className="container mx-auto mt-[var(--fd-nav-height)] px-4 pt-8">
    <Hero />
    <Components />
    <Blocks />
    <Tweets />
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
