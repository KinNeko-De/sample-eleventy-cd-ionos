import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    dir: {
      input: "src", // default value is "."
      output: "_site" // is the default value
    }
  };
};