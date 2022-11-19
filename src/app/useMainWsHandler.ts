import { useEffect } from "react";
import { useWsHandlerStore } from "../stores/useWsHandlerStore";
import { useToastStore } from "./../stores/useToastStore";
import { useNotificationStore } from "./../stores/useNotificationStore";
import { useMeStore } from "./../stores/useMeStore";
import { useTokenStore } from "./utils/useTokenStore";
import i18n from "i18next";

export const useMainWsHandler = () => {
	const audio = new Audio("https://fitofan.com/sounds/click.mp3");
	const addMultipleWsListener = useWsHandlerStore(
		(s) => s.addMultipleWsListener
	);
	const play = () => {
		try {
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		} catch (e) {
			console.log("error", e);
		}
	};

	useEffect(() => {
		addMultipleWsListener({
			new_user_toast: (toast) => {
				useToastStore.getState().addOne(toast);
			},
			new_user_notification: (notification) => {
				useNotificationStore.getState().addOne(notification, "self");
				useToastStore.getState().addOne(notification);
				play();
			},
			delete_user_notification: ({ id }: any) => {
				useNotificationStore.getState().deleteItem(id);
				useToastStore.getState().deleteItem(id);
			},
			changeLanguage: ({ language }: any) => {
				i18n.changeLanguage(language);
			},
			hard_user_logout: ({ logout }: any) => {
				useMeStore.getState().setUser(null);
				useTokenStore.getState().removeTokens();
				window.location.href = "/";
			},
		});
	}, []);
};
