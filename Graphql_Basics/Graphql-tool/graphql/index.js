const  { loadSchemaSync } = require ('@graphql-tools/load');
const  { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const  { join } = require ('path');

// const typeDefs1 = require('./mySchemas/post1');
// const resolvers1 = require('./resolvers/post1');

// const typeDefs1 = loadSchemaSync(join(__dirname, './mySchemas/post1.graphql'), { loaders: [new GraphQLFileLoader()] });

const combineTypeDefs = require('./mySchemas');
const combineResolvers = require('./resolvers');

const mySchema = makeExecutableSchema({
  typeDefs:combineTypeDefs,
  resolvers:combineResolvers
});

module.exports = mySchema;

