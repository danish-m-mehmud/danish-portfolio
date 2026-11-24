# Danish M. Mehmud Portfolio

An Eleventy portfolio with Markdown content in `src/index.md` and `src/projects/`.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` to generate the static site in `_site/`.

Technology logos are served locally from [Devicon](https://github.com/devicons/devicon) under its MIT license.

## Deploy to Vercel

In Vercel, choose **Add New → Project** and import `danish-m-mehmud/danish-portfolio`. Grant the Vercel GitHub app access to that repository if it is missing from the list. Keep the root directory at the repository root and select **Deploy**.

Vercel uses the build settings in `vercel.json`. Pushes to `main` create production deployments after the repository is connected.
