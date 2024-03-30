import { createSchema, createYoga } from 'graphql-yoga';
import type { RequestEvent } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

const yogaApp = createYoga<RequestEvent>({
	schema: createSchema({
		typeDefs: `
			type Query {
				hello: String
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'SvelteKit - GraphQL Yoga'
			}
		}
	}),
	// Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
	graphqlEndpoint: '/api/graphql',

	// Needed to let Yoga use sveltekit's Response object
	fetchAPI: { Request }
});

const handleGraphql: RequestHandler = async (event) => {
	const ponyfillResponse = await yogaApp(event);
	const responseText = await ponyfillResponse.text();
	const response = new Response(responseText, ponyfillResponse);

	return response;
};

export { handleGraphql as GET, handleGraphql as POST, handleGraphql as OPTIONS };
