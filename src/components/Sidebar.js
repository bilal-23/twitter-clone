import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logout } from '../store/userSlice';
import firebase from '../firebase/firebase'
import useWindowDimensions from '../hooks/use-windowDimensions';
import { Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, ExitToApp } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption'
import "./Sidebar.scss"

const Sidebar = () => {
    const dimension = useWindowDimensions();
    const history = useHistory();
    const dispatch = useDispatch();


    const signOutHandler = (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            dispatch(logout())
            history.push('/login')
        }).catch((error) => {
            alert(error.message);
        });
    }
    return (
        <div className="sidebar ">
            <Twitter />
            <ul className="sidebarOptions">
                <NavLink to='/home' activeClassName="activeNav">
                    <SidebarOption key='1' text='home' Icon={Home} />
                </NavLink>
                <NavLink to="/explore" onClick={(e) => e.preventDefault()} activeClassName="activeNav">
                    <SidebarOption key='2' text='explore' Icon={Search} />
                </NavLink>
                <NavLink to="/notifications" onClick={(e) => e.preventDefault()} activeClassName="activeNav">
                    <SidebarOption key='3' text='Notifications' Icon={NotificationsNone} />
                </NavLink>
                <NavLink to='/messages' onClick={(e) => e.preventDefault()} activeClassName="activeNav">
                    <SidebarOption key='4' text='messages' Icon={MailOutline} />
                </NavLink>
                <NavLink to='/bookmarks' onClick={(e) => e.preventDefault()} activeClassName="activeNav">
                    <SidebarOption key='5' text='bookmarks' Icon={BookmarkBorder} />
                </NavLink>
                <NavLink to='/lists' onClick={(e) => e.preventDefault()} activeClassName="activeNav">
                    <SidebarOption key='6' text='lists' Icon={ListAlt} />
                </NavLink>
                <NavLink to='/profile' activeClassName="activeNav">
                    <SidebarOption key='7' text='profile' Icon={PermIdentity} />
                </NavLink>
                <NavLink to='/logout' onClick={signOutHandler} activeClassName="activeNav">
                    <SidebarOption key='8' text='Log out' Icon={ExitToApp} />
                </NavLink>
            </ul>
            {dimension.width > 1250 && <Button htmlFor="tweetInput" variant="outlined" className="sidebar__button">tweet</Button>}
        </div>
    )
}


export default Sidebar

