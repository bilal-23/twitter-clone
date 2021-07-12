import React from 'react'
import "./Sidebar.scss"
import SidebarOption from './SidebarOption'
import { Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import useWindowDimensions from '../hooks/use-windowDimensions';

const Sidebar = () => {
    const dimension = useWindowDimensions();

    const sidebarOptions = [
        { text: "home", Icon: Home, active: true },
        { text: "explore", Icon: Search },
        { text: "Notifications", Icon: NotificationsNone },
        { text: "messages", Icon: MailOutline },
        { text: "bookmarks", Icon: BookmarkBorder },
        { text: "lists", Icon: ListAlt },
        { text: "profile", Icon: PermIdentity },
        { text: "more", Icon: MoreHoriz },
    ];

    return (
        <div className="sidebar ">
            <Twitter />
            <div className="sidebarOptions">
                {sidebarOptions.map((item, index) => <SidebarOption key={index} active={item?.active} text={item.text} Icon={item.Icon} />)}
            </div>
            {dimension.width > 1250 && <Button variant="outlined" className="sidebar__button">tweet</Button>}


        </div>
    )
}


export default Sidebar

