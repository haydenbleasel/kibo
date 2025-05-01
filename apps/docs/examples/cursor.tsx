'use client';

import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from '@repo/cursor';

const Example = () => (
  <>
    <Cursor className="absolute top-24 left-24">
      <CursorPointer className="text-emerald-500" />
      <CursorBody className="bg-emerald-50 text-emerald-700">
        <CursorName>@haydenbleasel</CursorName>
        <CursorMessage>Can we adjust the color?</CursorMessage>
      </CursorBody>
    </Cursor>
    <Cursor className="absolute top-48 right-32">
      <CursorPointer className="text-rose-500" />
      <CursorBody className="bg-rose-50 text-rose-700">
        <CursorName>@leerob</CursorName>
        <CursorMessage>One more thing...</CursorMessage>
      </CursorBody>
    </Cursor>
    <Cursor className="absolute bottom-24 left-48">
      <CursorPointer className="text-sky-500" />
      <CursorBody className="bg-sky-50 text-sky-700">
        <CursorName>@shadcn</CursorName>
        <CursorMessage>Another new component?!!</CursorMessage>
      </CursorBody>
    </Cursor>
  </>
);

export default Example;
