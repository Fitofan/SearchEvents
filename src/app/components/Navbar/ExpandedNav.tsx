import React, { forwardRef } from "react";
import { useMeStore } from "./../../../stores/useMeStore";
import { useTypeSafeTranslation } from "../../utils/useTypeSafeTranslation";
import { LanguageSelector } from "./../LanguageSelector";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import {
    openedNewClubModal,
    openedExpandedNav,
    openedLoginDialogAtom,
    openedNewChildModal,
    createEventModalAtom,
} from "./../../atoms";
import { useAtom } from "jotai";

export const ExpandedNav = forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>((props, ref) => {
    const ME = useMeStore((state) => state.user);
    const [open, setOpen] = useAtom(openedExpandedNav);
    const [openNewChildModal, setOpenNewChildModal] =
		useAtom(openedNewChildModal);

    const onClickAway = () => {
        if (!open) {
            setOpen(false);
        }
    };
    const [, setOpenNewClub] = useAtom(openedNewClubModal);
    const [, setOpenNewEvent] = useAtom(createEventModalAtom);
    const [loginModalOpen, setLoginModalOpen] = useAtom(openedLoginDialogAtom);
    const { t } = useTypeSafeTranslation();
    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <div className="nav-more-expanded show" ref={ref}>
                <div className="nav-more-expanded-content">
                    <div className="nav-more-expanded-col">
                        <div className="expanded-group mt-0">
                            <div className="expanded-title">{t("language")}</div>
                            <LanguageSelector />
                        </div>
                    </div>

                    <div className="nav-more-expanded-col expand-pl">
                        <div className="expand-pt">
                            <a
                                href="#"
                                className="expand-link  work"
                                onClick={() => {
                                    setOpen(false);
                                    if (ME) {
                                        setOpenNewClub(true);
                                    } else {
                                        setLoginModalOpen(true);
                                    }
                                }}>
                                {t("create_organization")}
                            </a>
                        </div>

                        {/* <div className="expand-pt">
							<Link to="/map" className="expand-link no-ajaxy work">
								Map search
							</Link>
						</div> */}
                        <div className="expand-pt">
                            <a
                                href="#"
                                className="expand-link no-ajaxy work"
                                onClick={() => {
                                    setOpen(false);
                                    if (ME) {
                                        setOpenNewChildModal(true);
                                    } else {
                                        setLoginModalOpen(true);
                                    }
                                }}>
                                {t("register_family_member")}
                            </a>
                        </div>
                        <div className="expand-socials"></div>
                    </div>

                    <div className="nav-more-expanded-col">
                        <div className="expand-pt">
                            <a
                                href="#"
                                className="expand-link  work"
                                onClick={() => {
                                    setOpen(false);
                                    if (ME) {
                                        setOpenNewEvent(true);
                                    } else {
                                        setLoginModalOpen(true);
                                    }
                                }}>
                                {t("create_event")}
                            </a>
                        </div>
                    </div>
                    <div className="nav-more-expanded-col">
                        <div>
                            <a href="#" className="expand-link  no-ajaxy">
								Create quick lesson
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link  no-ajaxy">
								Send Invitation
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link  no-ajaxy">
								Shares
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link  no-ajaxy">
								Create quick lesson
                            </a>
                        </div>
                    </div>
                    <div className="nav-more-expanded-col">
                        <div>
                            <a href="#" className="expand-link">
								Create quick lesson
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link">
								Private policy
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link">
								Terms and Conditions
                            </a>
                        </div>
                        <div className="expand-pt">
                            <a href="#" className="expand-link">
								Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
});
