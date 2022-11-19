import React from "react";
import { EVENT_TYPES } from "./../constants";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import ukLocale from "date-fns/locale/uk";
import { useTranslation } from "react-i18next";

const localeMap = {
    en: enLocale,
    uk: ukLocale,
    ru: ruLocale,
};

const PlacesAssoc = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5-8",
    "9-16",
    "9-16",
    "7-32",
    "33-63",
];
export const ConvertPlaceId = (place_id: number) => {
    if (place_id >= 1 && place_id <= 9) {
        return PlacesAssoc[place_id];
    }
    return "-";
};

interface ETI {
	typeId: any;
}

export const EventType = (props: ETI) => {
    const { t } = useTranslation();
    const type = EVENT_TYPES.find((v) => v.id == props.typeId);
    if (!type) return null;
    return <>{t(`event_types.${type.name}`)}</>;
};
