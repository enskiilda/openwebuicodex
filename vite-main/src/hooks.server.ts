import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
	response.headers.set('Pragma', 'no-cache');
	response.headers.set('Expires', '0');
	
	return response;
};
