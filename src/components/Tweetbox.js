import React from 'react';
import { useSelector } from 'react-redux'
import { db } from '../firebase/firebase';
import { Avatar } from '@material-ui/core';
import TweetForm from './TweetForm';
import "./Tweetbox.scss";


const Tweetbox = () => {
    const { displayName, avatar, userName } = useSelector(state => state.user.user);
    const uid = useSelector(state => state.user.uid);

    const postTweetHandler = (text, image = "") => {
        db.collection('posts').add({
            displayName: displayName,
            userName: userName,
            uid: uid,
            verified: false,
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
