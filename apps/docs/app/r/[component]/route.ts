import { track } from '@vercel/analytics/server';
import { readdir } from 'fs/promises';
import { type NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { getPackage, type RegistryItemSchema } from '../../../lib/package';

type RegistryParams = {
  params: Promise<{ component: string }>;
};

type RegistrySchema = {
  $schema: 'https://ui.shadcn.com/schema/registry.json';
  name: string;
  homepage: string;
  items: Partial<RegistryItemSchema>[];
};

export const GET = async (_: NextRequest, { params }: RegistryParams) => {
  const { component } = await params;

  if (!component.endsWith('.json')) {
    return NextResponse.json(
      { error: 'Component must end with .json' },
      { status: 400 }
    );
  }

  const packageName = component.replace('.json', '');

  if (process.env.NODE_ENV === 'production') {
    try {
      await track('Registry download', {
        component: packageName,
      });
    } catch (error) {
      console.error(error);
    }
  }

  if (packageName === 'registry') {
    const response: RegistrySchema = {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      name: 'registry',
      homepage: 'https://ui.shadcn.com',
      items: [],
    };

    const packagesDir = join(process.cwd(), '..', '..', 'packages');
    const packageDirectories = await readdir(packagesDir, {
      withFileTypes: true,
    });

    const packageNames = packageDirectories
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter((name) => name !== 'shadcn-ui' && name !== 'typescript-config');

    for (const name of packageNames) {
      try {
        const pkg = await getPackage(name);
        response.items.push({
          name: pkg.name,
          type: pkg.type,
          title: pkg.title,
          description: pkg.description,
          files: pkg.files.map((file) => ({
            path: file.path,
            type: file.type,
            target: file.target,
          })),
        });
      } catch {
        // skip packages that fail
      }
    }

    return NextResponse.json(response);
  }

  try {
    const pkg = await getPackage(packageName);

    return NextResponse.json(pkg);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get package', details: error },
      { status: 500 }
    );
  }
};
