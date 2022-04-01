const graphql = require('graphql');
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;


const EmployeeType = new GraphQLObjectType({
    name: "Employee",
    fields: () => ({
         id: { type: GraphQLInt},
         first_name: { type: GraphQLString},
         last_name: { type: GraphQLString},
         email: { type: GraphQLString},
         gender: { type: GraphQLString},
         ip_address: { type: GraphQLString},
    })
});

module.exports = EmployeeType;