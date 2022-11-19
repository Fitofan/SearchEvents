import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";

export const SidebarProfile = styled(Link)`
	display: flex;
	align-items: center;
	padding: 16px 6px 12px 24px;
	margin-bottom: 8px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}
`;
export const SidebarImage = styled("img")`
	width: 24px;
	height: 24px;
	border-radius: 50%;
`;
export const SidebarName = styled("div")`
	font-size: 14px;
	color: #fff;
	line-height: 20px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-left: 12px;
`;
export const SettingSidebar = styled("div")`
	display: block;
	background: #273541;
	border-radius: 16px;
	overflow: hidden;
	padding: 0 0 16px 0;
`;

export const SettingSidebarDivider = styled("div")`
	display: flex;
	flex-grow: 1;
	margin: 10px 30px;
	background: rgba(255, 255, 255, 0.1);
	height: 1px;
`;
export const SettingSidebarIcon = styled("div")`
	display: flex;
	align-items: center;
	width: 32px;
	svg {
		fill: #fff;
	}
`;
export const SettingSidebarItem = styled(ButtonBase)`
	display: block;
	width: 100%;
	a {
		width: 100%;
		position: relative;
		padding-left: 24px;
		display: flex;
		align-items: center;
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		cursor: pointer;
		color: #fff !important;
		text-decoration: none !important;
		&.active:before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			height: 32px;
			background: #50616b;
			width: 3px;
		}
		&.active {
			background: rgba(255, 255, 255, 0.05);
		}
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
	}
`;

export const SidebarBadge = styled("div")`
	/* background: #fa5a66; */
	margin-left: 4px;
	background: #44b181;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	min-width: 20px;
	min-height: 20px;
	border-radius: 16px;
	text-align: center;
	font-size: 12px;
	line-height: 1;
`;
