const withTypescript = require("@zeit/next-typescript");
const withImages = require("next-images");

module.exports = withTypescript({
  useFileSystemPublicRoutes: false,
});
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
