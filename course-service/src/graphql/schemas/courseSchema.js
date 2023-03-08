import { gql } from 'apollo-server-express';

const courseTypeDefs = gql`
  type Admin {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  input CreateAdminInput {
    name: String!
    email: String!
    password: String!
  }

  type AdminLoginResponse {
    token: String!
    admin: Admin!
  }

  type Query {
    adminProfile: Admin!
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin!
    adminLogin(email: String!, password: String!): AdminLoginResponse!
  }
`;

module.exports = courseTypeDefs;
