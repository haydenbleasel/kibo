import AIInputExample from '../../../examples/ai-chatbot';
import CollaborativeCanvasExample from '../../../examples/collaborative-canvas';
import { source } from '../../../lib/source';

const aiChatbot = source.getPage(['blocks', 'ai-chatbot']);
const collaborativeCanvas = source.getPage(['blocks', 'collaborative-canvas']);

const examples = [
  {
    name: aiChatbot?.data.title,
    description: aiChatbot?.data.description,
    component: AIInputExample,
  },
  {
    name: collaborativeCanvas?.data.title,
    description: collaborativeCanvas?.data.description,
    component: CollaborativeCanvasExample,
  },
];

export const Blocks = () => (
  <div className="flex flex-col gap-24 px-8 py-24 text-center">
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
      <h2 className="font-semibold text-3xl">Blocks for your website</h2>
      <p className="text-foreground/80 text-lg">
        Kibo UI is a custom registry of blocks for your website.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 border-t border-dotted md:grid-cols-2 [&>*:nth-child(2n)]:border-l">
      {examples.map((example) => (
        <div
          key={example.name}
          className="flex flex-col items-center justify-center gap-8 border-dotted p-8"
        >
          <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2">
            <h3 className="font-semibold text-xl">{example.name}</h3>
            <p className="text-foreground/60">{example.description}</p>
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-background text-left shadow-2xl">
            <example.component />
          </div>
        </div>
      ))}
    </div>
  </div>
);
