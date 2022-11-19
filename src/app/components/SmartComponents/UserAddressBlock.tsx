import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { wsCallback } from "../../../createSocket";
import { API } from "./../../API";
import { usePlacesStore } from "./../../../stores/usePlacesStore";
interface AddressProps {
	PlaceId: number;
}

export const UserAddressBlock: React.FC<AddressProps> = (props) => {
    const { PlaceId } = props;
  
    const { places, loadings, deleteLoading, setLoading } = usePlacesStore();
    const [place, setPlace] = useState<any>(null);
    const { i18n } = useTranslation();

    const loadSport = () => {
        let lang = i18n.language;
        if (!lang) {
            lang = "en";
        }
        lang = lang.substring(0, 2);
        const key = `${PlaceId}-${lang}`;
        if (!loadings.includes(key)) {
            setLoading(key);
            wsCallback(
                {
                    op: API.PLACES.getPlaceById,
                    d: {
                        lang: lang,
                        placeId: PlaceId,
                    },
                },
                function (data: any) {
                    if (data?.place && data?.success) {
                        deleteLoading(key);
                        setPlace(data.place);
                        usePlacesStore.getState().addPlace(data.place);
                    }
                }
            );
        }
    };
    useEffect(() => {
        if (PlaceId) {
            let lang = i18n.language;
            if (!lang) {
                lang = "en";
            }
            lang = lang.substring(0, 2);
            if (places.hasOwnProperty(`${PlaceId}-${lang}`)) {
                setPlace(places[`${PlaceId}-${lang}`]);
            } else {
                loadSport();
            }
        }
    }, [places, i18n.language]);

    if (place) {
        return (
            <div className="profile-address-block ">
                <div className="profile-address-img">
                    <img src={`/flags_big/${place.country_code}.png`} alt="" />
                </div>
                <div className="profile-address-right">
                    <div className="profile-address-c">{place.city}</div>
                    <div className="profile-address-t">{place.country}</div>
                </div>
            </div>
        );
    }

    return <div className="profile-address-block "></div>;
};
