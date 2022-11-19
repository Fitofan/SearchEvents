export const __prod__ = "production";
export const __staging__ = process.env.REACT_APP_IS_STAGING === "true";

export const apiBaseUrl =
	process.env.REACT_APP_API_BASE_URL ||
	(__prod__ ? "https://fitofan.com" : "http://localhost:9000");

export const linkRegex =
	/(https?:\/\/)(www\.)?([-a-z0-9]{1,63}\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\.[a-z]{1,6}(\/[-\\w@\\+\\.~#\\?&/=%]*)?[^\s()]+/;

export const codeBlockRegex = /`([^`]*)`/g;

export const CURRENCY_LIST = [
	{
		key: "USD",
		name: "USD - US Dollar",
	},
	{
		key: "CAD",
		name: "CAD - Canadian Dollar",
	},
	{
		key: "UAH",
		name: "UAH - Ukrainian Hryvnia",
	},
];

export const ALTERNATIVE_PAYMENT_METHODS = [
	{
		key: "e-transfer",
		name: "E-transfer",
	},
	{
		key: "cash",
		name: "Cash",
	},
	{
		key: "cheque",
		name: "Cheque",
	},
];

export const IMAGE_FORMATS =
	"image/jpg, image/jpeg, image/png, image/bmp, image/gif, image/heif, image/heic, image/heif, data:application/octet-stream";

export const WIN_TYPES = [
	{
		id: 1,
		label: "wbp",
		title: "win_by_points",
	},
	{
		id: 3,
		label: "knock",
		title: "knockout",
	},
	{
		id: 2,
		label: "drf",
		title: "doctor_refusal",
	},

	{
		id: 4,
		label: "disq",
		title: "disqualification",
	},
	{
		id: 5,
		label: "injury",
		title: "injury",
	},
];

export const ORG_KINDS = [
	{
		id: 1,
		name: "sport",
		with_sport: true,
		types: [
			{
				id: 1,
				name: "orgtype.club",
			},
			{
				id: 2,
				name: "orgtype.representative_office",
			},
			{
				id: 3,
				name: "orgtype.federation",
			},
		],
	},
	{
		id: 2,
		name: "orgtype.education",
		with_sport: false,
		types: [
			{
				id: 4,
				name: "orgtype.school",
			},
		],
	},
	{
		id: 3,
		name: "orgtype.company",
		with_sport: false,
	},
];

export const ORG_TYPES = [
	{
		id: 1,
		name: "orgtype.club",
		kind_id: 1,
		reg_type: "sport",
	},
	{
		id: 2,
		name: "orgtype.representative_office",
		kind_id: 1,
		reg_type: "sport",
	},
	{
		id: 3,
		name: "orgtype.federation",
		kind_id: 1,
		reg_type: "sport",
	},
	{
		id: 4,
		name: "orgtype.school",
		kind_id: 2,
		reg_type: "company",
	},
	{
		id: 5,
		name: "orgtype.small_business",
		kind_id: 3,
		reg_type: "company",
	},
];

export const EVENT_TYPES = [
	{
		name: "easy_event",
		id: 11,
		single: true,
	},
	// {
	//     name: "tournament",
	//     id: 1,
	//     single: false,
	// },
	{
		name: "competition",
		id: 2,
		single: false,
	},
	{
		name: "skill_test",
		id: 3,
		single: false,
	},
	{
		name: "meeting",
		id: 4,
		single: true,
	},
	{
		name: "seminar",
		id: 5,
		single: true,
	},

	{
		name: "training_camp",
		id: 6,
		single: true,
	},
	{
		name: "coaching_course",
		id: 7,
		single: true,
	},
	{
		name: "sponsored_event",
		id: 8,
		single: true,
	},
	{
		name: "field_trip",
		id: 9,
		single: true,
	},
	{
		name: "expedition",
		id: 10,
		single: true,
	},

	{
		name: "outdoor_event",
		id: 12,
		single: true,
	},
];
