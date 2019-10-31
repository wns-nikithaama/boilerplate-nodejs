const { name, description, author } = require("../package.json");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: name,
      description: description,
      contact: {
        author
      }
    }
  },
  // ['.routes/*.js']
  apis: ["src/routes/**/*.js"]
};

module.exports = swaggerOptions;
