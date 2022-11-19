import React from "react";
import { useAtom } from "jotai";

import { openNotificationsDialog } from "./../atoms";
import { useTypeSafeTranslation } from "./../utils/useTypeSafeTranslation";
interface NotificationItemProps {
	item: any;
	time: boolean;
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
	const { item, time } = props;
	const { t } = useTypeSafeTranslation();
	const [, setOpenNotificationDialog] = useAtom(openNotificationsDialog);
	const closeDialog = () => {
		setOpenNotificationDialog(false);
	};

	return null;
};

const clink = (link: any) => {
	if (link.charAt(0) !== "/") {
		return "/" + link;
	}
	return link;
};
