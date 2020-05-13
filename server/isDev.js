const isDev = ["dev", "development"].includes(process.env.NODE_ENV);
module.exports = isDev;
