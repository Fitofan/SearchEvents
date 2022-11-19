import React from "react";
import { useAtom } from "jotai";
import {
    openMobileSidebarAtom,
    openNotificationsDialog,
    openedLoginDialogAtom,
    openedNewClubModal,
    openedNewChildModal,
    openFavoritePanel,
    createEventModalAtom,
} from "../../atoms";
import { useMeStore } from "./../../../stores/useMeStore";
import { LanguageSelector } from "./../LanguageSelector";
import { useTypeSafeTranslation } from "./../../utils/useTypeSafeTranslation";
import { Link } from "react-router-dom";
import {
    SidebarBackdrop,
    SidebarContainer,
    MenuAuth,
    MenuAuthProfileWrap,
    MenuAuthProfileImage,
    MenuAuthInfo,
    MenuAuthLink,
    MenuAuthWrapper,
    LinkWrap,
    MenuList,
    MenuDivider,
    LanguageSelectorWrap,
} from "./MobileSidebarStyled";

export const MobileSidebar = () => {
    const [openSidebar, setOpenSidebar] = useAtom(openMobileSidebarAtom);
    const [openNotificationDialog, setOpenNotificationDialog] = useAtom(
        openNotificationsDialog
    );
    const [loginModalOpen, setLoginModalOpen] = useAtom(openedLoginDialogAtom);
    const [openNewChildModal, setOpenNewChildModal] =
		useAtom(openedNewChildModal);
    const [openNewClub, setOpenNewClub] = useAtom(openedNewClubModal);
    const ME = useMeStore((state) => state.user);
    const { t } = useTypeSafeTranslation();
    const closeDialog = () => {
        setOpenSidebar(false);
    };
    const [, setOpenFavorites] = useAtom(openFavoritePanel);
    const [, setOpenNewEvent] = useAtom(createEventModalAtom);

    const openNotificationsClick = () => {
        setOpenSidebar(false);
        setOpenNotificationDialog(true);
    };
    const favoritesButtonClick = () => {
        setOpenSidebar(false);
        setOpenFavorites(true);
    };

    // useEffect(() => {
    // 	if (openSidebar) {
    // 		document.body.style.overflow = "hidden";
    // 	} else {
    // 		document.body.style.overflow = "unset";
    // 	}
    // }, [openSidebar]);

    if (!openSidebar) {
        return null;
    }
    const openNewClubClick = () => {
        setOpenSidebar(false);
        if (ME) {
            setOpenNewClub(true);
        } else {
            setLoginModalOpen(true);
        }
    };
    const openNewEventClick = () => {
        setOpenSidebar(false);
        if (ME) {
            setOpenNewEvent(true);
        } else {
            setLoginModalOpen(true);
        }
    };

    return (
        <>
            <SidebarBackdrop onClick={closeDialog}></SidebarBackdrop>
            <SidebarContainer>
                <MenuAuth>
                    {ME ? (
                        <>
                            <MenuAuthProfileWrap
                                style={{
                                    backgroundImage: `url(${ME?.mini_image_url})`,
                                }}></MenuAuthProfileWrap>
                            <MenuAuthProfileImage
                                style={{
                                    backgroundImage: `url(${ME?.mini_image_url})`,
                                }}></MenuAuthProfileImage>
                            <MenuAuthInfo>
                                <MenuAuthWrapper>
                                    <MenuAuthLink>
                                        <Link onClick={closeDialog} to={`/${ME.link}`}>
                                            {ME.name} {ME.surname}
                                        </Link>
                                    </MenuAuthLink>
                                </MenuAuthWrapper>
                            </MenuAuthInfo>
                        </>
                    ) : null}
                </MenuAuth>

                <MenuList>
                    <li>
                        <LinkWrap>
                            <Link onClick={closeDialog} to={"/"}>
                                {t("home_page")}
                            </Link>
                        </LinkWrap>
                    </li>
                    {!ME ? (
                        <li>
                            <LinkWrap>
                                <Link
                                    onClick={() => {
                                        setOpenSidebar(false);
                                        setLoginModalOpen(true);
                                    }}
                                    to={"/"}>
                                    {t("sign_in")}
                                </Link>
                            </LinkWrap>
                        </li>
                    ) : null}
                    {ME ? (
                        <>
                            <li>
                                <LinkWrap>
                                    <Link onClick={closeDialog} to={`/user/${ME?.link}/settings`}>
                                        {t("edit_profile")}
                                    </Link>
                                </LinkWrap>
                            </li>

                            <li>
                                <LinkWrap>
                                    <a onClick={openNotificationsClick}>{t("notifications")}</a>
                                </LinkWrap>
                            </li>
                            <li>
                                <LinkWrap>
                                    <a onClick={favoritesButtonClick}>{t("favorites")}</a>
                                </LinkWrap>
                            </li>
                            {/* <li>
								<LinkWrap>
									<a>{t("messages")}</a>
								</LinkWrap>
							</li> */}
                        </>
                    ) : null}
                    <MenuDivider></MenuDivider>
                    <li>
                        <LinkWrap>
                            <a onClick={openNewClubClick}>{t("create_organization")}</a>
                        </LinkWrap>
                    </li>
                    <li>
                        <LinkWrap>
                            <a onClick={openNewEventClick}>{t("create_event")}</a>
                        </LinkWrap>
                    </li>
                    {ME ? (
                        <>
                            <li>
                                <LinkWrap>
                                    <a onClick={() => setOpenNewChildModal(true)}>
                                        {t("register_family_member")}
                                    </a>
                                </LinkWrap>
                            </li>

                            <MenuDivider></MenuDivider>
                            <li>
                                <LinkWrap>
                                    <Link onClick={closeDialog} to="/logout">
                                        {t("logout")}
                                    </Link>
                                </LinkWrap>
                            </li>
                        </>
                    ) : null}
                    <MenuDivider></MenuDivider>
                </MenuList>
                <LanguageSelectorWrap>
                    <span>{t("language")}</span>
                    <LanguageSelector />
                </LanguageSelectorWrap>
            </SidebarContainer>
        </>
    );
};
