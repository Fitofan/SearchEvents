import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAtom } from "jotai";
import { isMobileAtom } from "./atoms";
import { Routes } from "./Routes";
import { Navbar } from "./components/Navbar/Navbar";
import { useTokenStore } from "./utils/useTokenStore";
import { useMeStore } from "../stores/useMeStore";
import { useSocketStatus } from "../stores/useSocketStatus";
import { createSocket } from "./../createSocket";
import { NotificationPanel } from "./features/NotificationPanel";
import { MobileSidebar } from "./components/Sidebar/MobileSidebar";
import { MetaDecorator } from "./utils/MetaDecorator";
import GlobalModals from "./features/GlobalModals";
const ftdesc =
	"Welcome to FITOFAN, an online platform for sport clubs, athletes, and fitness couches. This is a one-stop solution to manage your federation, clubs and competitions. This platform will allow you to stay connected with your members, to manage your sport federation or a local club  and much more.";

function App() {
	const { status } = useSocketStatus();
	createSocket();
	const [isMobile, setIsMobile] = useAtom(isMobileAtom);
	const token = useTokenStore((state) => state.accessToken);
	const ME = useMeStore((state) => state.user);

	const handleResize = () => {
		if (window.innerWidth < 1000) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		if (!token && ME) {
			useMeStore.getState().setUser(null);
			useTokenStore.getState().removeTokens();
			window.location.href = "/";
		}
	}, []);

	// if (status !== "auth-good" && status !== "open") {
	// 	return null;
	// }

	return (
		<>
			<BrowserRouter>
				<MetaDecorator
					title="Fitofan"
					description={ftdesc}
					imageUrl={"https://fitofan.com/images/ftlogo5.png"}
				/>
				<Navbar />
				<Routes />
				<NotificationPanel />
				<MobileSidebar />
				<GlobalModals />
			</BrowserRouter>
		</>
	);
}

export default App;
