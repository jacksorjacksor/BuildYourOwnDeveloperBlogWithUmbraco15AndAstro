module.exports = {
  "umbraco-api": {
    input: {
      target: "http://localhost:48006/umbraco/swagger/delivery/swagger.json",
      validation: false,
    },
    output: {
      baseUrl: "http://localhost:48006/",
      mode: "tags-split",
      target: "./src/umbraco-client/client.ts",
      schemas: "./src/umbraco-client/model",
      client: "fetch",
    },
  },
};
