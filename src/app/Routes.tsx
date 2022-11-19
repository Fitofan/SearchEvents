import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useTokenStore } from "./utils/useTokenStore";
import { useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { useMainWsHandler } from "./useMainWsHandler";
const SearchEventsPage = lazy(() => import("./pages/SearchEventsPage"));

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
	useMainWsHandler();
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route
				path="/search/events"
				render={(props) => (
					<Suspense fallback={null}>
						<SearchEventsPage {...props} />
					</Suspense>
				)}
			/>
			<Route exact path="*" component={Page404} />
		</Switch>
	);
};
