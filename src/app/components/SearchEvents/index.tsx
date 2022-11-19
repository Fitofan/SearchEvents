import React from "react";
import { useTypeSafeTranslation } from "./../../utils/useTypeSafeTranslation";

interface SearchEventsProps {}

const SearchEvents: React.FC<SearchEventsProps> = () => {
	const { t } = useTypeSafeTranslation();

	return <div>Hello</div>;
};

export default SearchEvents;
