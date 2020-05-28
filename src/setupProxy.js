const proxy = require("http-proxy-middleware"); // eslint-disable-line

// "apiEndpoint": "http://localhost:3001/api",
// "X-IBM-CLIENT-ID": "API connect client id",
// "X-IBM-CLIENT-SECRET": "API connect secret",
// "x-apic-secret": "secret"

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target:
        // ,
        process.env.API_LOCATION
    })
  );
};
