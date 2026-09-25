# Chop Chop

Landing page for Chop Chop, a fictional Kombos food-delivery app. Built from the design handoff in this folder (`style-guide.md`, `comp-desktop.png`, `comp-mobile.png`, and `assets/`).

## Stack

Vite, TypeScript, and Tailwind CSS v4. The page chrome is in `index.html`. Dish cards and delivery areas are typed records in `src/menu.ts` and rendered by `src/main.ts`. Colours and the system font live only in the `@theme` block in `src/style.css`. No hex values belong in the HTML.

Vite serves `assets/` as the public directory, so images are referenced from the site root (`/logo.svg`, `/phone.svg`, `/dish-1.svg`, and so on).

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` typechecks with `tsc`, then writes the production site to `dist/`.

## Design rules

Follow `style-guide.md`. In short:

- Fifteen named colours only, after `--color-*: initial` in `@theme`. `chop` is the button fill, `chop-dark` is orange text on light backgrounds, and `chop-light` is orange text on the dark bands.
- Mobile first. Unprefixed classes are the phone layout. `sm:` (40rem) turns the header, steps, cards, areas, and footer into rows or two columns. `lg:` (64rem) puts the hero side by side, raises the heading to `text-5xl`, and makes the card and area grids three columns.
- Headings, buttons, prices, step numbers, and badges are `font-semibold`. Nothing on the page is `font-bold`. There are no shadows.
- Hover and keyboard focus are specified in the style guide. Footer links change colour and do not move.

Add buttons are visual only. This handoff is a landing page, not a cart. Footer items with no page in the handoff (Join as a kitchen, Rates with us, Contact, Terms) are styled links with `href="#"`.

## Repository

Public GitHub repo: https://github.com/Ebrima220/chop-chop

The git root is this folder. `main` tracks `origin/main`. Do not initialise a repo in the parent course directory.

`.gitignore` excludes `node_modules`, `dist`, `.vercel`, `*.local`, and `.env*`. Do not commit `.env.local`; Vercel writes a local token there.

## Deploy

Vercel project on the personal hobby account `ebrima` (user `ebrima220`). It is not on the Tritech team.

- Site: https://chop-chop-chi.vercel.app
- Project: https://vercel.com/ebrima/chop-chop

The GitHub repo is connected, so pushes to `main` redeploy. Deploy commands must pass the personal scope:

```bash
npx vercel --prod --yes --scope ebrima
```

A plain `git push` to GitHub can time out with HTTP 408 from this machine. This push succeeded:

```bash
git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push origin main
```

Git has no name or email configured here, and that config should stay unset. Commits in this repo were authored as `Ebrima220` with `191482393+Ebrima220@users.noreply.github.com` through environment variables for that one command.
