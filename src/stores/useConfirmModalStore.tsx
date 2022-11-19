import create from "zustand";
import { combine } from "zustand/middleware";

type Fn = () => void;

export const useConfirmModalStore = create(
    combine(
        {
            message: "",
            onConfirm: undefined as undefined | Fn,
            type: "",
        },
        (set) => ({
            setMessage: (message: string, onConfirm: Fn, type = "") =>
                set({ message: message, onConfirm: onConfirm, type: type }),
            close: () => set({ onConfirm: undefined, message: "", type: "" }),
            set,
        })
    )
);
