import { Blocks } from "./components/blocks";
import { CallToAction } from "./components/call-to-action";
import { Components } from "./components/components";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Patterns } from "./components/patterns";
import { Tweets } from "./components/tweets";

const Home = () => (
  <div className="mt-[var(--fd-nav-height)] grid w-full gap-16 p-4 sm:gap-24">
    <Hero />
    <Components />
    <Blocks />
    <Patterns />
    <Tweets />
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
