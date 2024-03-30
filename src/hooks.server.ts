import { connectYoga } from '$lib/backend/api/graphql/server';
import { connect } from '$lib/backend/mongodb/data/db';
import type { Handle } from '@sveltejs/kit';

connectYoga();
connect();

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    return response;
};