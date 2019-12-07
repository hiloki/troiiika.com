const moment = require("moment");
const localImages = require("eleventy-plugin-local-images");
const CleanCSS = require("clean-css");

moment.locale("ja");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateIso", date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return moment(date).format("LL"); // E.g. May 31, 2019
  });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets/img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("assets/css");
};
