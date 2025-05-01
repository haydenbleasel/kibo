'use client';

import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from '@repo/cursor';

const Example = () => (
  <Cursor color="#000000">
    <CursorPointer />
    <CursorBody>
      <CursorName>Hayden</CursorName>
      <CursorMessage>That looks great!</CursorMessage>
    </CursorBody>
  </Cursor>
);

export default Example;
