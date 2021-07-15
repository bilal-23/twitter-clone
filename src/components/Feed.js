import React, { useState, useEffect } from 'react'
import './Feed.scss'
import FeedHeader from './FeedHeader'
import Tweetbox from './Tweetbox'
import Post from './Post'
import { db } from '../firebase/firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postCollection = db.collection('posts').orderBy('timestamp', "desc");
        postCollection.onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => {
                const postData = {
                    id: doc.id,
                    ...doc.data()
                }
                return postData;
            }))
        });
    }, [])

    return (
        <div className="feed">
            <FeedHeader />
            <Tweetbox />
            <FlipMove>
                {posts.map((post) =>
                    <Post
                        key={post.id}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                )}
            </FlipMove>
        </div>
    )
}

export default Feed
