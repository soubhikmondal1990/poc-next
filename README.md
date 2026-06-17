This is a Next.js + TypeScript POC for a login UI (Redux Toolkit, axios, i18n).

**Getting started**

Prerequisites: Node.js (>=18), npm.

Install dependencies:

```bash
npm ci
```

Run development server:

```bash
npm run dev
```

Build for environments:

```bash
npm run build:ist   # build using .env.ist
npm run build:prod  # build using .env.prod
```

Start production server (after build):

```bash
npm start
```

**Available scripts** (in `package.json`)

- `dev`: Next dev server
- `build:ist`, `build:prod`: builds using `dotenv-cli` with `.env.ist` / `.env.prod`
- `start`: starts the built Next server
- `lint`: runs `eslint` (update to `eslint . --ext .ts,.tsx` recommended)
- `format`: runs `prettier --write .`
- `test`: runs Jest
- `test:coverage`: runs Jest with coverage

**Environment variables**

Create an `.env` file or the environment-specific files used by the build scripts. At minimum the app expects:

- `NEXT_PUBLIC_API_BASE_URL` — base URL for the backend API (required for API calls)
- `NEXT_PUBLIC_ENV` — environment name (defaults to `local`)

Add a `.env.example` in the repo with those keys to make onboarding easier.

**Testing & coverage**

This project uses Jest (configured via `next/jest`). Run tests with:

```bash
npm test
```

The repo configures coverage thresholds in `jest.config.mjs`. Current local run may fail CI if coverage is below thresholds — either add tests or adjust thresholds intentionally.

**Lint & format**

Run the linter and formatter:

```bash
npm run lint
npm run format
```

Recommend updating `lint` script to target files explicitly and adding `--fix` in CI/hook automation.

**Notes & next steps**

- I fixed a couple of small runtime/type issues in the repo (interceptor header handling, missing `AuthError` type) to avoid build/runtime failures. See git history for details.
- Recommended additions: `.env.example`, CI workflow (lint/test/build), `husky` + `lint-staged` pre-commit hooks, more unit tests to raise coverage.

If you want, I can add a `.env.example` and a GitHub Actions CI template next.
