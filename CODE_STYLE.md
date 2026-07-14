# Code Style

## Formatting

Prettier: tabs (width 4), double quotes, semicolons, trailing commas, 120 char width. Tailwind classes sorted via `prettier-plugin-tailwindcss`. No unused vars/imports.

### Blank Lines

Blank line after multi-line block (3+ lines) when followed by another statement. Single-line pairs fine. Single line then multi-line fine. Only multi-line then next statement needs the blank line.

```typescript
// Good
watchEffect(() => {
	localStorage.setItem("theme", theme.value);
	document.documentElement.classList.toggle("dark", isDark.value);
});

export function useTheme() { ... }

// Good - single lines together
const media = window.matchMedia("(prefers-color-scheme: dark)");
const systemDark = ref(media.matches);
```

## Comments

Concise, simple, as-needed. Every function gets a JSDoc block comment (`/** */`) concisely describing what it does. Avoid redundant inline comments that restate the code.

**Punctuation:** No em-dashes, en-dashes, or semicolons in comments. Prefer starting a new sentence. Comments do not end in a period. Use periods only to separate multiple sentences on the same line, and the final sentence still gets no trailing period.

```typescript
// Good - JSDoc function comment, no trailing period
/**
 * Flips to the opposite of whatever is currently showing
 */
const toggle = () => { ... };

// Bad - em-dash and trailing period
// Flips the theme — system resolves first.
```

## Dependencies

Prefer popular, well-maintained packages over hand-rolling functionality for anything with a standard. Avoid general-purpose utility packages like `lodash` to keep bundle size in check; import only focused, single-purpose packages.

## Vue / Frontend

**Component Organization:** One component per section in `src/components/`. Small, one-time-use markup can stay inline in its parent. Larger or reusable pieces get their own file.

**Content vs markup:** All copy, links, and profile data live in `src/data.ts`. Components render data, they do not embed prose.

**Icons:** Inline SVG only. No emojis or unicode symbols as icons. Terminal ASCII art (tree glyphs, interpuncts) is content, not iconography.

## Typography

| Font                | Class          | Usage                                                     |
| ------------------- | -------------- | --------------------------------------------------------- |
| Bricolage Grotesque | `font-display` | Headings, titles (`font-semibold` to `font-extrabold`)    |
| Instrument Sans     | `font-sans`    | Body, UI (default, `font-normal` to `font-medium`)        |
| JetBrains Mono      | `font-mono`    | Labels, terminal, meta (`font-normal` to `font-semibold`) |

## Theming

Hex colors in CSS vars, defined in `src/style.css` (`:root` for light, `.dark` overrides) and exposed to Tailwind via `@theme inline`. Light/dark via `.dark` class on `<html>`, applied pre-paint by the inline script in `index.html`. Rust-orange accent (`--c-accent`), warm paper light theme, deep ink dark theme. The stack terminal stays dark in both themes.

Semantic tokens: `bg`, `surface`, `ink` (text), `soft` (muted text), `line` (borders), `accent`, `accent-soft`. Use these, never raw hex in components.

## Motion

Load-in stagger via `.rise` (hero only), scroll reveal via the `v-reveal` directive. All animation respects `prefers-reduced-motion`.
