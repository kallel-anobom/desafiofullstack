const Koa = require("koa");
const { ApolloServer } = require('apollo-server-koa');

const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () => console.log(`listening at port ${port}`));
