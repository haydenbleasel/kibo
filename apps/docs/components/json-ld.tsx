import type { Thing, WithContext } from "schema-dts";

type JsonLdProps = {
  code: WithContext<Thing>;
};

export const JsonLd = ({ code }: JsonLdProps) => (
  <script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: "This is a JSON-LD script, not user-generated content."
    dangerouslySetInnerHTML={{ __html: JSON.stringify(code) }}
    type="application/ld+json"
  />
);

export * from "schema-dts";
