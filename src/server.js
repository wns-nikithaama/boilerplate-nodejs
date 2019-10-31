const app = require("./app");
const { name } = require("../package.json");

const server = app.listen(process.env.PORT || 3000, () => {
  const address = server.address();

  console.log(`${name} listening on port ${address.port}!`);
});
