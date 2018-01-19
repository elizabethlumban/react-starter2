const express = require('express');
const path = require('path');
const helmet = require('helmet');
const request = require('request');
const urljoin = require('url-join');
const basicAuth = require('express-basic-auth');

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
    const url = urljoin(server, req.url);

    // Options to add API Connect headers
    const requestOptions = { url, headers };

    req.pipe(request(requestOptions)).pipe(res);
});

// Set up basic auth
const user = process.env.BASIC_AUTH_USER || 'admin';
const pass = process.env.BASIC_AUTH_PASS || 'admin';
app.use(
    basicAuth({
        users: { [user]: `${pass}` },
        challenge: true,
        realm: 'Imb4T3st4pp'
    })
);

// Serve the static content
app.use(express.static(path.join(__dirname, 'build')));

// Direct all requests to the main page so they can be handled by React Router
app.get('/*', (req, res) => {
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
