import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";
export const SidebarRoot = styled.div`
	position: fixed;
	z-index: 1300;
	inset: 0px;
	@media (min-width: 1000px) {
		display: none !important;
	}
`;

export const SidebarBackdrop = styled.div`
	opacity: 1;
	transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	z-index: 1000;
	position: fixed;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.1);
	-webkit-tap-highlight-color: transparent;
`;

export const SidebarContainer = styled.div`
	width: 260px;
	position: fixed;
	top: 0;
	height: calc(100vh);
	left: 0px;
	z-index: 1001;
	bottom: 0;
	border-radius: 4px;
	background: #273541;
	overflow-y: auto;
	box-shadow: 0 5px 30px rgb(0 0 0 / 20%);
`;

export const MenuAuth = styled.div`
	position: relative;
	width: 260px;
	height: 160px;
	background-size: cover;
	background-position: top;
	overflow: hidden;
`;

export const MenuAuthProfileWrap = styled.div`
	position: absolute;
	width: 260px;
	height: 160px;
	background-size: cover;
	background-position: center;
	opacity: 0.8;
`;

export const MenuAuthProfileImage = styled.div`
	position: absolute;
	top: 15px;
	left: 20px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	background-size: cover;
	background-position: center;
	border: 1px solid #2078a8;
`;

export const MenuAuthInfo = styled.div`
	position: relative;
	width: 260px;
	height: 160px;
	background: rgba(0, 0, 0, 0.4);
	left: 0;
	width: 260px;
	padding: 5px 0 5px 10px;
`;

export const MenuAuthWrapper = styled.div`
	position: absolute;
	bottom: 10px;
	color: #fff !important;
	a {
		color: #fff;
		font-size: 18px;
		text-transform: uppercase !important;
	}
`;

export const MenuAuthLink = styled.div``;

export const LinkWrap = styled(ButtonBase)`
	display: block;
	text-align: left;
	width: 100%;
	height: 44px;
	font-size: 14px;
`;

export const MenuList = styled.ul`
	padding: 0;
	margin: 5px 0 0;
	margin-top: 0;
	margin-bottom: 1rem;
	li {
		list-style-type: none;
		position: relative;
	}

	a {
		font-size: 14px;
		display: block;
		padding: 10px;
		color: #d7d7d7;
		text-decoration: none !important;
	}
`;
export const MenuDivider = styled.li`
	display: block;
	margin-top: 5px;
	height: 1px;
	background: rgba(255, 255, 255, 0.4);
	width: 200px;
	margin-left: 12px;
	margin-bottom: 5px;
`;

export const LanguageSelectorWrap = styled.div`
	padding: 0 10px 10px;
	span {
		display: block;
		color: #ffff;
		font-size: 14px;
		margin-bottom: 2px;
	}
	select {
		background: #273541;
		border-radius: 5px;
		width: 100%;
		padding: 10px;
		margin-top: 5px;
		border: 1px solid rgba(255, 255, 255, 0.5) !important;
		color: #fff;
	}
`;
