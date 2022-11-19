import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const heightHeight = "90px";

export const PanelRoot = styled("div")`
	position: fixed;
	z-index: 1300;
	inset: 0px;
`;

export const PanelBackdrop = styled("div")`
	opacity: 1;
	transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	z-index: -1;
	position: fixed;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.1);
	-webkit-tap-highlight-color: transparent;
`;

export const PanelContainer = styled("div")`
	width: 400px;
	z-index: 1300;
	position: fixed;
	top: ${heightHeight};
	height: calc(100vh - 100px);
	right: 16px;
	bottom: 0;
	border-radius: 4px;
	background: #273541;
	overflow-y: auto;
	box-shadow: 0 5px 30px rgb(0 0 0 / 20%);

	@media (max-width: 999px) {
		height: 100vh;
		width: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;
export const PanelHead = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const CloseModalIconWrap = styled("div")`
	@media (min-width: 1000px) {
		display: none !important;
	}
`;
export const CloseModalIcon = (props: any) => {
    return (
        <IconButton edge="start" color="inherit" aria-label="close" {...props}>
            <CloseIcon />
        </IconButton>
    );
};

export const PanelTitle = styled("div")`
	font-size: 24px;
	color: #fff;
	font-weight: bold;
	padding: 16px;
	line-height: 1;
`;
export const PanelLoading = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 200px;
	padding: 16px;
`;

export const PanelItems = styled("div")`
	padding: 0 16px 16px;
`;

export const NotItem = styled("div")`
	width: 100%;
	color: #fff;
	padding: 15px 0 0px;
	font-size: 15px;
	border-radius: 5px;
	display: flex;
	vertical-align: middle;
	//background: #121C23;
	user-select: auto;
	pointer-events: auto;
	-webkit-pointer-events: auto;
	-moz-pointer-events: auto;
	-o-pointer-events: auto;
`;
export const NotItemLeft = styled("div")`
	width: 55px;
	min-width: 50px;
`;
export const NotItemRight = styled("div")`
	width: calc(100% - 55px);
	color: #dddddd;
	font-size: 14px;
	a {
		color: #fff !important;
		font-weight: bold;
	}
`;

export const NotItemImg = styled(Link)`
	display: block !important;
	width: 40px;
	height: 40px;
	background-size: cover;
	border-radius: 50%;
`;

export const SmallImage = styled("img")`
	min-width: 16px;
	height: 16px;
	object-fit: cover;
	background-size: cover;
	border-radius: 50%;
`;

export const NotItemTime = styled("div")``;

export const NotItemBtns = styled("div")`
	display: flex;
	padding: 7px 0;
`;
export const NotBtnSuccess = styled(Button)`
	min-width: 46px;
	color: #fff;
	line-height: 1 !important;
	margin-right: 10px;
	padding: 8px 8px;
	border-radius: 5px;
	font-size: 14px;
	background: #4acc96;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	justify-content: center;
	&:hover {
		background: #44b181;
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px;
	}
`;

export const NotBtnLink = styled(Button)`
	min-width: 46px;
	color: #fff;
	line-height: 1 !important;
	margin-right: 10px;
	padding: 8px 8px;
	border-radius: 5px;
	font-size: 14px;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	justify-content: center;
	&:hover {
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px;
	}
`;
export const NotBtnDecline = styled(Button)`
	min-width: 46px;
	color: #fff;
	line-height: 1 !important;
	margin-right: 10px;
	padding: 8px 8px;
	border-radius: 5px;
	background: #f08683;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	justify-content: center;
	&:hover {
		background: #c26161;
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px;
	}
`;

export const NotItemDecline = styled("div")`
	min-width: 46px;
	color: #fff;
	line-height: 1;
	padding: 8px 8px;
	font-size: 14px;
	border-radius: 5px;
	background: #c26161;
	text-align: center;
`;
export const NotItemSuccess = styled("div")`
	min-width: 46px;
	color: #fff;
	line-height: 1;
	padding: 8px 8px;
	font-size: 14px;
	border-radius: 5px;
	background: #44b181;
	text-align: center;
`;

export const GreenSpan = styled("span")`
	color: #44b181;
	font-weight: bold;
`;
