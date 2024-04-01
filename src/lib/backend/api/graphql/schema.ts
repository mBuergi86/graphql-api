import { createSchema, type YogaInitialContext } from 'graphql-yoga';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import type { UsersDataSource } from '$lib/backend/mongodb/models/users';

interface ResolverContext extends YogaInitialContext {
	users: UsersDataSource;
}

export const schema = createSchema<ResolverContext>({
	typeDefs: /* GraphQL */ `
		type User {
			_id: ID!
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
			getUsersAll(limit: Int): [User!]!
			getUserById(_id: ID!): User!
		}

		type Mutation {
			createUser(userInput: UserInputData): String!
			updateUser(_id: ID!, userInput: UserInputData!): String!
			deleteUser(_id: ID!): String!
		}
	`,
	resolvers: {
		Query,
		Mutation
	}
});
