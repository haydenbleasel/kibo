import path from "node:path";
import { glob } from "glob";
import { notFound, redirect } from "next/navigation";

const basePath = path.join(process.cwd(), "pro/components/registry");
const comps = (await glob('**/*.tsx', { absolute: false, cwd: basePath }));

const CompsIndex = () => {
  if (!comps.length) {
    notFound();
  }

  const redirectTo = `/comps/${comps[0].replace('.tsx', '')}`;

  redirect(redirectTo);
}

export default CompsIndex;
