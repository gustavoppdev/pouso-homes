# Pouso — Design

## 1. Concept

**Pouso** builds prefab modular houses for countryside, mountain and coastal plots: factory-made modules, trucked to the site and assembled in days. The audience is couples and families, 30 to 55, who own (or are looking for) a plot and want a weekend house without a long construction.

The one idea: **the photograph is the landscape, the page is the module.** Photography carries the landscape; the interface is a quiet, precise system of light type, pale warm-grey surfaces and charcoal, the color of charred timber, so the photographs are the only color on the page. The single loud element is the giant lowercase `pouso` wordmark closing the page.

Every model is built from standard 3 × 6 m modules, so the brand mark and each model card draw the house as a **module plan**: rectangles seen from above. It is information, not decoration: it tells how many modules a model uses.

## 2. Color

Pale warm-grey background (neutral, never cream), white cards, charcoal primary, and a near-black as the footer surface (`bg-foreground`). Charcoal is charred timber: an almost monochrome, architectural palette where the only color on the page comes from the photographs. Actions stand out by shape (dark pills) and position, not by hue.

| Slot                                         | Value                        | Hex       |
| -------------------------------------------- | ---------------------------- | --------- |
| `--background`                               | `oklch(0.962 0.003 70)`      | `#f4f2f0` |
| `--foreground`                               | `oklch(0.22 0.008 60)`       | `#1d1a17` |
| `--card` / `--popover`                       | `oklch(1 0 0)`               | `#ffffff` |
| `--card-foreground` / `--popover-foreground` | `oklch(0.22 0.008 60)`       | `#1d1a17` |
| `--primary`                                  | `oklch(0.3 0.012 60)`        | `#322c28` |
| `--primary-foreground`                       | `oklch(0.985 0.003 70)`      | `#fbfaf8` |
| `--secondary`                                | `oklch(0.92 0.005 70)`       | `#e7e4e1` |
| `--secondary-foreground`                     | `oklch(0.26 0.01 60)`        | `#28231f` |
| `--muted`                                    | `oklch(0.935 0.004 70)`      | `#ebe9e7` |
| `--muted-foreground`                         | `oklch(0.48 0.01 60)`        | `#625c58` |
| `--accent`                                   | `oklch(0.9 0.008 70)`        | `#e1ddd8` |
| `--accent-foreground`                        | `oklch(0.26 0.01 60)`        | `#28231f` |
| `--destructive`                              | `oklch(0.52 0.18 28)`        | `#ba2c25` |
| `--success`                                  | `oklch(0.47 0.09 160)`       | `#216a49` |
| `--success-foreground`                       | `oklch(0.985 0.003 70)`      | `#fbfaf8` |
| `--border`                                   | `oklch(0.88 0.005 70)`       | `#dad7d4` |
| `--input`                                    | `oklch(0.6 0.01 60)`         | `#857f7a` |
| `--ring`                                     | `oklch(0.45 0.015 60)`       | `#5c534d` |
| `--selection` / `--selection-foreground`     | primary / primary-foreground |           |

| Pair                             | Ratio | Min |
| -------------------------------- | ----- | --- |
| foreground / background          | 15.51 | 4.5 |
| card-foreground / card           | 17.32 | 4.5 |
| primary-foreground / primary     | 13.19 | 4.5 |
| secondary-foreground / secondary | 12.28 | 4.5 |
| accent-foreground / accent       | 11.50 | 4.5 |
| success-foreground / success     | 6.25  | 4.5 |
| muted-foreground / background    | 5.89  | 4.5 |
| muted-foreground / muted         | 5.43  | 4.5 |
| destructive / background         | 5.41  | 4.5 |
| selection-foreground / selection | 13.19 | 4.5 |
| input / background               | 3.54  | 3   |
| ring / background                | 6.72  | 3   |
| primary / background             | 12.32 | 3   |

On dark surfaces (footer, text over photos) the focus ring switches to `--background` (15.51 on foreground).

## 3. Typography

**Funnel Display** (300) for display, headings, stats and the wordmark; **Funnel Sans** (400/500) for everything else. The pair shares a skeleton, so the page reads as one voice; Display's light cut gives an airy, precise tone without falling back on a generic geometric sans. Sentence case everywhere, no eyebrow labels above headings.

