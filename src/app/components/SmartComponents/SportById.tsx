import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { wsCallback } from "../../../createSocket";
import { useSocketStatus } from "../../../stores/useSocketStatus";
import { API } from "./../../API";
import { useSportsStore } from "./../../../stores/useSportsStore";
interface SportByIdProps {
	SportId: number;
}

export const SportById: React.FC<SportByIdProps> = (props) => {
    const { SportId } = props;
    const sports = useSportsStore((state) => state.sports);
    const [sport, setSport] = useState<any>(null);
    const { i18n } = useTranslation();
    const { status } = useSocketStatus();

    const loadSport = () => {
        wsCallback(
            {
                op: API.SPORT.getById,
                d: {
                    Id: SportId,
                },
            },
            function (data: any) {
                if (data?.error) {
                }
                if (data?.sport) {
                    setSport(data.sport);
                    useSportsStore.getState().addSport(data.sport);
                }
            }
        );
    };

    useEffect(() => {
        if (!sport) {
            if (sports.hasOwnProperty("" + SportId)) {
                setSport(sports["" + SportId]);
            } else {
                loadSport();
            }
        }
    }, [sports]);

    if (sport) {
        if (i18n.language === "en") {
            return sport.name;
        }
        const s = sport.names.find((n: any) => n.key === i18n.language);
        if (s) {
            return s.name;
        } else {
            return sport.name;
        }
    }

    return null;
};
