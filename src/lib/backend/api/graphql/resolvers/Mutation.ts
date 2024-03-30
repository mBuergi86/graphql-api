import { User, type UsersDataSource } from '$lib/backend/mongodb/models/users';
import type { YogaInitialContext } from 'graphql-yoga';
import type { UserInput } from '../types/user.types';
import { type GraphQLFieldResolver } from 'graphql';

interface ResolverContext extends YogaInitialContext {
	users: UsersDataSource;
}

export const Mutation = {
	createUser: (async (parent: unknown, { userInput }: { userInput: UserInput }, { users }) => {
		try {
			const userId = await users.create(userInput);

			return userId;
		} catch (error) {
			throw new Error('Failed to create user');
		}
	}) satisfies GraphQLFieldResolver<unknown, ResolverContext, { userInput: UserInput }>
};
