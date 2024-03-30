import { User } from '$lib/backend/mongodb/models/users';
import type { UserInput } from '../types/user.types';

export const Mutation = {
	createUser: async (parent: unknown, { userInput }: { userInput: UserInput }) => {
		try {
			const newUser = new User({
				firstname: userInput.firstname,
				lastname: userInput.lastname,
				address: userInput.address,
				number: userInput.number,
				zip: userInput.zip,
				city: userInput.city,
				country: userInput.country,
				birthdate: userInput.birthdate,
				gender: userInput.gender
			});

			const savedUser = await newUser.save();
			return savedUser._id.toString();
		} catch (error) {
			throw new Error('Failed to create user');
		}
	}
};
