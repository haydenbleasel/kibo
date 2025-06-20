import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from '@repo/glimpse';
import { glimpse } from '@repo/glimpse/server';

const Example = async () => {
  const data = await glimpse('https://github.com/haydenbleasel/kibo');

  return (
    <div>
      Check out{' '}
      <Glimpse openDelay={0} closeDelay={0}>
        <GlimpseTrigger asChild>
          <a
            href="https://github.com/haydenbleasel/kibo"
            className="font-medium text-primary underline"
          >
            Kibo UI
          </a>
        </GlimpseTrigger>
        <GlimpseContent className="w-80 bg-secondary">
          <GlimpseImage src={data.image ?? ''} className="shadow-lg" />
          <GlimpseTitle className="line-clamp-2 font-semibold text-lg">
            {data.title}
          </GlimpseTitle>
          <GlimpseDescription className="text-sm">
            {data.description}
          </GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{' '}
      on GitHub
    </div>
  );
};

export default Example;
