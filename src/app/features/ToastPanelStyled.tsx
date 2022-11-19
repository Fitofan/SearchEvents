import styled from "styled-components";
const heightHeight = "90px";

export const ToastPanelContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: 320px;
	padding: 15px;
	user-select: none;
	z-index: 999999;
	user-select: none;
	pointer-events: none;
	-webkit-pointer-events: none;
	-moz-pointer-events: none;
	-o-pointer-events: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const ToastItemSt = styled.div`
	height: auto;
	position: relative;
	width: 100%;
	min-height: 60px;
	color: #000;
	padding: 0 20px 10px 10px;
	font-size: 15px;
	border-radius: 5px;
	display: flex;
	vertical-align: middle;
	margin-top: 20px;
	background: #273541;
	box-shadow: 0 5px 30px rgb(0 0 0 / 20%);
	user-select: auto;
	pointer-events: auto;
	-webkit-pointer-events: auto;
	-moz-pointer-events: auto;
	-o-pointer-events: auto;
	opacity: 1;
	transition: all 0.4s linear;
	&.faded {
		margin-top: 0;
		padding-bottom: 0;
		min-height: 0;
		height: 0px !important;
		max-height: 0 !important;
		overflow: hidden;
		opacity: 0;
	}
`;

export const ToastDangerItemSt = styled(ToastItemSt)`
	height: auto;
	position: relative;
	width: 100%;
	min-height: 60px;
	color: #000;
	padding: 0 20px 10px 10px;
	font-size: 15px;
	border-radius: 5px;
	display: flex;
	vertical-align: middle;
	margin-top: 20px;
	background: red;
	box-shadow: 0 5px 30px rgb(0 0 0 / 20%);
	user-select: auto;
	pointer-events: auto;
	-webkit-pointer-events: auto;
	-moz-pointer-events: auto;
	-o-pointer-events: auto;
`;

export const ToastItemClose = styled.div`
	position: absolute;
	right: 0;
	top: 12px;
	font-size: 20px;
	color: #fff;
	width: 20px;
	height: 20px;
	line-height: 20px;
	cursor: pointer;
`;
