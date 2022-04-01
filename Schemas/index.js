const graphql = require('graphql');
const { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;

const EmployeeType = require ('./TypeDef/EmployeeType');
const employeeDB = require('../MOCK_DATA.json');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllEmployees: {
            type: new GraphQLList(EmployeeType),
            args: { id: {type: GraphQLInt}},
            resolve(parent, args) {
                return employeeDB;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createEmployee: {
        type: EmployeeType,
        args: { 
            first_name: { type: GraphQLString},
            last_name: { type: GraphQLString},
            email: { type: GraphQLString},
            gender: { type: GraphQLString},
            ip_address: { type: GraphQLString},
        },
        resolve(parent, args) {
         employeeDB.push({
             id: employeeDB.length + 1, first_name: args.first_name, last_name: args.last_name, email: args.email, gender: args.gender, ip_address:args.ip_address
         });
         return args;
            }
      }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery, mutation: Mutation
});
