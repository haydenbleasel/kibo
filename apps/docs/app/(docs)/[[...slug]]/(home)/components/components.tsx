import {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@repo/color-picker";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@repo/dropzone";
import { ImageZoom } from "@repo/image-zoom";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@repo/marquee";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ArrowRightIcon, icons, type LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ComponentType, createElement } from "react";
import QrCodeExample from "../../../../../examples/qr-code";
import { source } from "../../../../../lib/source";
import { CodeBlockExample } from "./code-block-example";

const colorPicker = source.getPage(["components", "color-picker"]);
const imageZoom = source.getPage(["components", "image-zoom"]);
const qrCode = source.getPage(["components", "qr-code"]);
const codeBlock = source.getPage(["components", "code-block"]);
const dropzone = source.getPage(["components", "dropzone"]);
const marquee = source.getPage(["components", "marquee"]);

const examples = [
  {
    icon: colorPicker?.data.icon,
    name: colorPicker?.data.title,
    description: colorPicker?.data.description,
    component: () => (
      <ColorPicker className="aspect-square rounded-md border bg-background p-4">
        <ColorPickerSelection className="aspect-auto size-full" />
        <div className="flex items-center gap-4">
          <ColorPickerEyeDropper />
          <div className="grid w-full gap-1">
            <ColorPickerHue />
            <ColorPickerAlpha />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ColorPickerOutput />
          <ColorPickerFormat />
        </div>
      </ColorPicker>
    ),
  },
  {
    icon: imageZoom?.data.icon,
    name: imageZoom?.data.title,
    description: imageZoom?.data.description,
    component: () => (
      <ImageZoom>
        <Image
          alt="Placeholder image"
          className="h-auto w-full rounded-xl border"
          height={1200}
          src="https://images.unsplash.com/photo-1704895644430-4236a6140656?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          unoptimized
          width={1200}
        />
      </ImageZoom>
    ),
  },
  {
    icon: qrCode?.data.icon,
    name: qrCode?.data.title,
    description: qrCode?.data.description,
    component: () => (
      <div className="w-full rounded-xl border bg-background p-4 sm:p-8">
        <QrCodeExample />
      </div>
    ),
  },
  {
    icon: codeBlock?.data.icon,
    name: codeBlock?.data.title,
    description: codeBlock?.data.description,
    component: () => <CodeBlockExample />,
  },
  {
    icon: dropzone?.data.icon,
    name: dropzone?.data.title,
    description: dropzone?.data.description,
    component: () => (
      <Dropzone
        accept={{ "image/*": [] }}
        className="aspect-square shadow-none"
        maxFiles={10}
        maxSize={1024 * 1024 * 10}
        minSize={1024}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    ),
  },
  {
    icon: marquee?.data.icon,
    name: marquee?.data.title,
    description: marquee?.data.description,
    component: () => (
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-24 w-24" key={index}>
                <Image
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  height={96}
                  src={`https://placehold.co/96x96?random=${index}`}
                  unoptimized
                  width={96}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    ),
  },
];

const ExampleCard = ({
  icon,
  name,
  description,
  component: Component,
  className,
}: {
  icon: string | undefined;
  name: string | undefined;
  description: string | undefined;
  component: ComponentType;
  className?: string;
}) => {
  const Icon =
    icon && icon in icons
      ? (props: LucideProps) =>
        createElement(icons[icon as keyof typeof icons], {
          ...props,
        })
      : null;

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-8 rounded-lg bg-secondary p-4 sm:p-8",
        className
      )}
      key={name}
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-muted-foreground" size={16} />}
          {name && <p className="font-medium">{name}</p>}
        </div>
        {description && (
          <p className="text-balance text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="text-left">
        <Component />
      </div>
    </div>
  );
};

export const Components = () => (
  <div className="container mx-auto grid gap-8">
    <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
      <div className="grid gap-4">
        <h2 className="max-w-lg font-semibold text-3xl">
          Functional and fully composable
        </h2>
        <p className="max-w-lg text-balance text-lg text-muted-foreground">
          Kibo UI components are designed to be fully composable so you can
          build, customize and extend them to your own needs.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/components">
          <span>Explore components</span>
          <ArrowRightIcon size={16} />
        </Link>
      </Button>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {examples.map((example) => (
        <ExampleCard key={example.name} {...example} />
      ))}
    </div>
  </div>
);
