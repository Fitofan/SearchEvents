import React from "react";
import "moment/min/moment-with-locales";
import { useTypeSafeTranslation } from "./useTypeSafeTranslation";
import { formatDistance } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import ukLocale from "date-fns/locale/uk";
import { useTranslation } from "react-i18next";

const localeMap = {
    en: enLocale,
    uk: ukLocale,
    ru: ruLocale,
};
interface TimeFromProps {
	ml: number;
	sex?: 1 | 2 | 0;
}

export const TimeFrom = (props: TimeFromProps) => {
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

    const { ml, sex } = props;
    const { t } = useTypeSafeTranslation();
    const g = sex || 0;
    const curTime = new Date().getTime() / 1000.0;
    const dif = curTime - ml;
    if (dif < 120) {
        if (g == 0) {
            return <>{t(`last_seen_0`) + " " + t("recently").toLowerCase()}</>;
        }
        if (g == 1) {
            return <>{t(`last_seen_1`) + " " + t("recently").toLowerCase()}</>;
        }
        if (g == 2) {
            return <>{t(`last_seen_0`) + " " + t("recently").toLowerCase()}</>;
        }
    } else {
        if (g == 0) {
            return (
                <>
                    {t(`last_seen_0`) +
						" " +
						formatDistance(new Date(ml * 1000), new Date().getTime(), {
						    locale: localeMap[locale],
						    addSuffix: true,
						})}
                </>
            );
        }
        if (g == 1) {
            return (
                <>
                    {t(`last_seen_1`) +
						" " +
						formatDistance(new Date(ml * 1000), new Date().getTime(), {
						    locale: localeMap[locale],
						    addSuffix: true,
						})}
                </>
            );
        }
        if (g == 2) {
            return (
                <>
                    {t(`last_seen_2`) +
						" " +
						formatDistance(new Date(ml * 1000), new Date().getTime(), {
						    locale: localeMap[locale],
						    addSuffix: true,
						})}
                </>
            );
        }
    }
    return null;
};
