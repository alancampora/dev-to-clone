import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: String!
    email: String!
    password: String!
  }
  type Post {
    id: String!
    user: User!
    content: String!
    title: String!
  }
  type Query {
    user(id: String): User
    post(id: String): Post
  }
`;

export default typeDefs;
