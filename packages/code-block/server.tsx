import { cn } from '@/lib/utils';
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import {
  type BundledLanguage,
  type CodeOptionsMultipleThemes,
  codeToHtml,
} from 'shiki';

export type CodeBlockContentProps = {
  themes?: CodeOptionsMultipleThemes['themes'];
  language?: BundledLanguage;
  children: string;
  className?: string;
  lineNumbers?: boolean;
  syntaxHighlighting?: boolean;
  value?: string;
};

const lineNumberClassNames = cn(
  '[&_code]:[counter-reset:line]',
  '[&_code]:[counter-increment:line_0]',
  '[&_.line]:before:content-[counter(line)]',
  '[&_.line]:before:inline-block',
  '[&_.line]:before:[counter-increment:line]',
  '[&_.line]:before:w-4',
  '[&_.line]:before:mr-4',
  '[&_.line]:before:text-[13px]',
  '[&_.line]:before:text-right',
  '[&_.line]:before:text-muted-foreground/50',
  '[&_.line]:before:font-mono',
  '[&_.line]:before:select-none'
);

const darkModeClassNames = cn(
  'dark:[&_.shiki]:!text-[var(--shiki-dark)]',
  'dark:[&_.shiki]:!bg-[var(--shiki-dark-bg)]',
  'dark:[&_.shiki]:![font-style:var(--shiki-dark-font-style)]',
  'dark:[&_.shiki]:![font-weight:var(--shiki-dark-font-weight)]',
  'dark:[&_.shiki]:![text-decoration:var(--shiki-dark-text-decoration)]',
  'dark:[&_.shiki_span]:!text-[var(--shiki-dark)]',
  'dark:[&_.shiki_span]:![font-style:var(--shiki-dark-font-style)]',
  'dark:[&_.shiki_span]:![font-weight:var(--shiki-dark-font-weight)]',
  'dark:[&_.shiki_span]:![text-decoration:var(--shiki-dark-text-decoration)]'
);

const lineHighlightClassNames = cn(
  '[&_.line.highlighted]:bg-blue-50',
  '[&_.line.highlighted]:after:bg-blue-500',
  '[&_.line.highlighted]:after:absolute',
  '[&_.line.highlighted]:after:left-0',
  '[&_.line.highlighted]:after:top-0',
  '[&_.line.highlighted]:after:bottom-0',
  '[&_.line.highlighted]:after:w-0.5',
  'dark:[&_.line.highlighted]:!bg-blue-500/10'
);

const lineDiffClassNames = cn(
  '[&_.line.diff]:after:absolute',
  '[&_.line.diff]:after:left-0',
  '[&_.line.diff]:after:top-0',
  '[&_.line.diff]:after:bottom-0',
  '[&_.line.diff]:after:w-0.5',
  '[&_.line.diff.add]:bg-emerald-50',
  '[&_.line.diff.add]:after:bg-emerald-500',
  '[&_.line.diff.remove]:bg-rose-50',
  '[&_.line.diff.remove]:after:bg-rose-500',
  'dark:[&_.line.diff.add]:!bg-emerald-500/10',
  'dark:[&_.line.diff.remove]:!bg-rose-500/10'
);

const lineFocusedClassNames = cn(
  '[&_code:has(.focused)_.line]:blur-[2px]',
  '[&_code:has(.focused)_.line.focused]:blur-none'
);

const wordHighlightClassNames = cn(
  '[&_.highlighted-word]:bg-blue-50',
  'dark:[&_.highlighted-word]:!bg-blue-500/10'
);

const codeBlockClassName = cn(
  'mt-0 text-sm',
  '[&_pre]:py-4',
  '[&_.shiki]:!bg-[var(--shiki-bg)]',
  '[&_code]:w-full',
  '[&_code]:grid',
  '[&_code]:overflow-x-auto',
  '[&_code]:bg-transparent',
  '[&_.line]:px-4',
  '[&_.line]:w-full',
  '[&_.line]:relative'
);

export const CodeBlockContent = async ({
  children,
  themes,
  language,
  lineNumbers = true,
  syntaxHighlighting = true,
  value,
  className,
}: CodeBlockContentProps) => {
  const html = await codeToHtml(children as string, {
    lang: language ?? 'typescript',
    themes: themes ?? {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    transformers: [
      transformerNotationDiff({
        matchAlgorithm: 'v3',
      }),
      transformerNotationHighlight({
        matchAlgorithm: 'v3',
      }),
      transformerNotationWordHighlight({
        matchAlgorithm: 'v3',
      }),
      transformerNotationFocus({
        matchAlgorithm: 'v3',
      }),
      transformerNotationErrorLevel({
        matchAlgorithm: 'v3',
      }),
    ],
  });

  const compiledClassName = cn(
    codeBlockClassName,
    lineHighlightClassNames,
    lineDiffClassNames,
    lineFocusedClassNames,
    wordHighlightClassNames,
    darkModeClassNames,
    lineNumbers && lineNumberClassNames,
    className
  );

  return (
    <div
      // biome-ignore lint/security/noDangerouslySetInnerHtml: "Kinda how Shiki works"
      dangerouslySetInnerHTML={{ __html: html }}
      className={compiledClassName}
    />
  );
};
