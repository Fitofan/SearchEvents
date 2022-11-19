import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const headerHeight = "90px";

export const HeaderBackdrop = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.2);
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 40;
`;
export const HeaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	display: block;
	margin: 0 auto;
	height: 90px;
	width: 100%;
	z-index: 50;
	max-width: 100%;
	background: #121c23;

	&.expand {
		height: 200px;
	}

	transition: height 150ms ease-in-out;

	@media (max-width: 999px) {
		display: none !important;
	}
`;

export const HeaderWrapperFixed = styled(HeaderWrapper)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;
export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	max-width: 1400px;
	padding: 0 60px 0 60px;
	position: relative;
`;
export const HeaderContentFull = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px 0 20px;
	position: relative;
`;
export const HomeLink = styled(Link)`
	img {
		height: 50px;
		overflow: hidden;
		vertical-align: middle;
	}
`;
export const NavButton = styled(Button)`
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	margin-left: 5px;
	display: inline-flex;
	align-items: center;
	color: #fff;
	font-size: 15px;
	user-select: none;
	text-decoration: none !important;
	padding: 10px 15px;
	&:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	svg,
	img {
		vertical-align: middle;
		margin-right: 15px;
		fill: #faf6f666;
	}
`;

export const NavButtonIcon = styled(Button)`
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	margin-left: 5px;
	margin-right: 5px;
	min-height: 46px;
	display: inline-flex;
	align-items: center;
	color: #fff;
	font-size: 15px;
	user-select: none;
	text-decoration: none !important;
	padding: 0 15px;
	&:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	svg {
		opacity: 0.4;
		width: 28px;
		height: 28px;
		fill: #faf6f6;
		vertical-align: middle;
	}
`;

export const NavUserProfile = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;
	position: relative;
	cursor: pointer;
	margin-left: 15px;
`;

export const NavUserProfileImage = styled.div`
	display: block;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background-size: cover;
`;

export const NavUserOnlineIcon = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 10px;
	height: 10px;
	background: green;
	border-radius: 50%;
	border: 1px solid #121c23;
`;

export const NavUserDropdown = styled.div`
	z-index: 30;
	position: absolute;
	top: 56px;
	right: 0;
	border-radius: 10px;
	display: none;
	&.show {
		display: block;
	}
	/* background: #121c23; */
	background: #273541;
	width: 200px;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
	max-height: calc(100vh - 200px);
	padding: 10px 0;
`;
export const NavUserDropdownDivider = styled.div`
	margin: 10px 0;
	width: 100%;
	height: 1px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const NavUserDropdownBlock = styled.div``;

export const NavUserDropdownTitle = styled.div`
	padding: 0 5px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 14px;
	text-transform: uppercase;
	margin-bottom: 5px;
`;

export const NavUserDropdownLink = styled(Link)`
	display: block;
	padding: 8px 15px;
	color: #fff;
	text-decoration: none !important;
	/* border-radius: 5px; */
	&:hover {
		background: rgba(255, 255, 255, 0.3);
	}
`;

export const HeaderNavCenter = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	flex-grow: 1;
	margin-left: 15px;
`;

export const NavCenter = styled.div`
	display: flex;
	height: ${headerHeight};

	flex-direction: column;
	align-items: center;
	position: relative;
	flex-grow: 1;
	margin-left: 15px;
`;

export const NavSearchInput = styled.div`
	display: flex;
	height: 50px;
	flex-grow: 1;
	max-width: 600px;
	width: 100%;
	background: #293339;
	border-radius: 10px;
	border: none;
	color: #fff;
	align-items: center;
	padding: 0 20px;
	cursor: pointer;
	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

export const HeaderNavLeft = styled.div`
	display: flex;
	height: ${headerHeight};
	align-items: center;
`;
export const HeaderNavRight = styled.div`
	display: flex;
	align-items: center;
	padding-left: 15px;
	height: ${headerHeight};

	${NavButton} {
		margin-right: 10px;
	}
`;

export const NavMoreBtn = styled(Button)`
	display: inline-block;
	position: relative;
	height: 35px;
	margin-left: 15px;
	padding: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 35px;
	width: 45px;
	border-radius: 5px;
	.MuiButton-label {
		width: 45px;
	}
	&:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	div {
		display: inline-block;
		margin: 2px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #fff;
	}
`;

export const UnreadBadge = styled.div`
	/* background: #fa5a66; */
	background: #44b181;
	display: flex;
	position: absolute;
	right: 0;
	justify-content: center;
	align-items: center;
	top: 0;
	color: #fff;
	min-width: 20px;
	min-height: 20px;
	border-radius: 16px;
	text-align: center;
	font-size: 12px;
	line-height: 1;
	border: 1px solid #121c23;
`;
