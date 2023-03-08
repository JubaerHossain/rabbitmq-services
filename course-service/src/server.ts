import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import courseTypeDefs from "./graphql/schemas/courseSchema";

const app = express();

// Set up cors middleware
app.use(morgan("dev"));
app.use(cors());

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up cookie parser middleware
app.use(cookieParser());

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

// Set up apollo server middleware
const server = new ApolloServer({
  typeDefs: [courseTypeDefs],
  resolvers,
  context: ({ req, res }) => ({ req, res }),
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server.start().then(() => {
  server.applyMiddleware({
    app,
    cors: true,
  });
});

// Set up port

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
