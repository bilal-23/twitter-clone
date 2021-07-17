import React from 'react';
import './Preloader.scss';
import { Twitter } from '@material-ui/icons'

const Preloader = () => {
    return (
        <div className="preloader">
            <Twitter className="preloader__icon" />
        </div>
    )
}

export default Preloader