| Role      | Size                                          | Line height | Tracking | Weight |
| --------- | --------------------------------------------- | ----------- | -------- | ------ |
| `display` | `clamp(2.5rem, 1.6rem + 3.6vw, 4.75rem)`      | 1.04        | -0.03em  | 300    |
| `h1`      | `clamp(2.25rem, 1.8rem + 2vw, 3.5rem)`        | 1.08        | -0.025em | 300    |
| `h2`      | `clamp(1.875rem, 1.4rem + 2vw, 3rem)`         | 1.12        | -0.02em  | 300    |
| `h3`      | `clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)` | 1.3         | -0.005em | 400    |
| `lead`    | `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)`     | 1.6         | 0        | 400    |
| `body`    | `1rem`                                        | 1.6         | 0        | 400    |
| `small`   | `0.875rem`                                    | 1.5         | 0.005em  | 400    |
| `stat`    | `clamp(3.5rem, 2.2rem + 5vw, 6.5rem)`         | 0.95        | -0.045em | 300    |

The footer wordmark is an SVG `<text>` fitted to the container width (`textLength`), so it is not a type role.

## 4. Shape & space

- `--radius-control`: `999px`. Every action and field is a pill.
- `--radius-card`: `0.25rem`. Cards read as panels, almost square.
- `--radius-media`: `0.125rem`.
- `--shadow-card`: a 1px hairline ring, `0 0 0 1px oklch(0.22 0.008 60 / 0.08)`. No soft shadows.
- `--shadow-overlay`: `0 24px 60px -20px oklch(0.22 0.008 60 / 0.35)` for menus, selects and dialogs only.
- `--spacing-section`: `clamp(4.5rem, 2.5rem + 7vw, 9rem)`
- `--spacing-gutter`: `clamp(1rem, 0.4rem + 2.8vw, 2.75rem)`
- `--container-page`: `80rem`
- Interaction: `--duration-fast` 120ms, `--duration-base` 260ms, `--ease-interaction` `cubic-bezier(0.25, 1, 0.5, 1)`.

## 5. Motion

The orchestrated moment is the **hero**: the photo settles from a 1.06 scale, then the headline lines, the lead and the quote bar arrive in a stagger. The headline (LCP) moves by `transform` only.

Menu items:

- **Counters** on the four stats, which are real numbers in the copy.
- **Stagger** in the model grid, the only list that reveals.
- **Mask reveal** on the footer wordmark, opening from its center once.

Nothing else reveals on scroll: the rest of the page is already there.

One-off effect: the hero photo settles from `scale(1.06)` to `1` over `duration.hero × 2` (`components/hero/hero-photo.tsx`). Transform only, off under reduced motion.

Hover, varied by element:

- Primary buttons: a light wash slides in from the left over the charcoal.
- Arrow buttons (deliveries carousel): the icon travels out and back in.
- Model cards: the photo scales to 1.03 inside its frame and the plan pictogram fills.
- Nav links: an underline draws from the left.
- Footer links: text rolls up to a duplicate.

`motion.ts`: `duration.enter` 0.8, `duration.hero` 0.9, `ease.enter` `[0.16, 1, 0.3, 1]`, `distance.reveal` 20, `stagger.children` 0.07, `stagger.hero` 0.14, `viewport.margin` `0px 0px -10% 0px`, `press.scale` 0.97, `parallax.range` 0.06.

## 6. Layout

Section anchors: `about`, `deliveries`, `models`, `quote`. Content is left-aligned throughout; only the quote card centers.

### Header

Overlays the hero, transparent with dark text over the calm sky the hero photo keeps in its top quarter, and turns solid (`background`, hairline bottom border) once the top 40% of the hero scrolls under it.

Links are small, quiet text at 70% opacity; the active section gets full opacity and a dot before it, and hover draws an underline. The locale switcher is plain text, `PT / EN`, with the current locale in medium weight. Both inherit the header's color, so they work on the photo and on the solid bar alike.

```
desktop
[■ pouso]        Sobre  Entregas  • Modelos  Orçamento        PT / EN  (Pedir orçamento)
mobile
[■ pouso]                                          (menu)
```

### Hero

Full-bleed photo, `min-h-svh` on mobile and 92svh on desktop. A localized bottom scrim carries the text (stronger below `sm`, where the headline sits over brighter grass). Contrast measured on the photo: headline ≥ 5.2:1, lead ≥ 5.9:1, header links ≥ 5.0:1.

