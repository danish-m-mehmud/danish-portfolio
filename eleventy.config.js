export default function (config) {
  config.addPassthroughCopy("src/assets");
  config.addCollection("work", (collection) =>
    collection.getFilteredByTag("project").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src" },
    markdownTemplateEngine: false
  };
}
