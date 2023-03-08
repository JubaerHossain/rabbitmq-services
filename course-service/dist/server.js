"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const app = (0, express_1.default)();
// Set up cors middleware
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
// Set up body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Set up cookie parser middleware
app.use((0, cookie_parser_1.default)());
const typeDefs = (0, apollo_server_express_1.gql) `
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
};
// Set up apollo server middleware
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
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
//# sourceMappingURL=server.js.map