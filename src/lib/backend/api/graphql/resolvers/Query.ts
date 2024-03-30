import { User } from "$lib/backend/mongodb/models/users";

export const Query = {
    getUsersAll: async () => {
        try {
            return await User.find();
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    },
    getUserById: async (_: unknown, { id }: { id: string }) => {
        try {
            return await User.findById(id);
        } catch (error) {
            throw new Error('Failed to fetch user');
        }
    }
};