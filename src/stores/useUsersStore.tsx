import create from "zustand";
import { combine } from "zustand/middleware";

export const useUsersStore = create(
    combine(
        {
            users: {} as Record<number, any>,
        },
        (set) => ({
            setUser: (user: any) => {
                return set((state) => {
                    return {
                        users: {
                            ...state.users,
                            [user.id]: user,
                        },
                    };
                });
            },

            set,
        })
    )
);
