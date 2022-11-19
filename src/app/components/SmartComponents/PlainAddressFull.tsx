import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { wsCallback } from "../../../createSocket";
import { API } from "../../API";
import RoomIcon from "@material-ui/icons/Room";
import { usePlacesStore } from "../../../stores/usePlacesStore";
interface AddressProps {
	PlaceId: number;
	isLink?: boolean;
}

export const PlainAddressFull: React.FC<AddressProps> = (props) => {
    const { PlaceId, isLink } = props;
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
        return isLink ? (
            <a
                className="club-contacts-address"
                target="_blank"
                href={`https://www.google.com/maps/dir/?api=1&destination=${place.coords.lat},${place.coords.lng}`} rel="noreferrer">
                <RoomIcon /> {place.address}
            </a>
        ) : (
            place.address
        );
    }
    return null;
};
