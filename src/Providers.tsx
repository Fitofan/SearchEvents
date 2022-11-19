import { Provider } from "jotai";
import React from "react";
import { useTranslation } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./app/queryClient";
import { SnackbarProvider } from "notistack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import enLocale from "date-fns/locale/en-US";
import ruLocale from "date-fns/locale/ru";
import ukLocale from "date-fns/locale/uk";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
	createTheme,
	PaletteColorOptions,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns as DateAdapter } from "@mui/x-date-pickers/AdapterDateFns";
import { darken } from "polished";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Calibri", "Arial", "sans-serif"].join(),
		fontSize: 16,
	},
	palette: {
		type: "dark",

		secondary: {
			main: "#FA5A66",
		},
		primary: {
			main: "#44b181",
			dark: "#44b181",
		},
		success: {
			main: "#44b181",
			dark: "#44b181",
		},
	},
	overrides: {
		MuiCircularProgress: {
			indeterminate: {
				animationDuration: "600ms",
			},
		},
		MuiButtonBase: {
			root: {
				whiteSpace: "nowrap",
				margin: 0,
			},
		},
		MuiTabs: {
			indicator: {
				height: "3px",
			},
			scrollButtonsDesktop: {},
		},
		MuiPaper: {
			root: {
				elevation: 15,
				backgroundColor: "#273541",
			},
			rounded: {
				borderRadius: "12px",
			},
		},
		MuiTab: {
			root: {
				minWidth: 100,
				"@media (min-width: 0px)": {
					minWidth: 100,
				},
				"@media (max-width: 999px)": {
					minWidth: 0,
					paddingLeft: 0,
					paddingRight: 0,
					marginRight: "10px",
				},
			},
		},
		MuiFormControl: {
			root: {
				userSelect: "none",
			},
		},
		MuiFormLabel: {
			root: {
				fontSize: "1.2rem",
				shrink: true,
			},
		},
		MuiFormControlLabel: {
			root: {
				color: "#fff",
			},
		},
		MuiBackdrop: {
			root: {
				backgroundColor: "rgba(0, 0, 0, 0.3)",
			},
		},
		MuiDialog: {
			paper: {
				margin: 15,
				boxShadow: "0 5px 30px rgb(0 0 0 / 20%)",
			},
			scrollBody: {},

			paperScrollBody: {},
			paperFullWidth: {
				"@media(max-width: 663px)": {
					width: "calc(100% - 30px) !important",
					maxWidth: "calc(100% - 30px) !important",
				},
			},
		},
	},
});

declare module "@mui/material/styles" {
	interface Palette {
		blue: PaletteColorOptions;
	}
	interface PaletteOptions {
		blue: PaletteColorOptions;
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		blue: true;
	}
}

const { palette } = createTheme();

const muiTheme = createTheme({
	typography: {
		fontFamily: ["Calibri", "Arial", "sans-serif"].join(),
		fontSize: 16,
	},
	palette: {
		mode: "dark",

		primary: {
			main: "#525d67",
			dark: darken(0.03, "#525d67"),
		},
		secondary: {
			main: "#6a9a94",
			dark: darken(0.05, "#6a9a94"),
		},
		success: {
			main: "#44b181",
			dark: "#44b181",
		},
		error: {
			main: "#fa5a66",
			dark: "#fa5a66",
		},
		blue: palette.augmentColor({
			color: {
				main: "#4099ff",
				dark: "#1373e2",
			},
		}),
	},
	components: {
		MuiCircularProgress: {
			styleOverrides: {
				indeterminate: {
					animationDuration: "600ms",
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { color: "primary", variant: "contained" },
					style: {
						background: "#525d67",
						"&:hover": {
							background: darken(0.03, "#525d67"),
						},
					},
				},

				{
					props: { color: "error", variant: "contained" },
					style: {
						background: "#fa5a66",
						"&:hover": {
							background: darken(0.05, "#fa5a66"),
						},
					},
				},
				{
					props: { color: "secondary", variant: "contained" },
					style: {
						background: "#6a9a94",
						"&:hover": {
							background: darken(0.05, "#6a9a94"),
						},
					},
				},
				{
					props: { color: "success", variant: "contained" },
					style: {
						background: "#44b181",
						"&:hover": {
							background: darken(0.05, "#44b181"),
						},
					},
				},
				{
					props: { size: "large", variant: "contained" },
					style: {
						minHeight: 44,
						padding: "0 16px",
						minWidth: 100,
					},
				},
				{
					props: { size: "medium", variant: "contained" },
					style: {
						minHeight: 40,
						padding: "0 16px",
					},
				},
				{
					props: { size: "small", variant: "contained" },
					style: {
						minHeight: 32,
						padding: "0 8px",
					},
				},
			],
			styleOverrides: {
				root: {
					borderRadius: 5,
					color: "#fff",
					fontSize: "14px",
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					color: "#fff",
					whiteSpace: "nowrap",
					margin: 0,
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					height: "3px",
				},
			},
		},
		MuiTableContainer: {
			styleOverrides: {
				root: {
					background: "#273541",
					boxShadow: "none !important",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					elevation: 15,
					backgroundColor: "#273541",
				},
				rounded: {
					borderRadius: "12px",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					minWidth: 100,
					marginRight: "8px",
					"@media (min-width: 0px)": {
						minWidth: 100,
					},
					"@media (max-width: 999px)": {
						marginRight: "10px",
					},
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				input: {
					"&:-webkit-autofill": {
						"-webkit-box-shadow": "0 0 0 100px #273541 inset",
						"-webkit-text-fill-color": "#fff",
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					"&:-webkit-autofill": {
						"-webkit-box-shadow": "0 0 0 100px #273541 inset",
						"-webkit-text-fill-color": "#fff",
					},
				},
			},
		},
		MuiFormControl: {},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: "1.2rem",
					shrink: true,
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					color: "#fff",
				},
			},
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(0, 0, 0, 0.3)",
				},
				invisible: {
					backgroundColor: "transparent !important",
				},
			},
		},

		MuiDialog: {
			styleOverrides: {
				paper: {
					background: "#273541",
					margin: 15,
					boxShadow: "0 5px 30px rgb(0 0 0 / 20%)",
					"&.MuiContainer-maxWidthXs": {
						maxWidth: 100,
					},
				},
				scrollBody: {},

				paperScrollBody: {},
				paperFullWidth: {
					"@media(max-width: 663px)": {
						width: "calc(100% - 30px) !important",
						maxWidth: "calc(100% - 30px) !important",
					},
				},
			},
		},
	},
});

const localeMap = {
	en: enLocale,
	uk: ukLocale,
	ru: ruLocale,
};

interface ProvidersProps {}
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("ru");
	React.useEffect(() => {
		// console.log("selected language", i18n.language);
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);

	return (
		<Provider>
			<MuiThemeProvider theme={muiTheme}>
				<ThemeProvider theme={theme}>
					<LocalizationProvider
						locale={localeMap[locale]}
						dateAdapter={DateAdapter}>
						<QueryClientProvider client={queryClient}>
							<MuiPickersUtilsProvider
								locale={localeMap[locale]}
								utils={DateFnsUtils}>
								<SnackbarProvider
									autoHideDuration={3000}
									anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
									{children}
								</SnackbarProvider>
							</MuiPickersUtilsProvider>
						</QueryClientProvider>
					</LocalizationProvider>
				</ThemeProvider>
			</MuiThemeProvider>
		</Provider>
	);
};