```
desktop
┌──────────────────────────────────────────────────────────────┐
│ header                                                       │
│                                                              │
│                    (photo: house on a slope)                 │
│                                                              │
│ Sua casa no campo,                ┌───────────────────────┐  │
│ pronta em 90 dias.                │ Modelo ▾  (Pedir orç.)│  │
│ lead line                         └───────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
mobile
┌──────────────────┐
│ header           │
│   (photo)        │
│                  │
│ Sua casa no      │
│ campo, pronta    │
│ em 90 dias.      │
│ lead             │
│ ┌──────────────┐ │
│ │ Modelo ▾     │ │
│ │(Pedir orçam.)│ │
│ └──────────────┘ │
└──────────────────┘
```

The quote bar is a model select and a button. It scrolls to `#quote` with the model preselected in the form.

### About + stats

```
desktop
Uma casa de verdade,              lead paragraph (2–3 lines)
feita em fábrica e montada        (Ver modelos)
no seu terreno.
┌────────────┬────────────┬────────────┬────────────┐
│ caption    │ caption    │ caption    │ caption    │
│            │            │            │            │
│ 90 dias    │ 312        │ 3 dias     │ 10 anos    │
└────────────┴────────────┴────────────┴────────────┘
mobile: statement → lead → button, stats in a 2×2 grid
```

### Recent deliveries (index + photo)

Proof, not catalog: three delivered houses with place, model, assembly time and area. All three are visible at once; a carousel was replaced because it hid two of them.

```
desktop (tabs, vertical)
Entregas recentes
──────────────────────────────  ┌──────────────────────────┐
• Casa na serra, Cunha (SP)     │                          │
  Modelo Serra  3 dias  54 m²   │   (photo of the active   │
──────────────────────────────  │    delivery, 4:3)        │
  Casa de praia, Praia do Rosa  │                          │
  Modelo Ripa  2 dias  36 m²    └──────────────────────────┘
──────────────────────────────  story, 2–3 lines
  Casa de campo, S. B. Sapucaí  (Quero uma parecida)
  Modelo Varanda  3 dias  36 m² + varanda
──────────────────────────────
mobile: the three deliveries stacked, each with photo, title, chips, story and CTA
```

Inactive items sit at 70% opacity; the active one gets a dot, like the nav. Hover (mouse only), click and arrow keys select. Photos crossfade (all three stay mounted, so the swap is instant); the story fades in with `duration.enter / 2`. One-off component: `components/deliveries/deliveries-index.tsx`.

### Models (grid)

```
desktop (3 × 2)
Seis modelos, de 1 a 4 módulos                     (Pedir orçamento)
┌───────────┐ ┌───────────┐ ┌───────────┐
│[a partir  │ │[a partir  │ │[a partir  │
│ de R$…]   │ │ de R$…]   │ │ de R$…]   │
│  (photo)  │ │  (photo)  │ │  (photo)  │
├───────────┤ ├───────────┤ ├───────────┤
│ Casulo  ▭ │ │ Ripa   ▭▭ │ │ Varanda ▭▭│
│ [36 m²][1 quarto][1 banh.]│ ...
│ Orçar este modelo         │
└───────────┘ ...
mobile: one column; tablet: two columns
```

The plan pictogram (top right of each card body) draws the model's modules. "Orçar este modelo" preselects it in the form.

### Quote

```
desktop
┌──────────────────────────────────────────────────────────────┐
│                (full-bleed photo: plot at dusk)              │
│              ┌───────────────────────────────┐               │
│              │ Receba um orçamento para o    │               │
│              │ seu terreno                   │               │
│              │ Nome                          │               │
│              │ E-mail                        │               │
│              │ WhatsApp                      │               │
│              │ Modelo ▾                      │               │
│              │ (Pedir orçamento)             │               │
│              │ consent                        │               │
│              └───────────────────────────────┘               │
└──────────────────────────────────────────────────────────────┘
mobile: photo band (16:9) on top, form card overlapping it by 3rem, then full width
```

### Footer

Near-black surface (`bg-foreground text-background`).

```
tagline (3 short lines)     contato@…  telefone  endereço     Instagram
                                                               YouTube
p o u s o   (wordmark spanning the full container width)
© 2026 Pouso      demo notice      Privacidade
mobile: columns stack, wordmark keeps full width
```
