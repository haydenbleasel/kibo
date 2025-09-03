import { cn } from "@repo/shadcn-ui/lib/utils";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const tweets = [
  "1922622720887448039",
  "1915794244347875396",
  "1906910093247205414",
  "1905513006861287768",
  "1908028809804169709",
  "1889957205216207304",
  "1896601074360058146",
  "1922336175953531326",
  "1922321546275680635",
  "1919571095608275107",
  "1919462310327755047",
  "1919442400910405743",
  "1919437300011876565",
  "1919435318144512384",
  "1918384155374833747",
  "1918023620703732018",
  "1918003297639911563",
];

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

const Tweet = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

export const Tweets = () => (
  <div className="container mx-auto">
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="flex flex-col gap-4 py-4 sm:py-8">
        <div className="sticky top-24">
          <h2 className="max-w-lg font-semibold text-3xl">
            What people are saying
          </h2>
          <p className="max-w-lg text-balance text-lg text-muted-foreground">
            We're proud to have a community of users who love using Kibo UI.
          </p>
        </div>
      </div>
      <div
        className={cn(
          "py-4 sm:py-8 lg:col-span-2 lg:columns-2",
          "[&_.react-tweet-theme]:mt-0!"
        )}
      >
        {tweets.map((tweet) => (
          <Suspense fallback={<TweetSkeleton />} key={tweet}>
            <Tweet id={tweet} />
          </Suspense>
        ))}
      </div>
    </div>
  </div>
);
