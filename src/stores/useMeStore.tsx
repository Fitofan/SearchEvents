import create from "zustand";
import { combine } from "zustand/middleware";
import { authUserType } from "./../app/types";
const userTokenKey = "utokenkey";

const getDefaultValues = () => {
    try {
        const t = localStorage.getItem(userTokenKey) || "";
        if (t) {
            return {
                user: JSON.parse(t) as authUserType,
            };
        }
        return {
            user: null as authUserType,
        };
    } catch {
        return {
            user: null as authUserType,
        };
    }
};

export const useMeStore = create(
    combine(getDefaultValues(), (set) => ({
        setUser: (user: authUserType) => {
            if (user == null) {
                try {
                    localStorage.removeItem(userTokenKey);
                } catch (e) {}
            } else {
                localStorage.setItem(userTokenKey, JSON.stringify(user));
            }
            set((state) => ({
                ...state,
                user,
            }));
        },
        setImages: (images: any) => {
            set((state) => {
                const u = {
                    ...state.user,
                    mini_image_url: images.mini_image_url,
                    image_url: images.image_url,
                };
                return {
                    ...state,
                    u,
                };
            });
        },
    }))
);
