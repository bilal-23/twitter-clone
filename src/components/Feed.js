import React from 'react'
import './Feed.scss'
import FeedHeader from './FeedHeader'
import Tweetbox from './Tweetbox'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed">
            <FeedHeader />
            <Tweetbox />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
