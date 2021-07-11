import React from 'react'
import './Feed.scss'
import FeedHeader from './FeedHeader'
import Tweetbox from './Tweetbox'

const Feed = () => {
    return (
        <div className="feed">
            <FeedHeader />
            <Tweetbox />
        </div>
    )
}

export default Feed
