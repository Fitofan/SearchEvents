import React from "react";

import {
	format,
	differenceInDays,
	formatDistanceToNowStrict,
	formatRelative,
	parse,
} from "date-fns";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import ukLocale from "date-fns/locale/uk";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import { isString } from "lodash";

export const longMonths = [
	"months.january",
	"months.february",
	"months.march",
	"months.april",
	"months.may",
	"months.june",
	"months.july",
	"months.august",
	"months.september",
	"months.october",
	"months.november",
	"months.december",
];
export const shortMonths = [
	"shortMonths.january",
	"shortMonths.february",
	"shortMonths.march",
	"shortMonths.april",
	"shortMonths.may",
	"shortMonths.june",
	"shortMonths.july",
	"shortMonths.august",
	"shortMonths.september",
	"shortMonths.october",
	"shortMonths.november",
	"shortMonths.december",
];

export const dateToBeauty = (date: Date, t: any) => {
	const d = date.getDate();
	const m = date.getMonth();
	const y = date.getFullYear();
	return `${d} ${t(shortMonths[m])} ${y}`.toLocaleLowerCase();
};

const localeMap = {
	en: enLocale,
	uk: ukLocale,
	ru: ruLocale,
};

interface TranslatedFullDateProps {
	ml: any;
}

export const TranslatedFullDate: React.FC<TranslatedFullDateProps> = (
	props: TranslatedFullDateProps
) => {
	const { ml } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);
	const date = new Date(
		typeof ml === "string" ? parse(ml, "yyyy-MM-dd", new Date()) : ml
	);
	return (
		<>
			{format(date, "d MMM y", {
				locale: localeMap[locale],
			})}
		</>
	);
};

interface TranslatedBirthdateProps {
	ml: Date;
}

export const TranslatedBirthdate: React.FC<TranslatedBirthdateProps> = (
	props: TranslatedFullDateProps
) => {
	const { ml } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);
	const date = new Date(ml);
	return (
		<>
			{format(date, "d MMM y", {
				locale: localeMap[locale],
			})}
		</>
	);
};

export const SimpleLocalizedDate: React.FC<TranslatedBirthdateProps> = (
	props: TranslatedFullDateProps
) => {
	const { ml } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);
	const date = new Date(ml);
	return (
		<>
			{format(date, "P", {
				locale: localeMap[locale],
			})}
		</>
	);
};

export const localizedDate = (ml: any) => {
	let locale = "en" as keyof typeof localeMap;
	if (i18n.language) {
		const l = i18n.language.substring(0, 2);
		if (l in localeMap) {
			locale = l as keyof typeof localeMap;
		}
	}

	const date = new Date(ml);
	return format(date, "P", {
		locale: localeMap[locale],
	});
};

export const TranslatedFullDateTime: React.FC<TranslatedFullDateProps> = (
	props: TranslatedFullDateProps
) => {
	const { ml } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);
	const date = new Date(ml * 1000);
	return (
		<>
			{format(date, "d MMM y, p", {
				locale: localeMap[locale],
			})}
		</>
	);
};

interface TranslatedRelativeDateProps {
	ml: number;
}

export const TranslatedRelativeDate: React.FC<TranslatedRelativeDateProps> = (
	props: TranslatedRelativeDateProps
) => {
	const { ml } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);
	const date = new Date(ml * 1000);
	const cd = new Date();
	const days = differenceInDays(cd, date);
	if (days < 1) {
		return (
			<>
				{formatDistanceToNowStrict(date, {
					locale: localeMap[locale],
					addSuffix: true,
				})}
			</>
		);
	}
	if (days < 5) {
		return (
			<>
				{formatRelative(date, cd, {
					locale: localeMap[locale],
				})}
			</>
		);
	}
	if (date.getFullYear() == cd.getFullYear()) {
		return (
			<>
				{format(date, "d MMM p", {
					locale: localeMap[locale],
				})}
			</>
		);
	}
	return (
		<>
			{format(date, "d MMM y, p", {
				locale: localeMap[locale],
			})}
		</>
	);
};

interface TranslatedTwoDatesProps {
	date_from: any;
	date_to: any;
}

export const TranslatedTwoDates: React.FC<TranslatedTwoDatesProps> = (
	props: TranslatedTwoDatesProps
) => {
	const { date_from: df, date_to: dt } = props;
	const { i18n } = useTranslation();
	const [locale, setLocale] = React.useState<keyof typeof localeMap>("en");

	React.useEffect(() => {
		if (i18n.language) {
			const l = i18n.language.substring(0, 2);
			if (l in localeMap) {
				setLocale(l as keyof typeof localeMap);
			}
		}
	}, [i18n.language]);

	const date_from = isString(df) ? parse(df, "yyyy-MM-dd", new Date()) : df;
	const date_to = isString(dt) ? parse(dt, "yyyy-MM-dd", new Date()) : dt;

	const mf = new Date(date_from).getMonth();
	const mt = new Date(date_to).getMonth();

	if (date_from.toString() == date_to.toString()) {
		return (
			<>
				{format(new Date(date_from), "d MMMM y", {
					locale: localeMap[locale],
				})}
			</>
		);
	}
	if (mf === mt) {
		return (
			<>
				{format(new Date(date_from), "d ", {
					locale: localeMap[locale],
				})}
				{" - "}
				{format(new Date(date_to), "d MMMM y", {
					locale: localeMap[locale],
				})}
			</>
		);
	}
	return (
		<>
			{format(new Date(date_from), "d MMMM ", {
				locale: localeMap[locale],
			})}
			{" - "}
			{format(new Date(date_to), "d MMMM y", {
				locale: localeMap[locale],
			})}
		</>
	);
};

export const translateTwoDates = (props: TranslatedTwoDatesProps) => {
	const { date_from, date_to } = props;

	let locale = "en" as keyof typeof localeMap;

	if (i18n.language) {
		const l = i18n.language.substring(0, 2);
		if (l in localeMap) {
			locale = l as keyof typeof localeMap;
		}
	}

	if (date_from == date_to) {
		return format(new Date(date_from), "d MMMM y", {
			locale: localeMap[locale],
		});
	}
	const mf = new Date(date_from).getMonth();
	const mt = new Date(date_to).getMonth();
	if (mt == mf) {
		return `${format(new Date(date_from), "d ", {
			locale: localeMap[locale],
		})} - ${format(new Date(date_to), "d MMMM y", {
			locale: localeMap[locale],
		})}`;
	}
	return `${format(new Date(date_from), "d MMMM ", {
		locale: localeMap[locale],
	})} - ${format(new Date(date_to), "d MMMM y", {
		locale: localeMap[locale],
	})}`;
};

export const computeAgeInYears = (dateofbirth: any) => {
	const today = new Date();
	const birthDate = new Date(dateofbirth);
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
};

export const parseDate = (input: any) => {
	const parts = input.match(/(\d+)/g) as any;
	// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
	return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
};
