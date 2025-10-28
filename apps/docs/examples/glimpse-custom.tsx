import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@repo/glimpse";
import { glimpse } from "@repo/glimpse/server";

const Example = async () => {
  const data = await glimpse("https://github.com/haydenbleasel/ultracite");

  return (
    <div>
      Check out{" "}
      <Glimpse closeDelay={0} openDelay={0}>
        <GlimpseTrigger asChild>
          <a
            className="font-medium text-primary underline"
            href="https://github.com/haydenbleasel/ultracite"
          >
            Kibo UI
          </a>
        </GlimpseTrigger>
        <GlimpseContent className="w-80 bg-secondary">
          <GlimpseImage className="shadow-lg" src={data.image ?? ""} />
          <GlimpseTitle className="line-clamp-2 font-semibold text-lg">
            {data.title}
          </GlimpseTitle>
          <GlimpseDescription className="text-sm">
            {data.description}
          </GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{" "}
      on GitHub
    </div>
  );
};

export default Example;
