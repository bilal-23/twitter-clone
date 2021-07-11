import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Tweetbox.scss";
import TweetForm from './TweetForm';


const Tweetbox = () => {
    return (
        <div className="tweetbox">
            <Avatar src="https://avatars.githubusercontent.com/u/71442068?v=4" className="tweetbox__avatar" />
            <TweetForm />
        </div>
    )
}

export default Tweetbox
