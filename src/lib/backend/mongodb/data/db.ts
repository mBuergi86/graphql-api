import { env } from '$env/dynamic/private';
import mongoose from 'mongoose';

export const connect = async () => {
	mongoose.connect(env.MONGO_DB).then(
		() => {
			console.log('Connected to MongoDB');
		},
		(error) => {
			console.error('Failed to connect to MongoDB', error);
		}
	);
};
