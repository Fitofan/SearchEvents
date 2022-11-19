import { wsCallback } from "../../createSocket";
import { useNotificationStore } from "../../stores/useNotificationStore";
import { useToastStore } from "../../stores/useToastStore";
import { API } from "./../API";
export const confirmHandler = (id: number, type: number, t: any) => {
    try {
        wsCallback(
            {
                op: API.NOTIFICATION.submitNotification,
                d: {
                    nid: id,
                    type: type,
                },
            },
            (fd: any) => {
                if (fd?.error && fd.error) {
                    alert(t(fd.error));
                    return;
                }
                if (fd.notification) {
                    useNotificationStore.getState().setItem(fd.notification);
                    useToastStore.getState().setItem(fd.notification);
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
};
