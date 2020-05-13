/* const isDev = ["dev", "development"].includes(process.env.NODE_ENV);
module.exports = isDev;


 */

let modules = {
  isDev: isDev,
};
module.exports = modules;
function isDev() {
  return ["dev", "development"].includes(process.env.NODE_ENV);
}
