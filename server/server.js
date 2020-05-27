const express = require('express'); // eslint-disable-line
const path = require('path'); // eslint-disable-line
const helmet = require('helmet'); // eslint-disable-line
const request = require('request'); // eslint-disable-line
const urljoin = require('url-join'); // eslint-disable-line
const cors = require('cors');

const dotenv = require('dotenv');

const buildLocation = path.join(__dirname, '..', 'build');
const htmlLocation = path.join(__dirname, '..', 'build', 'index.html');

// Load the config
dotenv.config();

// Get the location of the API
/* const apiServer =
  "https://odo-api-8080-app-dev-eol2.ocp-sandbox-4312-2e9fdd63bc941193875efba99fa46e92-0000.au-syd.containers.appdomain.cloud/api";

const isDev = "production"; */

const apiServer = process.env.API_LOCATION;

const isDev = process.env.NODE_ENV;

// The app server
const app = express();
app.set('trust proxy', 1); // trust first proxy
app.enable('trust proxy');
app.use((req, res, next) => {
  if (req.secure || isDev) {
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});

// Common middleware
app.use(helmet());
app.use(cors());

// Serve the static content before any authentication
app.use(express.static(buildLocation));
// Direct all left over requests to the main page so they can be handled by React Router
app.use((req, res, next) => {
  const path = req.path;
  if (req.method == 'GET' && path && path !== '/' && !path.startsWith('/auth/') && !path.startsWith('/api/')) {
    res.sendFile(htmlLocation);
  } else {
    next();
  }
});

// Proxy the API
app.use('/api', (req, res, next) => {
  const url = urljoin(apiServer, req.url);

  var requestOptions = { url, headers: {} };

  try {
    console.log('process.env.API_LOCATION...', process.env.API_LOCATION);
    req.pipe(request(requestOptions)).pipe(res);
  } catch (e) {
    console.log(e);
  }
});
const port = process.env.PORT || 8080;
app.listen(port, err => {
  if (err) {
    console.log(`App crashed: ${err}`);
  } else {
    console.log(`Listening on port 77${port}`);
  }
});
