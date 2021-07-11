import React from 'react'
import './SidebarOption.scss';
import useWindowDimensions from '../hooks/use-windowDimensions';

const SidebarOption = ({ active = false, Icon, text }) => {
    const dimension = useWindowDimensions();
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon className="sidebarOption__icon" />

            {dimension.width > 1200 && <p className="sidebarOption__text" >{text}</p>}
        </div>
    )
}

export default SidebarOption
