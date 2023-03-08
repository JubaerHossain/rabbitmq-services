import path from "path";
import { makeExecutableSchema } from 'graphql-tools';
import {courseCategoryResolver} from '../resolvers/courseCategoryResolver';
const schema = makeExecutableSchema({
    typeDefs: path.resolve(__dirname, "schema.gql"),
    resolvers: courseCategoryResolver,
});

export default schema;