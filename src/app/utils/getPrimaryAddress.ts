import { useIPStore } from "../../stores/useIPStore";
import { POST_API } from "./../API";
import i18n from "i18next";
import axios from "axios";

export const getPrimaryAddress = async () => {
    const formData = new FormData();
    if (i18n.language) {
        const l = i18n.language.substring(0, 2);
        formData.append("lang", l);
    }
    axios
        .post<any>(POST_API.FEATURES.getMyAddress, formData, {
            data: formData,
            responseType: "json",
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "false",
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            const data = response.data;
            if (data?.success) {
                useIPStore
                    .getState()
                    .setData(
                        data.ip,
                        data.place.id,
                        data.place.address,
                        data.place.google_id
                    );
            }
        });
};
