import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DialogContent from "@material-ui/core/DialogContent";
import { darken } from "polished";
import {
    createStyles,
    withStyles,
    Theme,
} from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
export const SearchFieldWrapper = styled.div`
	padding-right: 16px;
	flex: 1;
`;

export const SearchTextFieldStyled = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: "#50616b !important",
            borderRadius: "30px",
        },
        notchedOutline: {
            borderColor: "#50616b",
        },
        input: {
            position: "relative",
            border: "1px solid #50616b",
            fontSize: 16,
            width: "100%",
            color: "#fff",
            padding: "12px 26px 12px 12px",
            borderRadius: "30px",
            transition: theme.transitions.create(["border-color", "box-shadow"]),

            // Use the system font instead of the default Roboto font.
        },
    })
)(OutlinedInput);

export const NothingFound = styled.div`
	font-size: 18px;
	color: #fff;
	text-align: center;
	padding: 40px 16px;
`;

export const MTabs = withStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 40,
        },
        indicator: {
            height: "2px",
        },
    })
)(Tabs);
export const MTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: "none",
            minHeight: 32,
            flex: 1,
            minWidth: 100,
            "@media (min-width: 0px)": {},
            "@media (max-width: 999px)": {
                paddingLeft: 0,
                paddingRight: 0,
                marginRight: "10px",
            },
        },
    })
)(Tab);

export const SearchTextField = (props: any) => {
    const { isLoading, ...other } = props;
    return (
        <SearchTextFieldStyled
            fullWidth
            required
            {...other}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            endAdornment={
                isLoading ? (
                    <InputAdornment position="end">
                        <CircularProgress
                            disableShrink
                            size={24}
                            value={40}
                            thickness={4}
                        />
                    </InputAdornment>
                ) : null
            }
        />
    );
};
export const ModalContent = styled(DialogContent)`
	padding: 0 0 24px;
	flex: 1;
	@media (max-width: 663px) {
		padding: 0 0 16px;
	}
`;
export const ResultItems = styled(DialogContent)`
	padding: 0 24px;
	min-height: 100vh;
	@media (max-width: 663px) {
		padding: 0 16px;
	}
`;
export const FavoriteItems = styled(DialogContent)`
	margin-top: 16px;
	padding: 0 24px;
	min-height: 128px;
	@media (max-width: 663px) {
		padding: 0 16px;
	}
`;
export const SearchModalHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 16px 4px;
	font-size: 18px;
	color: #fff;
	& .MuiIconButton-root {
		padding: 6px;
		.MuiSvgIcon-root {
			font-size: 30px;
			width: 30px;
			height: 30px;
		}
	}
`;

export const CloseDialogModalIcon = (props: any) => {
    return (
        <IconButton
            edge="start"
            color="inherit"
            style={{ marginLeft: "auto" }}
            aria-label="close"
            {...props}>
            <CloseIcon />
        </IconButton>
    );
};

export const RestorePswBtn = styled(Button)`
	padding: 0;
`;
export const LoginModalError = styled.div`
	margin-top: 10px;
	color: #ff696a;
	font-size: 16px;
`;

export const HeaderTitle = styled.span`
	font-size: 24px;
	color: #fff;
`;
export const UploadAvatarIcon = styled.img`
	width: 100px;
`;
export const BackgroundImage = styled.img`
	border-radius: 30px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const H1div = styled.div`
	font-size: 32px;
	color: #fff;
	text-align: center;
`;
export const H2div = styled.div`
	max-width: 300px;
	margin: 0 auto 24px;
	font-size: 20px;
	color: #fff;
	text-align: center;
`;

export const ForgotPasswordText = styled.div`
	text-align: right;
	margin-top: 16px;
	color: #d0d0d0;
	line-height: 1;
	font-size: 16px;
	a {
	}
`;
export const InputFieldWrap = styled.div`
	margin-top: 16px;
`;
export const LoginInputWrap = styled.div`
	margin-top: 32px;
`;
export const LoginPasswordWrap = styled.div`
	margin-top: 20px;
`;
export const Logo = styled.img`
	margin: 16px auto 16px;
	width: 50px;
`;

export const LabelTitle = styled.div`
	font-size: 16px;
	color: rgba(255, 255, 255, 0.7);
`;

export const LabelTitleWithMargin = styled(LabelTitle)`
	font-size: 16px;
	margin-bottom: 10px;
	color: rgba(255, 255, 255, 0.7);
`;

export const BirthdateRow = styled.div`
	margin-top: 20px;
	display: flex;
`;
export const BirthdateDay = styled.div`
	width: 20%;
`;
export const BirthdateYear = styled.div`
	width: 30%;
`;
export const BirthdateMonth = styled.div`
	width: 50%;
	padding: 0 10px;
`;
export const RadioRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 8px;
`;
export const RadioText = styled.div`
	font-size: 16px;
	color: #fff;
`;
export const GenderRow = styled.div`
	justify-content: space-between;
	margin-top: 20px;
	display: flex;
`;
export const GenderContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	width: calc(50% - 5px);
	height: 57px;
	border: 1px solid #626a71;
	cursor: pointer;
`;
export const GenderRadioLabel = styled.label`
	color: #fff;
	font-size: 16px;
`;
export const LoginButton = styled(Button)`
	margin-top: 16px;
	display: inline-flex;
	padding: 10px 25px;
	height: 54px;
	font-size: 20px;
	line-height: 1.5 !important;
	border-radius: 5px;
	background: #44b181;
	width: 100%;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
	text-align: center;
	justify-content: center;
	&:hover {
		background: ${darken(0.03, "#44b181")};
	}
	@media (max-width: 999px) {
		font-size: 14px;
		padding: 10px;
	}
`;

export const LoginModalFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-top: 24px;
	margin-bottom: 16px;
	color: #d0d0d0;
	line-height: 1;
	font-size: 16px;
	button {
		line-height: 1;
		font-size: 16px;
		color: #44b181;
	}
`;

export const BackModalIcon = (props: any) => {
    return (
        <IconButton
            edge="start"
            style={{ marginRight: "auto" }}
            color="inherit"
            aria-label="close"
            {...props}>
            <KeyboardBackspaceIcon />
        </IconButton>
    );
};

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

export const MTabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`search-auto-tab-${index}`}
            aria-labelledby={`search-auto-tabpanel-${index}`}
            {...other}>
            {children}
        </div>
    );
};
