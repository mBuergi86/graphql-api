import type { UserInput } from '$lib/backend/api/graphql/types/user.types';
import mongoose, { Schema, model, type InferSchemaType, type ObjectId } from 'mongoose';

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

const filter = (id: ObjectId) => ({
	_id: id
});

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

const update = async (id: ObjectId, userInput: UserInput) => {
	if (!mongoose.isValidObjectId(id)) {
		throw new Error('Invalid ID');
	}

	await User.findByIdAndUpdate(filter(id), {
		$set: {
			firstname: userInput.firstname,
			lastname: userInput.lastname,
			address: userInput.address,
			number: userInput.number,
			zip: userInput.zip,
			city: userInput.city,
			country: userInput.country,
			birthdate: userInput.birthdate,
			gender: userInput.gender
		}
	});
};

const remove = async (id: ObjectId) => {
	if (!mongoose.isValidObjectId(id)) {
		throw new Error('Invalid ID');
	}

	await User.deleteOne({
		_id: id
	});
};

export interface UsersDataSource {
	create: (userInput: UserInput) => Promise<string>;
	update: (id: ObjectId, userInput: UserInput) => Promise<void>;
	remove: (id: ObjectId) => Promise<void>;
}

export const getUsersDataSource = (): UsersDataSource => {
	const userDataSource = {
		create,
		update,
		remove
	};

	return userDataSource;
};
