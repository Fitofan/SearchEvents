import React, { useEffect } from "react";

import { useTypeSafeTranslation } from "./../utils/useTypeSafeTranslation";

interface PageProps {}

const SearchEventsPage: React.FC<PageProps> = () => {
	const { t } = useTypeSafeTranslation();
	// const ME = useMeStore((state) => state.user;

	useEffect(() => {
		document.title = "Fitofan";
	}, []);

	return (
		<>
			<div className="container-fluid container-1650 home">
                
            </div>
		</>
	);
};

export default SearchEventsPage;
