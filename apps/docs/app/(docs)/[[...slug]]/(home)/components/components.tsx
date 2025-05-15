import AIInputExample from '../../../../../examples/ai-input-icons';
import CodeBlockExample from '../../../../../examples/code-block';
import ColorPickerExample from '../../../../../examples/color-picker';
import QrCodeExample from '../../../../../examples/qr-code';
import { source } from '../../../../../lib/source';

const colorPicker = source.getPage(['components', 'color-picker']);
const aiInput = source.getPage(['components', 'ai-input']);
const qrCode = source.getPage(['components', 'qr-code']);
const codeBlock = source.getPage(['components', 'code-block']);

const examples = [
  {
    name: colorPicker?.data.title,
    description: colorPicker?.data.description,
    component: ColorPickerExample,
  },
  {
    name: aiInput?.data.title,
    description: aiInput?.data.description,
    component: AIInputExample,
  },
  {
    name: qrCode?.data.title,
    description: qrCode?.data.description,
    component: QrCodeExample,
  },
  {
    name: codeBlock?.data.title,
    description: codeBlock?.data.description,
    component: CodeBlockExample,
  },
];

export const Components = () => (
  <div className="flex flex-col gap-24 px-8 py-24 text-center">
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
      <h2 className="font-semibold text-3xl">
        Functional, composable components
      </h2>
      <p className="text-foreground/80 text-lg">
        Kibo UI is a custom registry of composable, accessible and open source
        components designed for use with shadcn/ui.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 border-t border-dotted md:grid-cols-2 [&>*:nth-child(2n)]:border-l">
      {examples.map((example) => (
        <div
          key={example.name}
          className="flex aspect-square flex-col items-center justify-center gap-8 border-dotted p-8"
        >
          <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2">
            <h3 className="font-semibold text-xl">{example.name}</h3>
            <p className="text-foreground/60">{example.description}</p>
          </div>
          <div className="text-left">
            <example.component />
          </div>
        </div>
      ))}
    </div>
  </div>
);
