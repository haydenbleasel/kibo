import { Blocks } from "./components/blocks";
import { CallToAction } from "./components/call-to-action";
import { Components } from "./components/components";
import { Hero } from "./components/hero";
import { Tweets } from "./components/tweets";

const Home = () => (
  <div className="mt-[var(--fd-nav-height)] w-full p-4">
    <Hero />
    <Components />
    <Blocks />
    <Tweets />
    <CallToAction />
  </div>
);

export default Home;
