'use client';

import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from '@repo/cursor';

const Example = () => (
  <Cursor>
    <CursorPointer className="text-indigo-500" />
    <CursorBody className="bg-indigo-50 text-indigo-700">
      <CursorName>@haydenbleasel</CursorName>
      <CursorMessage>Can we adjust the color?</CursorMessage>
    </CursorBody>
  </Cursor>
);

export default Example;
