import React, { useEffect, useState, useRef } from "react";
import { useToastStore } from "../../stores/useToastStore";
import {
    ToastItemSt,
    ToastDangerItemSt,
    ToastItemClose,
} from "./ToastPanelStyled";

import { NotificationItem } from "./NotificationItem";

interface ToastItemProps {
	toast: any;
}
export const ToastItem = (props: ToastItemProps) => {
    const { toast } = props;
    const [sdasd, setsdasd] = useState(false);
    const fadeItem = () => {
        setsdasd(true);
    };
    const removeToast = (toastId: any) => {
        fadeItem();
        setTimeout(() => {
            useToastStore.getState().deleteItem(toastId);
        }, 1000);
    };
    const divRef = useRef<HTMLDivElement>(null);
    const [tim, setTim] = useState(new Date().getTime() / 1000.0);
    useEffect(() => {
        setTimeout(() => {
            removeToast(toast.id);
        }, 10000);
    }, []);

    if (toast?.toast && toast?.danger) {
        return (
            <ToastDangerItemSt>
                <NotificationItem time={false} item={toast} />
                <ToastItemClose onClick={() => removeToast(toast.id)}>
					&times;
                </ToastItemClose>
            </ToastDangerItemSt>
        );
    }
    return (
        <ToastItemSt className={sdasd ? "faded" : ""}>
            <NotificationItem time={false} item={toast} />
            <ToastItemClose onClick={() => removeToast(toast.id)}>
				&times;
            </ToastItemClose>
        </ToastItemSt>
    );
};
