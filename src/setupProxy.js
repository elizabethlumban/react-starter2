const proxy = require("http-proxy-middleware"); // eslint-disable-line

// "apiEndpoint": "http://localhost:3001/api",
// "X-IBM-CLIENT-ID": "API connect client id",
// "X-IBM-CLIENT-SECRET": "API connect secret",
// "x-apic-secret": "secret"

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target:
        "https://odo-api-8080-app-dev-eol2.ocp-sandbox-4312-2e9fdd63bc941193875efba99fa46e92-0000.au-syd.containers.appdomain.cloud/api",
    })
  );
};
