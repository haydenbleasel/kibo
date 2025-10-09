import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const title = "Horizontal ScrollArea";

const artworks = [
  {
    artist: "Ornella Binni",
    art: "https://placehold.co/300x400",
  },
  {
    artist: "Tom Byrom",
    art: "https://placehold.co/300x400",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://placehold.co/300x400",
  },
  {
    artist: "Jessica Ruscello",
    art: "https://placehold.co/300x400",
  },
  {
    artist: "Cosmic Timetraveler",
    art: "https://placehold.co/300x400",
  },
];

const Example = () => (
  <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border">
    <div className="flex w-max space-x-4 p-4">
      {artworks.map((artwork) => (
        <figure className="shrink-0" key={artwork.artist}>
          <div className="overflow-hidden rounded-md">
            {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
            <img
              alt={`Artwork by ${artwork.artist}`}
              className="aspect-[3/4] h-fit w-fit object-cover"
              height={400}
              src={artwork.art}
              width={300}
            />
          </div>
          <figcaption className="pt-2 text-muted-foreground text-xs">
            Photo by{" "}
            <span className="font-semibold text-foreground">
              {artwork.artist}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

export default Example;
