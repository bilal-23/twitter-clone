import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import UserContext from '../store/user-context';
import "./Tweetbox.scss";
import TweetForm from './TweetForm';
import { db } from '../firebase/firebase';


const Tweetbox = () => {
    const userCtx = useContext(UserContext)
    const postTweetHandler = (text, image = "") => {
        db.collection('posts').add({
            displayName: userCtx.user.displayName,
            userName: userCtx.user.email,
            verified: true,
            text: text,
            image: image,
            avatar: "https://avatars.githubusercontent.com/u/71442068?v=4",
            timestamp: Date.now()
        })
    }

    return (
        <div className="tweetbox">
            <Avatar src="https://avatars.githubusercontent.com/u/71442068?v=4" className="tweetbox__avatar" />
            <TweetForm postTweet={postTweetHandler} />
        </div>
    )
}

export default Tweetbox
