import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { darken, lighten } from "polished";

export const Btn = styled(Button)`
	display: inline-flex;
	padding: 8px 16px;
	font-size: 16px;
	line-height: 1.5 !important;
	border-radius: 5px;
	background: #525d67;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
	text-align: center;
	width: ${(props) => (props?.fullWidth ? "100% !important" : "auto")},
	justify-content: center;
	&:hover {
		background: ${darken(0.03, "#525d67")};
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px;
	}
`;

export const BtnTransparent = styled(Button)`
	display: inline-flex;
	padding: 10px 25px;
	font-size: 16px;
	border-radius: 5px;
	line-height: 1.5 !important;
	background: #525d67;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
	text-align: center;
	justify-content: center;
	&:hover {
		background: ${darken(0.03, "#525d67")};
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px 16px;
	}
`;

export const BtnSuccess = styled(Btn)`
	background: #44b181;
	color: #fff !important;
	&:hover {
		background: ${darken(0.05, "#44b181")};
	}
	&.Mui-disabled {
		opacity: 0.8 !important;
		/* color: rgba(255, 255, 255, 0.8);*/
		background: ${lighten(0.15, "#44b181")} !important;
	}
`;

export const BtnSuccessMuted = styled(Btn)`
	background: #6a9a94;
	&:hover {
		background: ${darken(0.05, "#6a9a94")};
	}
	&.Mui-disabled {
		background: ${lighten(0.05, "#6a9a94")} !important;
	}
`;
export const BtnDanger = styled(Btn)`
	background: #fa5a66;
	color: #fff !important;
	&:hover {
		background: ${darken(0.05, "#fa5a66")};
	}
	&.Mui-disabled {
		opacity: 0.8 !important;
		background: ${lighten(0.05, "#fa5a66")} !important;
	}
`;
