import socketIOClient from "socket.io-client";
import { useSocketStatus } from "./stores/useSocketStatus";
import { useWsHandlerStore } from "./stores/useWsHandlerStore";
import { useTokenStore } from "./app/utils/useTokenStore";
import { useMeStore } from "./stores/useMeStore";
import { v4 as uuidv4 } from "uuid";
import { WsParam } from "./app/types";
import i18n from "i18next";

const ENDPOINT = process.env["REACT_APP_SOCKET_SERVER"] as string;
const IS_DEV = process.env["REACT_APP_IS_DEV"] === "true";

let authGood = true;
let socketRef: any | null = null;
export const auth_query = "auth";

export const createSocket = (force?: boolean) => {
	if (!force && socketRef) {
		if (IS_DEV) console.log("ws already connected");
		return;
	} else {
		if (IS_DEV) console.log("new ws instance incoming");
	}

	useSocketStatus.getState().setStatus("connecting");
	const { accessToken } = useTokenStore.getState();

	socketRef = socketIOClient.io(ENDPOINT, {});
	socketRef.on("connect_error", (error: any) => {
		if (IS_DEV) console.log(error);
		// ...
	});
	socketRef.on("connect", () => {
		useSocketStatus.getState().setStatus("open");
		if (IS_DEV) console.log("connected");
		wsend({
			op: "auth_query",
			d: {},
		});
	});

	socketRef.on("message", (json: any) => {
		if (IS_DEV) console.log(json);

		switch (json.op) {
			case "error": {
				if (IS_DEV) console.log("Error", json.d);
				break;
			}
			default: {
				const { handlerMap, fetchResolveMap, authHandler } =
					useWsHandlerStore.getState();
				if (json.op === "auth-good") {
					authGood = true;
					if (json.d.need_logout == 1) {
						useMeStore.getState().setUser(null);
						useTokenStore.getState().removeTokens();
					} else {
						try {
							useSocketStatus.getState().setStatus("auth-good");
							if (json?.d?.me) {
								if (json?.d?.language) {
									if (i18n.language != json?.d?.language) {
										i18n.changeLanguage(json.d.language);
									}
								}
								useMeStore.getState().setUser(json.d.me);
							}
						} catch (err) {}
					}
					// if (authHandler) {
					// 	authHandler(json.d);
					// } else {
					// 	console.error("something went wrong, authHandler is null");
					// }
				}
				if (json.op in handlerMap) {
					handlerMap[json.op](json.d);
				} else if (json.fetchId && json.fetchId in fetchResolveMap) {
					fetchResolveMap[json.fetchId](json.d);
				}
			}
		}
	});
};

export const wsend = (d: { op: string; d: any }) => {
	const { accessToken } = useTokenStore.getState();
	d.d.token = accessToken;
	socketRef?.emit("action", { ...d });
};

export const wsFetch = <T,>(d: WsParam) => {
	const { accessToken } = useTokenStore.getState();
	d.d.token = accessToken;
	// console.log(d);

	return new Promise<T>((res, rej) => {
		if (!authGood || !socketRef) {
			rej(new Error("can't connect to server"));
		} else {
			const fetchId = uuidv4();
			// setTimeout(() => {
			// 	useWsHandlerStore.getState().clearFetchListener(fetchId);
			// 	rej(new Error("request timed out"));
			// }, 10000); // 10 secs
			useWsHandlerStore.getState().addFetchListener(fetchId, (d) => {
				res(d);
			});
			socketRef?.emit("action", { ...d, fetchId });
		}
	});
};

export const wsCallback = (
	d: WsParam,
	callback: any,
	errCallback: any = null
) => {
	const { accessToken } = useTokenStore.getState();
	d.d.token = accessToken;

	if (authGood && socketRef) {
		if (IS_DEV) console.log("We are sending...", d);
		const fetchId = uuidv4();
		useWsHandlerStore.getState().addFetchListener(fetchId, (d) => {
			callback(d);
		});
		socketRef?.emit("action", { ...d, fetchId });
	} else {
	}
};

window.addEventListener("online", () => {
	// if (socketRef && socketRef.readyState === "CLOSED") {
	// console.log("online triggered, calling ws.reconnect()");
	// socketRef.reconnect();
	// }
});
