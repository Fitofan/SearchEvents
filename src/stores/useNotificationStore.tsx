import create from "zustand";
import { combine } from "zustand/middleware";

export const useNotificationStore = create(
    combine(
        {
            notificationList: {} as Record<string, any[]>,
        },
        (set) => ({
            setAll: (v: Array<any>, key: string) => {
                return set((s) => {
                    return {
                        notificationList: {
                            ...s.notificationList,
                            [key]: [...v],
                        },
                    };
                });
            },
            addOne: (v: any, key: string) => {
                return set((s) => {
                    if (s.notificationList[key]?.length > 0) {
                        const newMap = { ...s.notificationList };
                        newMap[key].push(v);
                        return { notificationList: newMap };
                    }
                    return { notificationList: s.notificationList };
                });
            },
            addMore: (v: any[], key: string) => {
                return set((s) => {
                    if (s.notificationList[key]?.length > 0) {
                        const newMap = { ...s.notificationList };
                        newMap[key] = [...newMap[key], ...v];
                        return { notificationList: newMap };
                    } else {
                        const newMap = { ...s.notificationList };
                        newMap[key] = [...v];
                        return { notificationList: newMap };
                    }
                });
            },
            deleteItem: (notId: any) => {
                return set((s) => {
                    const newMap = { ...s.notificationList };
                    for (const key of Object.keys(s.notificationList)) {
                        newMap[key] = s.notificationList[key].map(
                            (obj: any) => obj.id != notId
                        );
                    }
                    return { notificationList: newMap };
                });
            },
            setItem: (v: any) => {
                return set((s) => {
                    const newMap = { ...s.notificationList };
                    for (const key of Object.keys(s.notificationList)) {
                        newMap[key] = s.notificationList[key].map((obj: any) =>
                            obj.id === v.id ? { ...obj, ...v } : obj
                        );
                    }
                    return { notificationList: newMap };
                });
            },
            clear: () => {
                return set({ notificationList: {} });
            },
        })
    )
);
