import create from "zustand";
import { combine } from "zustand/middleware";

export const useToastStore = create(
    combine(
        {
            toastsList: [] as Array<any>,
        },
        (set) => ({
            addOne: (v: any) => {
                return set((s) => ({
                    toastsList: [v, ...s.toastsList],
                }));
            },
            deleteItem: (toastId: any) => {
                return set((s) => ({
                    toastsList: s.toastsList.filter((obj: any) => obj.id != toastId),
                }));
            },
            setItem: (v: any) => {
                return set((s) => ({
                    toastsList: s.toastsList.map((obj: any) =>
                        obj.id === v.id ? { ...obj, ...v } : obj
                    ),
                }));
            },
            clear: () => {
                return set({ toastsList: [] });
            },
        })
    )
);
