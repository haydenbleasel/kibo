import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { source } from '../../lib/source';

const loadGoogleFont = async (font: string, text: string, weights: string) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weights}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
};

export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.searchParams.get('slug');
  const page = await source.getPage(slug ? slug.split('/') : []);

  if (!page) {
    return new Response('Not found', { status: 404 });
  }

  const { title, description } = page.data;
  const text = `Kibo UI ${title} ${description}`;

  return new ImageResponse(
    <div tw="bg-[#1D4ED8] relative flex flex-col justify-between w-full h-full">
      <div
        tw="flex absolute left-0 top-0 w-full h-full opacity-10"
        style={{
          backgroundSize: '48px 48px',
          backgroundImage:
            'linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)',
        }}
      />
      <div tw="absolute left-36 top-12 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-96 top-24 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-144 top-36 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-192 top-48 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-240 top-24 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-288 top-72 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-48 top-60 z-10 w-12 h-12 bg-white opacity-10" />

      <div tw="flex top-12 left-12 z-10">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: "satori" */}
        <svg
          fill="none"
          height={48}
          viewBox="0 0 117 116"
          width={48}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="m29.8378 0h87.0002v29 58l-29.0002 29v-87h-87.000031zm-29.000031 95.7389v-37.7389h37.738831zm58.000031 20.2611h-37.249l37.249-37.2488z"
            fill="#FFFFFF"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div
        tw="flex flex-col bottom-0 left-0 right-0 relative z-10 p-12"
        style={{ fontFamily: 'Geist' }}
      >
        <p tw="text-lg m-0 text-white/80 font-semibold">Kibo UI</p>
        <h1
          tw="my-4 text-6xl font-bold text-white"
          style={{ fontFamily: 'Geist Semibold' }}
        >
          {page.data.title}
        </h1>
        <p tw="text-xl m-0 text-white/80 w-[70%]">{page.data.description}</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist Semibold',
          data: await loadGoogleFont('Geist', text, '600'),
          style: 'normal',
        },
        {
          name: 'Geist',
          data: await loadGoogleFont('Geist', text, '400'),
          style: 'normal',
        },
      ],
    }
  );
};
