# Svelte + Vite

A small to-do list app built with Svelte 5 (runes) and plain Vite. Tasks are
persisted to `localStorage`; four paper-style themes are switchable at runtime.

## Scripts

- `npm run dev` — start the dev server with HMR
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint over `.js` and `.svelte` files

## Structure

- `src/main.js` — mounts `App` into `#root`
- `src/App.svelte` — owns all state (`items`, `theme`) and the mutation handlers
- `src/components/List.svelte` — the two columns (open / completed)
- `src/components/ListItem.svelte` — one task row
- `src/components/Form.svelte` — add-task input (`bind:value`)
- `src/components/ThemePicker.svelte` — theme `<select>`
- `src/index.css` — Tailwind layers + the `[data-theme]` CSS-variable palette
