import React from "react";
import { ORG_TYPES } from "./../constants";
import { useTranslation } from "react-i18next";
interface ETI {
	typeId: any;
}

export const OrgType = (props: ETI) => {
    const { t } = useTranslation();
    const type = ORG_TYPES.find((v) => v.id == props.typeId);
    if (!type) return null;
    return <>{t(type.name)}</>;
};
