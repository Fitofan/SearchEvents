import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useTypeSafeTranslation } from "../../utils/useTypeSafeTranslation";

const DescriptionMoreBtn = styled("div")`
	display: inline-block;
	color: #fff;
	line-height: 1.3;
	margin-left: 2px;
	font-size: 14px;
	white-space: pre-line;
	font-weight: bold;
	cursor: pointer;
	@media (max-width: 999px) {
		font-size: 14px;
	}
	&:hover {
		text-decoration: underline;
	}
`;

interface MoreDescriptionProps {
	value: string;
}

export const MoreDescription = (props: MoreDescriptionProps) => {
    const { value } = props;
    const [aboutMore, setAboutMore] = useState(
        value && value != "null" && value.length > 200
    );
    const { t } = useTypeSafeTranslation();

    const [aboutText, setAboutText] = useState(
        value != null && value.length > 200
            ? value.substr(0, 200) + "..."
            : value != "null"
                ? value
                : ""
    );
    return (
        <>
            {aboutText}
            {aboutMore ? (
                <DescriptionMoreBtn
                    onClick={() => {
                        setAboutText(value);
                        setAboutMore(false);
                    }}>
                    {t("more")}
                </DescriptionMoreBtn>
            ) : null}
        </>
    );
};
