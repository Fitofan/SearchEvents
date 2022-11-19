import { useMeStore } from "./../../stores/useMeStore";
import { useTokenStore } from "./../utils/useTokenStore";

export const Logout = () => {
	useMeStore.getState().setUser(null);
	useTokenStore.getState().removeTokens();
	window.location.href = "/";
	return null;
};
