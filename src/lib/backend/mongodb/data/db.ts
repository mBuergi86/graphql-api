import mongoose from 'mongoose';

export const connect = async () => {
	mongoose.connect('mongodb://localhost:27017/users').then(
		() => {
			console.log('Connected to MongoDB');
		},
		(error) => {
			console.error('Failed to connect to MongoDB', error);
		}
	);
};
