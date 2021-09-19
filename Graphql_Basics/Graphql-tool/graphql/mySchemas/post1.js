// When using Javascript
const typeDefs1 = `

  type Post {
    id: ID!
    title: String
    votes: Int
  }

  type Query {
    posts: [Post]
  }

`;

module.exports = typeDefs1;

