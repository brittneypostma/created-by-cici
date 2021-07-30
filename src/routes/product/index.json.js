import { gql, GraphQLClient } from 'graphql-request';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
		headers: {}
	});

	const gqlQuery = gql`
		query Products {
			products {
				id
				name
				slug
			}
		}
	`;

	const { products } = await graphcms.request(gqlQuery);

	return {
		body: { products }
	};
}
