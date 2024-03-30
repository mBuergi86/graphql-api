import type { UserInput } from '$lib/backend/api/graphql/types/user.types';
import { Schema, model, type InferSchemaType } from 'mongoose';

const userSchema = new Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	address: { type: String, required: true },
	number: { type: String, required: true },
	zip: { type: String, required: true },
	city: { type: String, required: true },
	country: { type: String, required: true },
	birthdate: { type: String, required: true },
	gender: { type: String }
});

type User = InferSchemaType<typeof userSchema>;

export const User = model('User', userSchema);

const create = async (userInput: UserInput) => {
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
};

export interface UsersDataSource {
	create: (userInput: UserInput) => Promise<string>;
}

export const getUsersDataSource = (): UsersDataSource => {
	const userDataSource = {
		create
	};

	return userDataSource;
};
