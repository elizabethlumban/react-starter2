const express = require('express');
const path = require('path');
const helmet = require('helmet');
const request = require('request');
const urljoin = require('url-join');
const _ = require('lodash');

// Load the dotenv config. Get all extra headers from .env
require('dotenv').config();
const server = process.env.API_ENDPOINT;
const headers = {};
for (let key in process.env) {
  if (key.startsWith('API_HEADER_')) {
    const headerName = key.replace('API_HEADER_');
    headers[headerName] = process.env[key];
  }
}

// The app server
const app = express();

// Guard the app ...
app.use(helmet());

// Proxy the API
app.use('/api', (req, res) => {
  var url = urljoin(server, req.url);

  // Options to add API Connect headers
  var requestOptions = { url, headers };

  req.pipe(request(requestOptions)).pipe(res);
});

// Serve the static content
app.use(express.static(path.join(__dirname, 'build')));

// Direct all requests to the main page so they can be handled by React Router
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Let's start ...
const port = process.env.PORT || 3001;
app.listen(port, err => {
  if (err) {
    console.log(`App crashed: ${err}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
