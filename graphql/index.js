var { resolvers } = require("./src/resolvers");
var { typeDefs } = require("./src/typedefs");
var { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(function() {
  console.log("Server is running on localhost:4000");
});
