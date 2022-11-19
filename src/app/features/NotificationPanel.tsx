import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useNotificationStore } from "../../stores/useNotificationStore";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useTypeSafeTranslation } from "./../utils/useTypeSafeTranslation";
import { openNotificationsDialog } from "./../atoms";
import { useMeStore } from "../../stores/useMeStore";
import {
	PanelContainer,
	PanelTitle,
	PanelHead,
	PanelItems,
	CloseModalIcon,
	PanelLoading,
	CloseModalIconWrap,
} from "./NotificationPanelStyled";
import InfiniteScroll from "react-infinite-scroll-component";
import { NotificationItem } from "./NotificationItem";
const ITEMS_PER_PAGE = 15;

export const NotificationPanel = () => {
	const { t } = useTypeSafeTranslation();
	const ME = useMeStore((state) => state.user);
	const [hasMore, setHasMore] = useState(true);
	const [infiniteData, setInfiniteData] = useState({
		startId: 999999999,
	});

	// const notificationsList = useNotificationStore(
	// 	(state) => state.notificationList
	// );
	const notificationsList = useNotificationStore(
		React.useCallback((state) => state.notificationList["self"], [`self`])
	);
	const [values, setValues] = useState<{
		sliceList: any[];
		pageIndex: number;
	}>({
		sliceList: [],
		pageIndex: 0,
	});
	const [loadingStatus, setLoadingStatus] = useState("empty");
	const [openNotificationDialog, setOpenNotificationDialog] = useAtom(
		openNotificationsDialog
	);

	const onClickAway = () => {
		if (openNotificationDialog) setOpenNotificationDialog(false);
	};

	useEffect(() => {
		if (openNotificationDialog && ME) {
			useMeStore.getState().setUser({
				...ME,
				unreadNotifications: 0,
			});
		}
		if (loadingStatus === "empty" && openNotificationDialog) {
		}
	}, [openNotificationDialog]);

	const closeDialog = () => {
		setOpenNotificationDialog(false);
	};

	const loadMore = () => {};

	const fetchMoreNotifications = () => {
		loadMore();
	};

	if (!openNotificationDialog) {
		return null;
	}

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<PanelContainer id="notificationListContainer">
				<PanelHead>
					<PanelTitle>{t("notifications")}</PanelTitle>
					<CloseModalIconWrap>
						<CloseModalIcon onClick={() => closeDialog()} />
					</CloseModalIconWrap>
				</PanelHead>

				{loadingStatus == "empty" || loadingStatus == "loading" ? (
					<PanelLoading>
						<CircularProgress
							style={{ width: 60, height: 60, color: "#fff" }}
						/>
					</PanelLoading>
				) : (
					<PanelItems>
						<InfiniteScroll
							dataLength={notificationsList?.length ?? 0}
							next={fetchMoreNotifications}
							// refreshFunction={fetchMoreFilteredMembers}
							hasMore={hasMore}
							loader={
								<PanelLoading
									style={{ padding: "20px 0 10px", height: "80px" }}>
									<CircularProgress
										style={{ width: 30, height: 30, color: "#fff" }}
									/>
								</PanelLoading>
							}
							scrollableTarget="notificationListContainer">
							{notificationsList?.map((not, index) => {
								return <NotificationItem time={true} item={not} key={not.id} />;
							})}
						</InfiniteScroll>
					</PanelItems>
				)}
			</PanelContainer>
		</ClickAwayListener>
	);
};
