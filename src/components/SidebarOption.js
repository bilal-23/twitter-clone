import React from 'react'
import './SidebarOption.scss';

const SidebarOption = ({ active = false, Icon, text }) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon className="sidebarOption__icon" />
            <p className="sidebarOption__text" >{text}</p>
        </div>
    )
}

export default SidebarOption
