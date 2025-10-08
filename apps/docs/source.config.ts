import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content",
  docs: {
    schema: frontmatterSchema.extend({
      dependencies: z.array(z.string()).optional(),
      installer: z.string().optional(),
    }),
  },
});

export default defineConfig();
