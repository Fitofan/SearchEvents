import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PClogo from "./../../images/ftlogo5.png";

import Loginicon from "./../../svgs/loginicon.svg";
import NewNotsIcon from "./../../svgs/notsicon.svg";
import { useTypeSafeTranslation } from "../../utils/useTypeSafeTranslation";
import { useAtom } from "jotai";
import {
	openedLoginDialogAtom,
	openNotificationsDialog,
	showNavbarAtom,
	openMessagesDialogs,
	openMobileSidebarAtom,
	openedRestorePasswordDialogAtom,
	openedNewClubModal,
	openedExpandedNav,
	openSearchPanel,
	openFavoritePanel,
	openCartAtom,
} from "./../../atoms";
import { useMeStore } from "./../../../stores/useMeStore";
import { ExpandedNav } from "./ExpandedNav";
import { useOutsideClick } from "./../../utils/useOutsideClick";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import MenuIcon from "@material-ui/icons/Menu";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@material-ui/icons/Notifications";

import {
	HeaderWrapper,
	HeaderContent,
	HeaderNavLeft,
	HeaderNavRight,
	HomeLink,
	NavButton,
	HeaderNavCenter,
	NavUserProfile,
	NavUserProfileImage,
	NavUserOnlineIcon,
	NavUserDropdown,
	NavUserDropdownDivider,
	NavUserDropdownBlock,
	NavUserDropdownLink,
	NavSearchInput,
	NavMoreBtn,
	UnreadBadge,
} from "./NavbarStyled";
import "./Navbar.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface NavbarProps {}
export const Navbar: React.FC<NavbarProps> = () => {
	const { t } = useTypeSafeTranslation();
	const ME = useMeStore((state) => state.user);
	const [, setOpenNotificationDialog] = useAtom(openNotificationsDialog);
	const [, setOpenMessagesDialog] = useAtom(openMessagesDialogs);
	const [showNavbar] = useAtom(showNavbarAtom);
	const [loginModalOpen, setLoginModalOpen] = useAtom(openedLoginDialogAtom);
	const [, setOpenFavorites] = useAtom(openFavoritePanel);
	const [openMobileSidebar, setOpenMobileSidebar] = useAtom(
		openMobileSidebarAtom
	);
	const [restoreModalOpen, setRestoreModalOpen] = useAtom(
		openedRestorePasswordDialogAtom
	);
	const [, setOpenSearch] = useAtom(openSearchPanel);
	const [openNewClub, setOpenNewClub] = useAtom(openedNewClubModal);
	const [openCartPanel, setOpenCartPanel] = useAtom(openCartAtom);

	const [showUserDropdown, setShowUserDropdown] = useState(false);
	const [expandedNavOpen, setExpandedNavOpen] = useAtom(openedExpandedNav);
	const openDropDownBtnRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const dropDownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const expandedNavRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const expandedNavBtnRef =
		useRef() as React.MutableRefObject<HTMLButtonElement>;

	useOutsideClick(
		dropDownRef,
		() => {
			setShowUserDropdown(false);
		},
		openDropDownBtnRef
	);
	useOutsideClick(
		expandedNavRef,
		() => {
			if (expandedNavOpen) {
				setExpandedNavOpen(false);
			}
		},
		expandedNavBtnRef
	);

	const openedLoginDialog = (event: any) => {
		event.preventDefault();
		setLoginModalOpen(true);
	};
	const toggleUserDropdown = (event: any) => {
		event?.preventDefault();
		setShowUserDropdown(!showUserDropdown);
	};
	const toggleExpandedNav = (event: any) => {
		event?.preventDefault();
		setExpandedNavOpen(!expandedNavOpen);
	};

	const notificationsButtonClick = () => {
		setOpenNotificationDialog(true);
	};
	const dialogsButtonClick = () => {
		setOpenMessagesDialog(true);
	};
	const favoritesButtonClick = () => {
		setOpenFavorites(true);
	};
	const cartButtonClick = () => {
		setOpenCartPanel(true);
	};

	const openMobileSidebarClick = () => {
		setOpenMobileSidebar(true);
	};

	const navClasses = showUserDropdown ? " show" : " ";

	return (
		<>
			{showNavbar ? (
				<>
					<HeaderWrapper>
						<HeaderContent>
							<HeaderNavLeft>
								<HomeLink to="/">
									<img src={PClogo} alt="Fitofan" />
								</HomeLink>
								<NavMoreBtn
									className="nav-more-wrap"
									ref={expandedNavBtnRef}
									onClick={toggleExpandedNav}>
									<div></div>
									<div></div>
									<div></div>
								</NavMoreBtn>
							</HeaderNavLeft>
							<HeaderNavCenter>
								<NavSearchInput
									onClick={() => setOpenSearch(true)}
									className="nav-search-input open-search-modal">
									{t("search")}
								</NavSearchInput>
							</HeaderNavCenter>
							<HeaderNavRight>
								{!ME ? (
									<NavButton onClick={openedLoginDialog}>
										<img src={Loginicon} alt="Login" />
										{t("sign_in")}
									</NavButton>
								) : (
									<>
										{ME.cartItems > 0 ? (
											<NavButton onClick={cartButtonClick}>
												<ShoppingCartIcon sx={{ fill: "#faf6f6" }} />
												{t("shop.cart")}
												{ME?.cartItems > 0 ? (
													<UnreadBadge>{ME?.cartItems}</UnreadBadge>
												) : null}
											</NavButton>
										) : null}
										<NavButton onClick={favoritesButtonClick}>
											<BookmarkBorderIcon sx={{ fill: "#faf6f6" }} />
											{t("favorites")}
										</NavButton>
										{/* <NavButton onClick={dialogsButtonClick}>
											<img src={NewMsgIcon} alt="Fitofan" />
											{t("messages")}
											{ME?.unreadMessages > 0 ? (
												<UnreadBadge>{ME?.unreadMessages}</UnreadBadge>
											) : (
												""
											)}
										</NavButton> */}
										<NavButton onClick={notificationsButtonClick}>
											<img src={NewNotsIcon} alt="Fitofna" />
											{t("notifications")}
											{ME?.unreadNotifications > 0 ? (
												<UnreadBadge>{ME?.unreadNotifications}</UnreadBadge>
											) : null}
										</NavButton>
										<NavUserProfile>
											<NavUserProfileImage
												ref={openDropDownBtnRef}
												onClick={toggleUserDropdown}
												style={{
													backgroundImage: `url(${ME?.mini_image_url})`,
												}}></NavUserProfileImage>
											<NavUserOnlineIcon></NavUserOnlineIcon>
											<NavUserDropdown ref={dropDownRef} className={navClasses}>
												<NavUserDropdownBlock>
													<NavUserDropdownLink
														to={`/${ME.link}`}
														onClick={() => {
															setShowUserDropdown(false);
														}}>
														{t("profile")}
													</NavUserDropdownLink>
													<NavUserDropdownLink
														to={`/user/${ME.link}/settings`}
														onClick={() => {
															setShowUserDropdown(false);
														}}>
														{t("edit_profile")}
													</NavUserDropdownLink>
												</NavUserDropdownBlock>
												<NavUserDropdownDivider></NavUserDropdownDivider>
												<NavUserDropdownBlock>
													<NavUserDropdownLink to="/logout">
														{t("logout")}
													</NavUserDropdownLink>
												</NavUserDropdownBlock>
											</NavUserDropdown>
										</NavUserProfile>
									</>
								)}
							</HeaderNavRight>
						</HeaderContent>
					</HeaderWrapper>
					{expandedNavOpen ? <ExpandedNav ref={expandedNavRef} /> : ""}
					<div className="mob-head">
						<div className="mob-head-container">
							<div className="left-part">
								{/* <Link to="/" className=" mob-head-logo">
									<img src={PClogo} alt="Fitofan" />
								</Link> */}
								<div className="mob-head-icon">
									<IconButton color="primary" onClick={openMobileSidebarClick}>
										<MenuIcon />
									</IconButton>
								</div>
							</div>
							<div className="right-part">
								<div
									className="mob-head-icon"
									onClick={() => {
										window.location.reload();
									}}>
									<IconButton color="primary">
										<RefreshIcon />
									</IconButton>
								</div>
								<div
									className="mob-head-icon"
									onClick={() => setOpenSearch(true)}>
									<IconButton color="primary">
										<SearchIcon />
									</IconButton>
								</div>
								{ME ? (
									<>
										{ME.cartItems > 0 ? (
											<div className="mob-head-icon" onClick={cartButtonClick}>
												<IconButton color="primary">
													<ShoppingCartIcon sx={{ fontSize: 22 }} />
													{ME?.cartItems > 0 ? (
														<UnreadBadge>{ME?.cartItems}</UnreadBadge>
													) : null}
												</IconButton>
											</div>
										) : null}
										<div
											onClick={favoritesButtonClick}
											className="mob-head-icon">
											<IconButton color="primary">
												<BookmarkIcon />
											</IconButton>
										</div>
										<div
											onClick={() => setOpenNotificationDialog(true)}
											className="mob-head-icon">
											<IconButton color="primary">
												<NotificationsIcon />
												{ME?.unreadNotifications > 0 ? (
													<UnreadBadge>{ME?.unreadNotifications}</UnreadBadge>
												) : null}
											</IconButton>
										</div>
										<Button
											to={`/${ME.link}`}
											component={Link}
											className=" mob-head-profile"
											style={{
												backgroundImage: `url(${ME?.mini_image_url})`,
											}}></Button>
									</>
								) : (
									<Button
										onClick={() => {
											setLoginModalOpen(true);
										}}>
										{t("sign_in")}
									</Button>
								)}
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};
