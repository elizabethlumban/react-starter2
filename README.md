# React Redux Starter Project

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It configures and demonstrates:

- [Redux](http://redux.js.org/);
- [React Router v4 and Redux React Router](https://github.com/ReactTraining/react-router);
- [Material UI](http://www.material-ui.com/#/) components;
- [Redux-Form](https://github.com/erikras/redux-form) and its [Material-UI integration](https://github.com/erikras/redux-form-material-ui);
- [Redux Promises Middleware](https://github.com/pburtchaell/redux-promise-middleware);
- API integration with native fetch (via promises);
- Unit testing with [Jest](https://www.npmjs.com/package/jest) and [Enzyme](https://github.com/airbnb/enzyme);
- Reverse proxy for the API server;

## Overview

The `react-redux-starter` project is a single page React/Redux app.
It relies that a server `express-starter` is running.
The following diagram depicts how it all fits together:

<img src="https://git.ng.bluemix.net/bluemix-garage-melbourne/react-redux-starter/raw/master/docs/Architectural%20Overview.jpg" alt="Architectural Overview" height="700px">

The end user requests arrive at the `react-redux-starter` endpoint.
The web user interface is packaged as static web content (html,css,js etc.) 
and is served by the `react-redux-starter` web server. 
The end user needs to load the web content just once, after which it 
executes in their browser.

The web app running in the user's browser makes API calls to its server at the `/api` endpoint. 
Since, the web app itself was downloaded from the `react-redux-starter` 
endpoint there are no CORS security issues.
The endpoint acts as a reverse proxy and transfers all API request 
to the `express-starter`.

## Development use

In local environment, first you need to start an instance of 
[express-starter](https://git.ng.bluemix.net/bluemix-garage-melbourne/express-starter).

Then you need to set-up and start the app:

```bash
# Installs the Node version defined in .nvmrc
nvm install && npm install

# Runs the app in a hot-swapping mode
npm run start-dev
```

To run the tests:

```bash
npm run test
```

## Production use

To prepare a production build, first we need to build the web resources:

```bash
npm run build
```

Now we can start the app by specifying back end server via `API_ENDPOINT`:

```bash
API_ENDPOINT='server-location' npm start
```

Alternatively, we could use the `.env` to define such environment vars.