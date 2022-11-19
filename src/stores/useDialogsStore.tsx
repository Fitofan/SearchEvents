import create from "zustand";
import { combine } from "zustand/middleware";

export const useDialogsStore = create(
    combine(
        {
            dialogsList: [] as Array<any>,
        },
        (set) => ({
            setAll: (v: Array<any>) => {
                return set({ dialogsList: [...v] });
            },
            clear: () => {
                return set({ dialogsList: [] });
            },
        })
    )
);
