import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			onError: (e) => {
				if ("message" in (e as Error)) {
				}
			},
		},
		queries: {
			retry: false,
			staleTime: 60 * 1000 * 5,
			cacheTime: 30000,
			refetchOnWindowFocus: false,
			onError: (e) => {
				if ("message" in (e as Error)) {
				}
			},
		},
	},
});
