"use client";

import { Cursor, CursorBody, CursorMessage, CursorPointer } from "@repo/cursor";

const Example = () => (
  <Cursor color="#000000">
    <CursorPointer />
    <CursorBody>
      <CursorMessage>That looks great!</CursorMessage>
    </CursorBody>
  </Cursor>
);

export default Example;
