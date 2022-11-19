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
			
			changeLanguage: ({ language }: any) => {
				i18n.changeLanguage(language);
			},
			
		});
	}, []);
};
