import {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from '@repo/color-picker';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@repo/dropzone';
import { ImageZoom } from '@repo/image-zoom';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { ArrowRightIcon, type LucideProps, icons } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type ComponentType, createElement } from 'react';
import CodeBlockExample from '../../../../../examples/code-block';
import QrCodeExample from '../../../../../examples/qr-code';
import { source } from '../../../../../lib/source';

const colorPicker = source.getPage(['components', 'color-picker']);
const imageZoom = source.getPage(['components', 'image-zoom']);
const qrCode = source.getPage(['components', 'qr-code']);
const codeBlock = source.getPage(['components', 'code-block']);
const dropzone = source.getPage(['components', 'dropzone']);

const examples = [
  {
    icon: colorPicker?.data.icon,
    name: colorPicker?.data.title,
    description: colorPicker?.data.description,
    component: () => (
      <ColorPicker className="aspect-square rounded-md border bg-background p-4 shadow-sm">
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
          src="https://images.unsplash.com/photo-1704895644430-4236a6140656?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1200}
          height={1200}
          unoptimized
          className="h-auto w-full rounded-xl border"
        />
      </ImageZoom>
    ),
  },
  {
    icon: qrCode?.data.icon,
    name: qrCode?.data.title,
    description: qrCode?.data.description,
    component: () => (
      <div className="w-full rounded-xl border bg-background p-8">
        <QrCodeExample />
      </div>
    ),
  },
  {
    icon: codeBlock?.data.icon,
    name: codeBlock?.data.title,
    description: codeBlock?.data.description,
    component: CodeBlockExample,
    className: 'col-span-2 border-b-0',
  },
  {
    icon: dropzone?.data.icon,
    name: dropzone?.data.title,
    description: dropzone?.data.description,
    component: () => (
      <Dropzone
        maxSize={1024 * 1024 * 10}
        minSize={1024}
        maxFiles={10}
        accept={{ 'image/*': [] }}
        className="aspect-square"
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    ),
  },
];

const ExampleCard = ({
  icon,
  name,
  description,
  component: Component,
  index,
  className,
}: {
  icon: string | undefined;
  name: string | undefined;
  description: string | undefined;
  component: ComponentType;
  index: number;
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
      key={name}
      className={cn(
        'flex h-full flex-col gap-8 border-l border-dotted p-8',
        index % 3 === 0 && 'border-l-0',
        className
      )}
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-muted-foreground" />}
          {name && <p className="font-medium">{name}</p>}
        </div>
        {description && (
          <p className="text-balance text-foreground/60">{description}</p>
        )}
      </div>
      <div className="text-left">
        <Component />
      </div>
    </div>
  );
};

export const Components = () => (
  <>
    <div className="flex w-full items-start justify-between gap-4 px-8 py-16">
      <div className="grid gap-4">
        <h2 className="max-w-lg font-semibold text-3xl">
          Functional and fully composable
        </h2>
        <p className="max-w-lg text-balance text-foreground/60 text-lg">
          Kibo UI components are designed to be fully composable so you can
          build, customize and extend them to your own needs.
        </p>
      </div>
      <Button asChild>
        <Link href="/components">
          <span>Explore components</span>
          <ArrowRightIcon size={16} />
        </Link>
      </Button>
    </div>
    <div className="grid grid-cols-1 divide-y divide-dotted md:grid-cols-3">
      {examples.map((example, index) => (
        <ExampleCard key={example.name} index={index} {...example} />
      ))}
    </div>
  </>
);
