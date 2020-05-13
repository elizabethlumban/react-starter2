
const express = require("express"); // eslint-disable-line
const path = require("path"); // eslint-disable-line
const helmet = require("helmet"); // eslint-disable-line
const request = require("request"); // eslint-disable-line
const urljoin = require("url-join"); // eslint-disable-line
const _ = require("lodash"); // eslint-disable-line
const fs = require("fs"); // eslint-disable-line
const cors = require("cors"); // eslint-disable-line

// Load the config
const server = process.env.API_LOCATION;

const htmlLocation = path.join(__dirname, "build", "index.html");

// Inject the runtime variables:
const initialHtmlContent = fs.readFileSync(htmlLocation, "utf8");
const htmlWithVariables = initialHtmlContent.replace(
  "%APPLICATION_ENVIRONMENT%",
  process.env.APPLICATION_ENVIRONMENT || "dev"
);
fs.writeFileSync(htmlLocation, htmlWithVariables);

// The app server
const app = express();

// Require HTTPS
// Add a handler to inspect the req.secure flag (see
// http://expressjs.com/api#req.secure). This allows us
// to know whether the request was via http or https.
app.enable("trust proxy");
app.use((req, res, next) => {
  if (req.secure || isDev()) {
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect("https://" + req.headers.host + req.url);
  }
});

// Guard the app ...
app.use(helmet());

// Allow CORS
app.use(cors());

// Proxy the API
app.use("/api", (req, res) => {
  var url = urljoin(server, req.url);

  // Options to add API Connect headers
  var requestOptions = {
    url,
    headers: {},
  };

  try {
    req.pipe(request(requestOptions)).pipe(res);
  } catch (e) {
    console.log(e);
  }
});

// Serve the static content
app.use(express.static(path.join(__dirname, "build")));

// Direct all requests to the main page so they can be handled by React Router
app.get("/*", function(req, res) {
  res.sendFile(htmlLocation);
});

// Let's start ...
const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) {
    console.log(`App crashed: ${err}`);
  } else {
    console.log(`Listening on port11 ${port}`);
  }
});
