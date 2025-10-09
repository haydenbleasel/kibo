import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export const title = "Item with Header";

const models = [
  {
    name: "v0-1.5-sm",
    description: "Everyday tasks and UI generation.",
    image: "https://placehold.co/640x480",
  },
  {
    name: "v0-1.5-lg",
    description: "Advanced thinking or reasoning.",
    image: "https://placehold.co/640x480",
  },
  {
    name: "v0-2.0-mini",
    description: "Open Source model for everyone.",
    image: "https://placehold.co/640x480",
  },
];

const Example = () => (
  <div className="flex w-full max-w-xl flex-col gap-6">
    <ItemGroup className="grid grid-cols-3 gap-4">
      {models.map((model) => (
        <Item className="bg-background" key={model.name} variant="outline">
          <ItemHeader>
            {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
            <img
              alt={model.name}
              className="aspect-[3/2] w-full rounded-sm object-cover"
              height={480}
              src={model.image}
              width={640}
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>{model.name}</ItemTitle>
            <ItemDescription>{model.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  </div>
);

export default Example;
