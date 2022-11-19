export type WsParam = {
	op: string;
	d: any;
};

export type authUserType = {
	id: number;
	uid: string;
	name: string;
	surname: string;
	image_url: string;
	mini_image_url: string;
	followers_count: number;
	following_count: number;
	unreadMessages: number;
	unreadNotifications: number;
	enableNotifications: boolean;
	cartItems: number;
	verified: number;
	link: string;
	ampm: number;
	isAdmin: boolean;
} | null;

export type sportType = {
	id: number;
	name: string;
	lng: { [key: string]: string };
};
