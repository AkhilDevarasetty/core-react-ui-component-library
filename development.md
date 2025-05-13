# Development Guide

This document explains how to develop, test, and build your React component library using this boilerplate.

## 1. Project Structure

- `lib/` — Place all reusable library components here (e.g., `Button.tsx`).
- `src/` — Playground for testing and developing components live.
- `dist/` — Build output (generated after running the build script).

## 2. Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the playground (development server):**
   ```sh
   npm run dev
   ```
   Open the local URL (usually http://localhost:5173) to view and test your components.

## 3. Adding Components

- Create new components in `lib/components/`.
- Export them from `lib/components/index.ts` and `lib/index.ts`.
- Example:
  ```ts
  // lib/components/MyComponent.tsx
  export const MyComponent = () => <div>My Component</div>;
  // lib/components/index.ts
  export * from './MyComponent';
  // lib/index.ts
  export * from './components';
  ```

## 4. Testing Components in Playground

- Import your library components in `src/Playground.tsx`:
  ```tsx
  import { MyComponent } from '@lib/components';
  ```
- Use and style them as needed. Tailwind CSS is available.

## 5. Linting & Formatting

- **Lint code:**
  ```sh
  npm run lint
  ```
- **Format code:**
  ```sh
  npm run format
  ```

## 6. Building the Library

- **Build for publishing:**
  ```sh
  npm run build:lib
  ```
  The output will be in the `dist/` folder, ready for npm publishing.

## 7. Tailwind CSS

- Tailwind is preconfigured. Use utility classes in your components and playground.
- Edit `tailwind.config.js` to customize your design system.

## 8. Storybook-style Documentation

- Add `.mdx` or `.docs.tsx` files in `lib/components/` for component documentation and usage examples.

## 9. Publishing

- After building, publish your library to npm:
  ```sh
  npm publish
  ```
  (Make sure to update the version and configure your npm account.)

---

For more details, see the `README.md` and comments in the code/config files.
