import { type UsersDataSource } from '$lib/backend/mongodb/models/users';
import type { YogaInitialContext } from 'graphql-yoga';
import type { UserInput } from '../types/user.types';
import { type GraphQLFieldResolver } from 'graphql';
import mongoose from 'mongoose';

interface ResolverContext extends YogaInitialContext {
	users: UsersDataSource;
}

export const Mutation = {
	createUser: (async (
		parent: unknown,
		{ userInput }: { userInput: UserInput },
		{ users }: { users: UsersDataSource }
	) => {
		try {
			const userId = await users.create(userInput);

			return userId.toString();
		} catch (error) {
			throw new Error(`Failed to create user: ${error}`);
		}
	}) satisfies GraphQLFieldResolver<unknown, ResolverContext, { userInput: UserInput }>,

	updateUser: (async (
		parent: unknown,
		{ _id, userInput }: { _id: string; userInput: UserInput },
		{ users }
	) => {
		console.log(_id);
		try {
			const newId: mongoose.Schema.Types.ObjectId =
				_id as unknown as mongoose.Schema.Types.ObjectId;
			await users.update(newId, userInput);

			return _id;
		} catch (error) {
			throw new Error(`Failed to update user ${error}: ${_id}`);
		}
	}) satisfies GraphQLFieldResolver<
		unknown,
		ResolverContext,
		{ _id: string; userInput: UserInput }
	>,

	deleteUser: (async (parent: unknown, { _id }: { _id: string }, { users }) => {
		try {
			const newId: mongoose.Schema.Types.ObjectId =
				_id as unknown as mongoose.Schema.Types.ObjectId;
			await users.remove(newId);

			return _id;
		} catch (error) {
			throw new Error(`Failed to delete user ${error}`);
		}
	}) satisfies GraphQLFieldResolver<unknown, ResolverContext, { _id: string }>
};
