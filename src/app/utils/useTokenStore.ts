import create from "zustand";
import { combine } from "zustand/middleware";
import { __prod__ } from "../constants";

const accessTokenKey = "access_token" + (__prod__ ? "" : "dev");

const getDefaultValues = () => {
    try {
        return {
            accessToken: localStorage.getItem(accessTokenKey) || "",
        };
    } catch {
        return {
            accessToken: "",
        };
    }
};

export const useTokenStore = create(
    combine(getDefaultValues(), (set) => ({
        setTokens: (x: { accessToken: string }) => {
            try {
                localStorage.setItem(accessTokenKey, x.accessToken);
            } catch {}
            set(x);
        },
        removeTokens: () => {
            try {
                localStorage.removeItem(accessTokenKey);
            } catch {}
        },
    }))
);
