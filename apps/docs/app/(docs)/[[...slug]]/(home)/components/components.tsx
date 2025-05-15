import { Button } from '@repo/shadcn-ui/components/ui/button';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { ArrowRightIcon, type LucideProps, icons } from 'lucide-react';
import Link from 'next/link';
import { type ComponentType, createElement } from 'react';
import AIInputExample from '../../../../../examples/ai-input-icons';
import CodeBlockExample from '../../../../../examples/code-block';
import ColorPickerExample from '../../../../../examples/color-picker';
import DropzoneExample from '../../../../../examples/dropzone';
import QrCodeExample from '../../../../../examples/qr-code-styling';
import { source } from '../../../../../lib/source';

const colorPicker = source.getPage(['components', 'color-picker']);
const aiInput = source.getPage(['components', 'ai-input']);
const qrCode = source.getPage(['components', 'qr-code']);
const codeBlock = source.getPage(['components', 'code-block']);
const dropzone = source.getPage(['components', 'dropzone']);

const examples = [
  {
    icon: colorPicker?.data.icon,
    name: colorPicker?.data.title,
    description: colorPicker?.data.description,
    component: ColorPickerExample,
  },
  {
    icon: aiInput?.data.icon,
    name: aiInput?.data.title,
    description: aiInput?.data.description,
    component: AIInputExample,
  },
  {
    icon: qrCode?.data.icon,
    name: qrCode?.data.title,
    description: qrCode?.data.description,
    component: QrCodeExample,
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
    component: DropzoneExample,
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
