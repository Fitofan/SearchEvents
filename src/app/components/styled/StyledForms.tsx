import { styled } from "@mui/material/styles";
import { OutlinedInput, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import CircularProgress from "@material-ui/core/CircularProgress";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export const HeaderWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;
export const HeaderLeft = styled("div")``;
export const HeaderRight = styled("div")``;
export const HeaderTitle = styled("div")`
	font-size: 20px;
	color: #fff;
	@media (max-width: 999px) {
		font-size: 16px;
	}
`;

export const CustomTextField = styled(TextField)({
	"&.MuiTextField-root": {
		width: "100%",
		borderRadius: 4,
		minHeight: 46,
		backgroundColor: "#50616b !important",
		padding: "12px 12px 12px 12px !important",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		"border-color": "#50616b !important",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		"border-color": "#fff !important",
		"border-width": "1px",
	},
	"& .MuiInputAdornment-positionStart": {
		marginRight: "0 !important",
	},
	"& .MuiOutlinedInput-input": {
		borderRadius: 4,
		backgroundColor: "#50616b !important",
		padding: 0,
	},
});

export const InputField = styled(OutlinedInput)(({ theme: Theme }) => ({
	"&.MuiInputBase-root": {
		width: "100%",
		borderRadius: 4,
		backgroundColor: "#50616b !important",
		padding: "0 12px 0 12px !important",
		height: "45px",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		"border-color": "#50616b !important",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		"border-color": "#fff !important",
		"border-width": "1px",
	},
	"& .MuiInputAdornment-positionStart": {
		marginRight: "0 !important",
	},
	"& .MuiOutlinedInput-input": {
		padding: 0,
	},
	"input, select, textarea": {
		borderRadius: "4px !important",
		position: "relative",
		borderColor: "#50616b",
		fontSize: 16,
		appearance: "none",
		"-webkit-appearance": "none",
		width: "100%",
		color: "#fff",
		"&::placeholder": {
			color: "rgba(255, 255, 255, 0.8)",
			opacity: "1",
		},
		padding: 0,
		// padding: "12px 12px 12px 12px !important",
		"&[type=number]": {
			// padding: "12px 2px 12px 12px",
		},
		"&:focus": {
			outline: "none !important",
			borderRadius: 4,
			borderColor: "#fff",
			backgroundColor: "#50616b",
		},
	},
}));

export const Row = styled("div")`
	display: flex;
	flex-wrap: nowrap;
	align-items: flex-start;
`;

export const FormCard = styled("div")`
	width: 100%;
	background: #273541;
	padding: 24px;
	border-radius: 12px;
	@media (max-width: 999px) {
		padding: 15px;
	}
`;
export const FormCardOuter = styled("div")`
	margin-top: -24px;
	margin-left: -24px;
	margin-right: -24px;
	@media (max-width: 999px) {
		margin-top: -15px;
		margin-left: -15px;
		margin-right: -15px;
	}
`;

export const CardRow = styled("div")`
	padding: 0 24px;
	@media (max-width: 999px) {
		padding: 0 15px;
	}
`;

export const HR = styled("div")`
	height: 0;
	width: 100%;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
export const HRfull = styled(HR)`
	width: auto;
	margin-left: -24px;
	margin-right: -24px;
	@media (max-width: 999px) {
		margin-left: -16px;
		margin-right: -16px;
	}
`;

export const CurrencyAdornment = styled("div")`
	padding-right: 10px;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.8);
`;

export const FormCardTitle = styled("div")`
	display: block;
	width: 100%;
	font-size: 16px !important;
	font-weight: bold;
	color: #fff;
`;

export const FormGroupHelper = styled("div")`
	margin-top: 4px;
	font-size: 14px;
	line-height: 1.3;

	@media (max-width: 999px) {
		font-size: 14px;
		line-height: 1.3;
	}
	color: #ffffffce;
`;
export const FormGroup = styled("div")`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
`;
export const FormGroupInline = styled(FormGroup)`
	display: flex;
	align-items: center;
`;

export const FormGroupLabel = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 14px !important;
	color: rgba(255, 255, 255, 0.7);
	margin-bottom: 8px;
`;

export const FormGroupLabelInline = styled("div")`
	display: block;
	font-size: 14px !important;
	color: rgba(255, 255, 255, 0.7);
	white-space: nowrap;
	margin-right: 8px;
`;

export const Col3 = styled("div")`
	width: 33.33333333%;
	float: left;
	position: relative;
	padding-right: 15px;
	padding-left: 15px;
	margin-bottom: 16px;
	@media (max-width: 1200px) {
		width: 40%;
	}
`;
export const Col9 = styled("div")`
	width: 66.66666667%;
	float: left;
	position: relative;
	padding-right: 15px;
	padding-left: 15px;
	margin-bottom: 16px;
	@media (max-width: 1200px) {
		width: 60%;
	}
`;

export const TextActionRow = styled("div")`
	display: flex;
`;
export const TextActionLeft = styled("div")``;
export const TextAction1 = styled("div")`
	font-size: 16px;
`;
export const TextAction2 = styled("div")`
	font-size: 14px;
`;

const LoadWrap = styled("div")`
	height: 164px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoadingContainer = (props: any) => {
	return (
		<LoadWrap>
			<CircularProgress style={{ color: "#fff" }} />
		</LoadWrap>
	);
};

export const PostSuccess = styled("div")`
	margin-bottom: 16px;
	color: #44b181;
	font-size: 16px;
`;

const IconBackBlock = styled(Link)`
	background: #273541;
	border-radius: 14px;
	padding: 4px 16px;
	display: flex;
	text-decoration: none !important;
	transition: all 0.3s ease-in-out;
	align-items: center;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}
	& .MuiIconButton-root {
		padding: 6px;
		.MuiSvgIcon-root {
			color: #fff;
			font-size: 30px;
			width: 16px
			height:16px;
		}
	}
`;

const IconBackText = styled("div")`
	font-size: 14px;
	cursor: pointer;
	color: #fff !important;
	padding-left: 16px;
`;
interface BackIconWithArrowProps {
	link: string;
	text: any;
}

export const BackIconWithArrow = (props: BackIconWithArrowProps) => {
	return (
		<IconBackBlock to={props.link}>
			<IconButton color="primary" edge="start" aria-label="close">
				<KeyboardBackspaceIcon />
			</IconButton>
			<IconBackText>{props.text}</IconBackText>
		</IconBackBlock>
	);
};

export const NothingFoundBlock = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 24px 24px 24px;
	svg {
		color: rgba(255, 255, 255, 0.8);
		font-size: 50px;
		margin-bottom: 24px;
	}
	@media (max-width: 999px) {
		padding: 24px 0 16px;
	}
	p {
		text-align: center;
	}
`;

export const LoaderWrapper = styled("div")`
	height: 164px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoaderBlock = () => {
	return (
		<LoaderWrapper>
			<CircularProgress />
		</LoaderWrapper>
	);
};
