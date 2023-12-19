const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://10.170.13.106:3004",
      secure: false,
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api": "",
      // },
    })
  );
};
