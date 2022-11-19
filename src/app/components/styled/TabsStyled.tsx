import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

export const ElevatedTabs = styled(Tabs)(({ theme }) => ({
    "@media(min-width:1000px)": {
        minHeight: "48px !important",
        maxHeight: "48px !important",
        height: 48,
    },
    "@media(max-width: 999px)": {
        minHeight: "36px !important",
        maxHeight: "36px !important",
        height: 36,
    },
    "& .MuiTabs-indicator": {
        height: "100%",
        backgroundColor: "#273541",
        opacity: 1,
        // backgroundColor: "rgba(255,255,255,0.3)",
        // backgroundColor: "#273541",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow:
			"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.2), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",

        "@media(max-width: 999px)": {
            height: "40px",
            "@media(max-width: 999px)": {
                minHeight: "auto",
                maxHeight: "36px",
            },
        },
    },
}));

export const ElevatedTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    zIndex: 1,
    fontSize: 16,
    // background: "#273541",
    overflow: "hidden",
    fontWeight: "bold",
    // color: "#999",
    color: "#fff",
    borderRadius: "8px",
    background: "transparent",
    "@media(max-width: 999px)": {
        minHeight: "auto",
        padding: "0 12px ",
        height: "36px",
        maxHeight: "36px",
        minWidth: "auto",
    },
    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    "&.Mui-selected": {
        background: "transparent",
        color: "#fff",
    },
    "&.Mui-focusVisible": {},
}));

interface StyledTabProps {
	label: string;
	to: string;
}

export const ElevatedTabLink = styled((props: StyledTabProps) => (
    <Tab component={Link} {...props} />
))({
    textTransform: "none",
    minWidth: 0,
    zIndex: 1,
    fontSize: 16,
    // background: "#273541",
    overflow: "hidden",
    fontWeight: "bold",
    // color: "#999",
    color: "#fff",
    borderRadius: "8px",
    background: "transparent",
    "@media(max-width: 999px)": {
        fontSize: "12px",
        minHeight: "auto",
        padding: "0 12px ",
        height: "34px",
        maxHeight: "34px",
        minWidth: "auto",
    },
    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    "&.Mui-selected": {
        background: "transparent",
        color: "#fff",
    },
    "&.Mui-focusVisible": {},
});

export const SimpleNavTabs = styled(Tabs)(({ theme }) => ({
    "@media(max-width: 999px)": {
        minHeight: "40px",
    },
}));
export const SimpleNavTab = styled(Tab)(({ theme }) => ({
    fontSize: "16px",

    "@media(max-width: 999px)": {
        marginRight: "0px",
        fontSize: "14px",
        minWidth: "auto !important",
        minHeight: "auto !important",
        padding: "12px 12px",
    },
}));

export const SimpleNavTabLink = styled((props: StyledTabProps) => (
    <Tab component={Link} {...props} />
))({
    fontSize: "16px",
	
    "@media(max-width: 999px)": {
        marginRight: "0px",
        fontSize: "14px",
        minWidth: "auto !important",
        minHeight: "auto !important",
        padding: "12px 12px",
    },
});


export const TabsWrapper = styled("div")`
	padding: 0 12px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	margin-bottom: 16px;
`;