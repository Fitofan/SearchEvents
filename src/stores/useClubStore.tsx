import create from "zustand";
import { combine } from "zustand/middleware";

export const useProducerStore = create(
    combine(
        {
            producer: null as any,
        },
        (set) => ({
            add: (p: any) =>
                set((s) => {
                    if (s.producer && !s.producer.closed) {
                        s.producer.close();
                    }
                    return { producer: p };
                }),
            close: () =>
                set((s) => {
                    if (s.producer && !s.producer.closed) {
                        s.producer.close();
                    }
                    return {
                        producer: null,
                    };
                }),
        })
    )
);
