const path = require("path");

module.exports = {
  images: {
    domains: ["cdn.snappfood.ir"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
      @import "src/styles/_custom-variables.scss";
      `,
  },
};
