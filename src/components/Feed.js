import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import { db } from '../firebase/firebase'
import FeedHeader from './FeedHeader'
import Tweetbox from './Tweetbox'
import Post from './Post'
import './Feed.scss'

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

        return (() => setPosts())
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
