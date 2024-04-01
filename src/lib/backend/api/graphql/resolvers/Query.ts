import { User } from '$lib/backend/mongodb/models/users';

export const Query = {
	getUsersAll: async (_: unknown, { limit }: { limit: number }) => {
		try {
			return await User.find().limit(limit);
		} catch (error) {
			throw new Error('Failed to fetch users');
		}
	},
	getUserById: async (_: unknown, { _id }: { _id: string }) => {
		try {
			return await User.findById(_id);
		} catch (error) {
			throw new Error('Failed to fetch user');
		}
	}
};
