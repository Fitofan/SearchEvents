import create from "zustand";
import { combine } from "zustand/middleware";

const accessKey = "themeMode";

const getDefaultValues = () => {
    try {
        return {
            theme: localStorage.getItem(accessKey) || "",
        };
    } catch {
        return {
            theme: "",
        };
    }
};

export const useTokenStore = create(
    combine(getDefaultValues(), (set) => ({
        setTokens: (x: { theme: string }) => {
            try {
                localStorage.setItem(accessKey, x.theme);
            } catch {}
            set(x);
        },
        removeTokens: () => {
            try {
                localStorage.removeItem(accessKey);
            } catch {}
        },
    }))
);
