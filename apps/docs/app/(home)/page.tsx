import { Blocks } from './components/blocks';
import { Components } from './components/components';
import { Hero } from './components/hero';

const Home = () => (
  <div className="container mx-auto divide-y divide-dotted border-x border-dotted px-0">
    <Hero />
    <Components />
    <Blocks />
  </div>
);

export default Home;
