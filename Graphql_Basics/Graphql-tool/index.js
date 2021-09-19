const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const mySchema = require('./graphql')

const app = express();

app.get('/',(req, res) => {
  return res.status(200).send("Welcome to Express Graphql");
})

app.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true
}));

app.listen(4000, ()=> console.log('Application running at port 3000'));