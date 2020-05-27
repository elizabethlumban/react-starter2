This is a react starter with redux. This is deployed in OCP 4.3 using odo. This calls the backend code from this repo
https://github.com/elizabethlumban/odo-api2.

## Prerequisite

Use node v12.11.1.
Install the https://github.com/elizabethlumban/odo-api2 first and get the url.
You can login to your OCP cluster by,

```
oc login --token=g0hTBBBBUUj9v85hPNyxxxx --server=https://c1111-e.gb.containers.cloud.ibm.com:78932
```

## Installation

In the project directory, run:

```
odo project set sampleproject
odo create nodejs:12 odo-ui
odo url create --secure
odo config set --env API_LOCATION=<url of the api> --env NODE_ENV=production
odo push
```
