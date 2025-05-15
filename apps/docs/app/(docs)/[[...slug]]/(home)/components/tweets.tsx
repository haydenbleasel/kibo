import { cn } from '@repo/shadcn-ui/lib/utils';
import { Tweet } from 'react-tweet';

const tweets = [
  '1922622720887448039',
  '1915794244347875396',
  '1906910093247205414',
  '1905513006861287768',
  '1908028809804169709',
  '1889957205216207304',
  '1896601074360058146',
  '1891839795044683908',
];

export const Tweets = () => (
  <div className="grid grid-cols-3 divide-x divide-dotted">
    <div className="sticky top-0 flex flex-col gap-4 self-start p-8">
      <h2 className="max-w-lg font-semibold text-3xl">
        What people are saying
      </h2>
      <p className="max-w-lg text-balance text-foreground/60 text-lg">
        We're proud to have a community of users who love using Kibo UI.
      </p>
    </div>
    <div
      className={cn('col-span-2 columns-2 p-8', '[&_.react-tweet-theme]:mt-0!')}
    >
      {tweets.map((tweet) => (
        <Tweet key={tweet} id={tweet} />
      ))}
    </div>
  </div>
);
