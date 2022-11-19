import { useTranslation } from "react-i18next";

interface VariableTranslationType {
	time?: Date;
	date?: Date;
	count?: number;
}

export const useTypeSafeTranslation = () => {
    const { t } = useTranslation();

    return {
        t: (s: any, f?: VariableTranslationType) => t(s, f),
    };
};
