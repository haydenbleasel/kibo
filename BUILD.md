# Build Instructions

## 1. Prerequisites

- **Node.js**: v18 or newer (LTS recommended)
- **pnpm**: v8 or newer (recommended for monorepo support)
  - Install globally if needed:
    ```sh
    npm install -g pnpm
    ```

## 2. Install Dependencies

From the root directory, run:

```sh
pnpm install
```

This installs all dependencies for every package and app in the monorepo.

## 3. Build All Packages & Apps

To build everything:

```sh
pnpm build
```

This builds all packages in `packages/` and all apps in `apps/`.

## 4. Run the Docs App (Next.js)

To start the documentation app in development mode:

```sh
pnpm --filter docs dev
```

Or, from the `apps/docs` directory:

```sh
cd apps/docs
pnpm dev
```

To build the docs app for production:

```sh
pnpm --filter docs build
```

To start the production server:

```sh
pnpm --filter docs start
```

## 5. Linting & Formatting

To lint all code:

```sh
pnpm lint
```

To format all code:

```sh
pnpm format
```

## 6. Running Tests

If tests are configured, run:

```sh
pnpm test
```

---

**Notes:**

- If you use `npm` or `yarn`, replace `pnpm` with your preferred package manager.
- For more details, see the `README.md` or individual package/app documentation.
