# Code Style

## Formatting

Oxfmt: tabs (width 4), double quotes, semicolons, trailing commas, 120 char width. Oxlint: no `any`, no unused vars, no non-null assertions. `bun run lint` to lint, `bun run format` to fix formatting.

### Blank Lines

Blank line after multi-line block (3+ lines) when followed by another statement. Single-line pairs fine. Single line then multi-line fine. Only multi-line then next statement needs the blank line.

```typescript
// Good
button?.addEventListener("click", () => {
	const dark = !root.classList.contains("dark");
	apply(dark);
});

apply(root.classList.contains("dark"));

// Good - single lines together
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");
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

## Astro / Frontend

**Component Organization:** Pages in `src/pages/`, the shared shell in `src/layouts/Layout.astro`, one component per section in `src/components/`. Small, one-time-use markup can stay inline in its parent. Larger or reusable pieces get their own file.

**Content vs markup:** All copy, links, and profile data live in `src/data.ts`. Components render data, they do not embed prose.

**JavaScript:** The site ships static HTML. Keep client scripts to small inline `<script>` blocks in the component that needs them. No UI framework islands unless something genuinely needs one.

**Icons:** Inline SVG only. No emojis or unicode symbols as icons. Terminal ASCII art (tree glyphs, interpuncts) is content, not iconography.

## Typography

| Font              | Class       | Usage                                                                 |
| ----------------- | ----------- | --------------------------------------------------------------------- |
| Schibsted Grotesk | `font-sans` | Headings and body (default). Headings `font-semibold` to `font-bold`  |
| JetBrains Mono    | `font-mono` | The `~/` mark, prompts, the stack terminal and dates (`tabular-nums`) |

One family carries the whole hierarchy through size, weight and tracking. Headings track tight (`-0.02em` to `-0.04em` for the hero name), body copy sits at a 60 to 68ch measure with `leading-relaxed`. Figures inside experience highlights are set in heavier ink by `splitFigures`. Mono is for code, data and dates only, never decoration.

## Theming

Hex colors in CSS vars, defined in `src/style.css` (`:root` for light, `.dark` overrides) and exposed to Tailwind via `@theme inline`. Light/dark via `.dark` class on `<html>`, applied pre-paint by the inline script in `Layout.astro`. Neutral grounds: soft off-white light theme (`#f6f6f4`), deep neutral charcoal dark theme (`#121212`). Orange is a precise accent for links, the primary button, role titles and small highlights. The stack terminal stays dark in both themes.

Semantic tokens: `bg`, `surface`, `ink` (text), `soft` (muted text), `line` (borders), `accent` (accent text, AA on `bg`), `accent-fill` (primary button fill), `on-accent` (text on `accent-fill`, white in light and charcoal in dark), `accent-soft`, `term` (terminal ground). Use these, never raw hex in components. Selection, focus rings, caret and scrollbar are themed from the same tokens in `style.css`.

## Motion

One authored moment: the hero settles in on load through `.settle`, a short opacity, rise and unblur with an exponential ease-out, staggered by an inline `--i` index. Everything else is static apart from small hover transitions. All animation is disabled under `prefers-reduced-motion`.
