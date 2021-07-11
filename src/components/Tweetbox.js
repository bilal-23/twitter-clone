import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Tweetbox.scss";
import TweetForm from './TweetForm';


const Tweetbox = () => {
    return (
        <div className="tweetbox">
            <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcmkt-image-prd.global.ssl.fastly.net%2F0.1.0%2Fps%2F1382917%2F1160%2F772%2Fm1%2Ffpnw%2Fwm0%2Fbusinessman-avatar-icon-01-.jpg%3F1466426985%26s%3De682e5d7c8b4cd43735b642490f43f06&f=1&nofb=1" className="tweetbox__avatar" />
            <TweetForm />
        </div>
    )
}

export default Tweetbox
