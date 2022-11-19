import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import {
    SettingSidebar,
    SettingSidebarDivider,
    SettingSidebarItem,
    SidebarProfile,
    SidebarImage,
    SidebarName,
} from "./SettingsSidebarStyled";
import { useTypeSafeTranslation } from "../../utils/useTypeSafeTranslation";
interface ShopSidebarProps {
	image_url: string;
	title: string;
	link: string;
	tabValue: number;
	setTabValue: Dispatch<number>;
	navigationItems: Array<any>;
	component: string;
}

const Sidebar: React.FC<ShopSidebarProps> = (props) => {
    const {
        link,
        title,
        image_url,
        tabValue,
        setTabValue,
        component,
        navigationItems,
    } = props;
    const { t } = useTypeSafeTranslation();

    return (
        <>
            <SettingSidebar>
                <SidebarProfile to={link}>
                    <SidebarImage src={image_url} />
                    <SidebarName>{title}</SidebarName>
                </SidebarProfile>
                {navigationItems.map((item: any, index: number) => (
                    <React.Fragment key={item.page}>
                        {item?.dividerBefore ? <SettingSidebarDivider /> : null}
                        {item?.hide ? null : (
                            <SettingSidebarItem>
                                <Link
                                    to={item.link}
                                    className={`${component === item.page ? "active" : ""}`}>
                                    {t(item.title)}
                                </Link>
                            </SettingSidebarItem>
                        )}
                    </React.Fragment>
                ))}
            </SettingSidebar>
        </>
    );
};
export default Sidebar;
