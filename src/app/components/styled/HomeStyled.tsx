import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardItems = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	cursor: pointer;
	margin: 50px -15px 0;
	@media (max-width: 999px) {
		margin: 10px -8px 0;
		flex-wrap: wrap;
		/* display: flex;
		justify-content: space-between; */
	}
`;
export const CartItemWrap = styled.div`
	width: 25%;
	padding: 0 15px;
	@media (max-width: 999px) {
		width: 50%;
		padding: 0 8px;
	}
`;

export const CardItemLink = styled(Link)`
	width: 100%;
	display: block;
	text-decoration: none;
	cursor: pointer;
	@media (max-width: 999px) {
		width: 100%;
		margin: 30px 0 0;
		display: block;
		text-decoration: none;
	}
`;
export const CardItem = styled.div`
	width: 100%;
	display: block;
	text-decoration: none;
	cursor: pointer;
	color: #fff !important;
	@media (max-width: 999px) {
		width: 100%;
		margin: 30px 0 0;
		display: block;
		text-decoration: none;
	}
`;
export const CardItemImg = styled.div`
	width: 100%;
	padding-bottom: 100%;
	border-radius: 15px;
	background-size: cover !important;
	background-position: center;
	position: relative;
	background: #000;
`;
export const CardItemTitle = styled.div`
	margin-top: 15px;
	text-align: center;
	color: #fff;
	font-size: 24px;
	@media (max-width: 999px) {
		font-size: 14px;
	}
`;
export const CardItemSubtitleTitle = styled.div`
	text-align: center;
	color: #fff;
	font-size: 18px;
	color: #999;
	@media (max-width: 999px) {
		font-size: 12px;
	}
`;

export const HomeBlock2Title = styled.div`
	margin-top: 50px;
	font-size: 40px;
	font-weight: bold;
	color: #fff;
	text-align: center;
	margin-bottom: 50px;
	@media (max-width: 999px) {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 20px;
	}
`;

export const HomeBlock2Subtitle = styled.div`
	max-width: 1210px;
	text-align: center;
	font-family: Calibri, Arial, sans-serif;
	font-size: 20px;
	margin: 50px 30px 50px;
	color: #fff;
	@media (max-width: 999px) {
		max-width: 1210px;
		text-align: left;
		font-family: Calibri, Arial, sans-serif;
		font-size: 14px;
		margin: 30px 0 10px;
		color: #fff;
	}
`;

export const HelpContainer = styled("div")`
	margin-bottom: 40px;
`;

export const HelpTitle = styled.div`
	margin-top: 50px;
	font-size: 40px;
	font-weight: bold;
	color: #fff;
	margin-bottom: 50px;
	@media (max-width: 999px) {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 20px;
	}
`;

export const HelpItems = styled.div`
	margin-top: 15px;
	display: flex;
	flex-wrap: nowrap;
	cursor: pointer;
	margin: 50px -15px 0;
	@media (max-width: 999px) {
		margin: 10px -8px 0;
		flex-wrap: wrap;
	}
`;

export const HelpItemWrap = styled.div`
	width: 33%;
	padding: 0 15px;
	@media (max-width: 999px) {
		width: 50%;
		padding: 0 8px;
	}
`;
export const HelpItemImage = styled.div`
	width: 100%;
	padding-bottom: 60%;
	border-radius: 15px;
	background-size: cover !important;
	background-position: center;
	position: relative;
	background: #000;
`;
export const HelpItemTitle = styled.div`
	margin-top: 15px;
	text-align: left;
	color: #fff;
	font-size: 24px;
	@media (max-width: 999px) {
		margin-top: 8px;
		font-size: 14px;
	}
`;

export const HR = styled.div`
	border-bottom: 1px solid #26323a;
`;
