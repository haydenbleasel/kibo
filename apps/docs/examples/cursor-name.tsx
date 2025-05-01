'use client';

import { Cursor, CursorBody, CursorName, CursorPointer } from '@repo/cursor';

const Example = () => (
  <Cursor>
    <CursorPointer />
    <CursorBody>
      <CursorName>Hayden</CursorName>
    </CursorBody>
  </Cursor>
);

export default Example;
