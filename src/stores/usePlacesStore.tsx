import create from "zustand";
import { combine } from "zustand/middleware";
const placesStoreKey = "ft_places2";

const getDefaultValues = () => {
    try {
        localStorage.removeItem("_ft_2pla3c122es2a2a22d3_4s4toresss");
        localStorage.removeItem("ft_places1");
        const t = localStorage.getItem(placesStoreKey) || "";
        if (t) {
            const b = JSON.parse(t) as any;
            const sp_as = {} as any;
            b.map((v: any) => {
                sp_as[`${v.id}-${v.lang}`] = v;
                return [];
            });
            return { places: sp_as, loadings: [] as string[] };
        }
        return {
            places: {} as Record<string, any>,
            loadings: [] as string[],
        };
    } catch {
        return {
            places: {} as Record<string, any>,
            loadings: [] as string[],
        };
    }
};

export const usePlacesStore = create(
    combine(getDefaultValues(), (set) => ({
        addPlace: (place_item: any) => {
            return set((state) => {
                const bb = {
                    ...state.places,
                    [`${place_item.id}-${place_item.lang}`]: place_item,
                };
                localStorage.setItem(placesStoreKey, JSON.stringify(Object.values(bb)));
                return {
                    places: bb,
                };
            });
        },
        deleteLoading: (key: string) => {
            return set((state) => {
                return {
                    loadings: state.loadings.filter((v: string) => v !== key),
                };
            });
        },
        setLoading: (key: string) => {
            return set((state) => {
                if (!state.loadings.includes(key)) {
                    return {
                        loadings: [...state.loadings, key],
                    };
                }
                return {
                    loadings: state.loadings,
                };
            });
        },
    }))
);
