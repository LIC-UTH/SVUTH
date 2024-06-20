const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://uth-api-boot.ut.edu.vn/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/v1", // rewrite path to include /api/v1
      },
    })
  );
};
