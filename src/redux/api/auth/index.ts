import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query({
			query: () => ({
				url: '/courses',
				method: 'GET'
			}),
			providesTags: ['auth'],
		}),
	})
});
export const { useGetMeQuery } = api;
