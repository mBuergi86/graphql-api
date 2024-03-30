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
