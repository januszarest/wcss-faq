# Pwr WCSS Migration Faq

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── css/
|       └── style.css
│   ├── img/
│       ├── page_01/
│           └── ... images
│       ├── ...
│           └── ... images
│       └── page_10/
│           └── ... images
│   ├── favicon.svg
|   └── logo-wcss.svg

├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── faq/
│           ├── index.astro
│           ├── page_01.md
│           ├── ...
|           └── page_10.md
│       ├── index.md
│       └── contact.md
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
