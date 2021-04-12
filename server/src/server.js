const Koa = require("koa");
const cors = require('@koa/cors');
const { ApolloServer } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser-graphql');

const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();

app.use(bodyParser());
app.use(cors());

const port = 4000;

server.applyMiddleware({ app, cors: { origin: "*", credentials: true }, path: "/graphql"});

app.listen(port, () => console.log(`listening at port ${port}`));
