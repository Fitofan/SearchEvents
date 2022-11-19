import create from "zustand";
import { combine } from "zustand/middleware";

export type useIPType = {
	ip: string;
	place_id: number;
	address: string;
	google_id: string;
} | null;

const ipKey = "myip";

const getDefaultValues = () => {
    try {
        const t = localStorage.getItem(ipKey) || "";
        if (t) {
            return {
                ipdata: JSON.parse(t) as useIPType,
            };
        }
        return {
            ipdata: null as useIPType,
        };
    } catch {
        return {
            ipdata: null as useIPType,
        };
    }
};

export const useIPStore = create(
    combine(getDefaultValues(), (set) => ({
        setData: (
            ip: string,
            place_id: number,
            address: string,
            google_id: string
        ) => {
            try {
                localStorage.setItem(
                    ipKey,
                    JSON.stringify({
                        ip,
                        place_id,
                        address,
                        google_id,
                    })
                );
            } catch {}

            set({
                ipdata: {
                    ip,
                    place_id,
                    address,
                    google_id,
                },
            });
        },
        removeTokens: () => {
            try {
                localStorage.removeItem(ipKey);
            } catch {}
            set({
                ipdata: null,
            });
        },
    }))
);
