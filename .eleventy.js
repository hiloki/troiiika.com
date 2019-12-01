const moment = require("moment");
const localImages = require("eleventy-plugin-local-images");

moment.locale("ja");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateIso", date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return moment(date).format("LL"); // E.g. May 31, 2019
  });

  eleventyConfig.addPlugin(localImages, {
    distPath: "_site",
    assetPath: "/assets/img",
    selector: "img",
    verbose: false
  });
};
