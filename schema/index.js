const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Define your types here.
const typeDefs = `
    type Organization {
        id: ID!
        name: String!
        logo: String
        president: String
    }

    type Query {
        # Retrieves every organization
        organizations: [Organization!]!
        # Retrieves a single organization by ID
        organization(id: ID!): Organization
    }

    type Mutation {
        # Creates a new organization
        createOrganization(name: String!, logo: String, president: String): Organization
    }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
