import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux'
import "./Tweetbox.scss";
import TweetForm from './TweetForm';
import { db } from '../firebase/firebase';


const Tweetbox = () => {
    const { displayName, email, avatar } = useSelector(state => state.user.user);

    const postTweetHandler = (text, image = "") => {
        db.collection('posts').add({
            displayName: displayName,
            userName: email,
            verified: true,
            text: text,
            image: image,
            avatar: avatar,
            timestamp: Date.now()
        })
    }

    return (
        <div className="tweetbox">
            <Avatar src={avatar} className="tweetbox__avatar" />
            <TweetForm postTweet={postTweetHandler} />
        </div>
    )
}

export default Tweetbox
