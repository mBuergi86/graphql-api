import { createSchema } from 'graphql-yoga';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';

export const schema = createSchema({
	typeDefs: /* GraphQL */ `
		type User {
			_id: String!
			firstname: String!
			lastname: String!
			address: String!
			number: String!
			zip: String!
			city: String!
			country: String!
			birthdate: String!
			gender: String
		}

		input UserInputData {
			firstname: String!
			lastname: String!
			address: String!
			number: String!
			zip: String!
			city: String!
			country: String!
			birthdate: String!
			gender: String
		}

		type Query {
			getUsersAll: [User!]!
			getUserById(ID: ID!): User
		}

		type Mutation {
			createUser(userInput: UserInputData): String!
			updateUser(ID: ID!, userInput: UserInputData!): String!
			deleteUser(ID: ID!): String!
		}
	`,
	resolvers: {
		Query,
		Mutation
	}
});
