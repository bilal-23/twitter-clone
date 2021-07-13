import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Tweetbox.scss";
import TweetForm from './TweetForm';
import db from '../firebase/firebase';


const Tweetbox = () => {
    const postTweetHandler = (text, image = "") => {
        db.collection('posts').add({
            displayName: "Bilal",
            userName: "bilalmansuri",
            verified: true,
            text: text,
            image: image,
            avatar: "https://avatars.githubusercontent.com/u/71442068?v=4"
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
