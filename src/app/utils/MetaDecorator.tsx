import React from "react";
import { Helmet } from "react-helmet";

interface metaDecoratorProps {
	title: string;
	description?: string;
	imageUrl?: string;
	imageAlt?: string;
}
export const MetaDecorator: React.FC<metaDecoratorProps> = ({
    title,
    description = "",
    imageUrl = "",
    imageAlt = "",
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta
                property="og:url"
                content={
                    "https://fitofan.com" +
					window.location.pathname +
					window.location.search
                }
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image:alt" content={imageAlt} />
        </Helmet>
    );
};
