# Danish M. Mehmud | Engineering Portfolio

A portfolio for Danish M. Mehmud, a Forward Deployed Engineer based in New York. It covers customer-facing product delivery, full-stack systems, and applied AI through five case studies: Atomic, a compliance training LMS, Talent Bridge, facility monitoring, and eCommerce delivery.

The homepage includes professional experience, technical skills, and contact links. Each case study explains the problem, Danish’s role, the implementation, and the production outcome.

## Hosting

Configured for Vercel. The production URL will be available after the GitHub repository is connected and the first deployment succeeds.

Vercel builds the site from the `main` branch. Automatic deployments from other branches are disabled in `vercel.json`.

## Local development

The static site uses Eleventy, Markdown, Nunjucks, and CSS. Bun installs dependencies and runs the build.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` to generate the static site in `_site/`. Edit the homepage and experience in `src/index.md`, case studies in `src/projects/`, and the skills list in `src/_data/skills.json`. Technology icons are served locally from [Devicon](https://github.com/devicons/devicon).

## Contact

[LinkedIn](https://www.linkedin.com/in/danishmmehmud/) · [Email](mailto:danishmehmud.works@gmail.com)
