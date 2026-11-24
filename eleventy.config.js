import { readFileSync } from "node:fs";

const skills = JSON.parse(readFileSync(new URL("./src/_data/skills.json", import.meta.url), "utf8"));

export default function (config) {
  config.addPassthroughCopy("src/assets");
  const iconPaths = new Set(skills.flatMap(({ tools }) => tools.map(({ icon }) => icon)).filter(Boolean));
  for (const icon of iconPaths) {
    config.addPassthroughCopy({
      ["node_modules/devicon/icons/" + icon + ".svg"]: "assets/icons/" + icon + ".svg"
    });
  }
  config.addPassthroughCopy({ "node_modules/devicon/LICENSE": "assets/icons/LICENSE" });
  config.addCollection("work", (collection) =>
    collection.getFilteredByTag("project").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src" },
    markdownTemplateEngine: false
  };
}
