import React from 'react'
import './SidebarOption.scss';
import useWindowDimensions from '../hooks/use-windowDimensions';

const SidebarOption = ({ Icon, text }) => {
    const dimension = useWindowDimensions();
    return (
        <div className={`sidebarOption`}>
            <Icon className="sidebarOption__icon" />

            {dimension.width > 1250 && <p className="sidebarOption__text" >{text}</p>}
        </div>
    )
}

export default SidebarOption
