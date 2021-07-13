import React, { useState, useEffect } from 'react'
import './Feed.scss'
import FeedHeader from './FeedHeader'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from '../firebase/firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())))
    }, [])

    return (
        <div className="feed">
            <FeedHeader />
            <Tweetbox />
            {posts.map((post) =>
                <Post
                    key={Math.random()}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            )}
        </div>
    )
}

export default Feed
