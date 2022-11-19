const ENDPOINT = process.env["REACT_APP_POST_SERVER"] as string;

export const POST_API = {
	AUTH: {
		registration: ENDPOINT + "/api/auth/registration",
	},
	FEATURES: {
		getMyAddress: `${ENDPOINT}/api/v1/get_my_ip`,
	},
};

export const API = {
	EVENT: {
		// ACTIONS
		follow: "event.follow",
		unfollow: "event.unfollow",
	},
	USER: {
		updateLanguage: "user.updateLanguage",
	},
	SPORT: {
		getById: "sport.get_by_id",
		getAll: "sport.get_all",
	},
	PLACES: {
		getPlaceById: "places.get_place_by_id",
		getPlaceByGoogleId: "places.get_google_place_byid",
	},
	SEARCH: {
		byEvents: "search.byevents",
	},
	FEATURES: {
		getPageByLink: "features.getPageByLink",
	},
};
