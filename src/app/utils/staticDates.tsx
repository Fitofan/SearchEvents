import MenuItem from "@material-ui/core/MenuItem";
import { useTypeSafeTranslation } from "./../utils/useTypeSafeTranslation";
export const GetDays = () => {
    const daysV = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <>
            {daysV.map((d) => {
                return <MenuItem value={d}>{d}</MenuItem>;
            })}
        </>
    );
};

interface getMonth {}
export const GetMonths: React.FC<getMonth> = () => {
    const { t } = useTypeSafeTranslation();

    return (
        <>
            <MenuItem value="1">{t("months.january")}</MenuItem>
            <MenuItem value="1">{t("months.february")}</MenuItem>
            <MenuItem value="1">{t("months.march")}</MenuItem>
            <MenuItem value="1">{t("months.april")}</MenuItem>
            <MenuItem value="1">{t("months.may")}</MenuItem>
            <MenuItem value="1">{t("months.june")}</MenuItem>
            <MenuItem value="1">{t("months.july")}</MenuItem>
            <MenuItem value="1">{t("months.august")}</MenuItem>
            <MenuItem value="1">{t("months.september")}</MenuItem>
            <MenuItem value="1">{t("months.october")}</MenuItem>
            <MenuItem value="1">{t("months.november")}</MenuItem>
            <MenuItem value="1">{t("months.december")}</MenuItem>
        </>
    );
};
export const GetYears = () => {
    const years:any = [];

    function gY() {
        const y = new Date().getFullYear();
        for (let i = y; i >= y - 100; i--) {
            years.push(<MenuItem value={i}>{i}</MenuItem>);
        }
        return years;
    }

    return <>{gY}</>;
};
