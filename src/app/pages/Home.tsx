import React, { useEffect } from "react";
import coachImg from "./../images/coaches.jpg";
import comsImg from "./../images/coms.jpg";
import { useMeStore } from "./../../stores/useMeStore";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { openedLoginDialogAtom, createEventModalAtom } from "../atoms";
import atlImg from "./../images/atl.jpg";
import intImg from "./../images/inter.jpg";
import { useTypeSafeTranslation } from "./../utils/useTypeSafeTranslation";
import * as HomeStyled from "../components/styled/HomeStyled";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const { t } = useTypeSafeTranslation();
	const [loginModalOpen, setLoginModalOpen] = useAtom(openedLoginDialogAtom);
	const [, openEventModal] = useAtom(createEventModalAtom);
	const ME = useMeStore((state) => state.user);

	useEffect(() => {
		document.title = "Fitofan";
	}, []);
	return (
		<>
			<div className="container-fluid container-1650 home">
				<div className="clearfix"></div>
				<HomeStyled.HR></HomeStyled.HR>
				<div className="homeblock2">
					<HomeStyled.HomeBlock2Title>
						{t("meet_find")}
					</HomeStyled.HomeBlock2Title>
					<div className="homeblock2-divider"></div>
					<HomeStyled.HomeBlock2Subtitle>
						{t("home.home1_desc")}
					</HomeStyled.HomeBlock2Subtitle>
					<HomeStyled.CardItems>
						{ME ? (
							<HomeStyled.CartItemWrap>
								<HomeStyled.CardItemLink to={`/${ME.link}`}>
									<HomeStyled.CardItemImg
										style={{ backgroundImage: `url(${ME.image_url})` }}
									/>
									<HomeStyled.CardItemTitle>
										{t("my_profile")}
									</HomeStyled.CardItemTitle>
								</HomeStyled.CardItemLink>
							</HomeStyled.CartItemWrap>
						) : (
							<HomeStyled.CartItemWrap>
								<HomeStyled.CardItem
									onClick={() => {
										setLoginModalOpen(true);
									}}>
									<HomeStyled.CardItemImg
										style={{ backgroundImage: `url(${coachImg})` }}
									/>
									<HomeStyled.CardItemTitle>
										{t("register")}
									</HomeStyled.CardItemTitle>
								</HomeStyled.CardItem>
							</HomeStyled.CartItemWrap>
						)}
						<HomeStyled.CartItemWrap>
							<HomeStyled.CardItem>
								<HomeStyled.CardItemImg
									style={{
										backgroundImage: `url(${comsImg})`,
									}}
								/>
								<HomeStyled.CardItemTitle>
									{t("create_organization")}
								</HomeStyled.CardItemTitle>
							</HomeStyled.CardItem>
						</HomeStyled.CartItemWrap>
						<HomeStyled.CartItemWrap>
							<Link to={"/search/events"}>
								<HomeStyled.CardItem>
									<HomeStyled.CardItemImg
										style={{ backgroundImage: `url(${atlImg})` }}
									/>
									<HomeStyled.CardItemTitle>
										{t("events")}
									</HomeStyled.CardItemTitle>
								</HomeStyled.CardItem>
							</Link>
						</HomeStyled.CartItemWrap>
						<HomeStyled.CartItemWrap>
							<HomeStyled.CardItem>
								<HomeStyled.CardItemImg
									style={{ backgroundImage: `url(${intImg})` }}
								/>
								<HomeStyled.CardItemTitle>
									{t("marketplace")}
								</HomeStyled.CardItemTitle>
								<HomeStyled.CardItemSubtitleTitle>
									Coming soon
								</HomeStyled.CardItemSubtitleTitle>
							</HomeStyled.CardItem>
						</HomeStyled.CartItemWrap>
					</HomeStyled.CardItems>
				</div>
				<hr className="homeblock-hr"></hr>
				<div className="homeblock3">
					<div className="homeblock3-title">{t("what_we_do")}</div>
					<div className="homeblock3-items">
						<div className="homeblock3-item-wrap">
							<div className="homeblock3-item">
								<div className="homeblock3-item-title">{t("home.home5t")}</div>
								<div className="homeblock3-item-text">{t("home.home5d")}</div>
							</div>
						</div>
						<div className="homeblock3-item-wrap">
							<div className="homeblock3-item">
								<div className="homeblock3-item-title">{t("home.home1t")}</div>
								<div className="homeblock3-item-text">{t("home.home1d")}</div>
							</div>
						</div>

						<div className="homeblock3-item-wrap">
							<div className="homeblock3-item">
								<div className="homeblock3-item-title">{t("home.home3t")}</div>
								<div className="homeblock3-item-text">{t("home.home3d")}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
