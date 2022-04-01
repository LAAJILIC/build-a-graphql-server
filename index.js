const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');

const schema = require('./Schemas/index');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3001, () => {
    console.log("Backend server running on 3001");
});
