import React from "react";
import { useToastStore } from "../../stores/useToastStore";
import { ToastPanelContainer } from "./ToastPanelStyled";

import { ToastItem } from "./ToastItem";
export const ToastPanel = () => {
    const toastsList = useToastStore((state) => state.toastsList);

    return (
        <ToastPanelContainer>
            {toastsList.map((toast: any) => {
                return <ToastItem key={toast.id} toast={toast}></ToastItem>;
            })}
        </ToastPanelContainer>
    );
};

// export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
// 	const { item } = props;
// 	const { t } = useTypeSafeTranslation();
// 	if (item.type == "CLUB_JOIN_REQUEST") {
// 		return (
// 			<NotItem>
// 				<NotItemLeft>
// 					<NotItemImg
// 						to={item.link}
// 						style={{ backgroundImage: `url(${item.image})` }}></NotItemImg>
// 				</NotItemLeft>
// 				<NotItemRight>
// 					<Link to={item.link}>{item.name}</Link>
// 					<span> {t("wants_to_join")} </span>
// 					<Link to={item.orgLink}>{item.orgTitle}</Link>
// 					<NotItemBtns>
// 						{item.status == 0 ? (
// 							<>
// 								<NotBtnSuccess>{t("confirm")}</NotBtnSuccess>
// 								<NotBtnDecline>{t("decline")}</NotBtnDecline>
// 							</>
// 						) : item.status == 1 ? (
// 							<NotItemSuccess>{t("confirmed")}</NotItemSuccess>
// 						) : (
// 							<NotItemDecline>{t("declined")}</NotItemDecline>
// 						)}
// 					</NotItemBtns>
// 				</NotItemRight>
// 			</NotItem>
// 		);
// 	}

// 	return null;
// };
