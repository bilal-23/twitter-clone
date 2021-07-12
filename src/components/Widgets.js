import React from 'react';
import './Widgets.scss';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search"

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__inputs">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" className="widgets__inputField" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening ?</h2>
                <TwitterTweetEmbed tweetId={"1414223227782635525"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="spacedotcom"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://github.com/bilal-23'}
                    options={{ text: 'Twitter clone by Bilal', via: 'bilalmansuri2e' }}
                />
            </div>
        </div>
    )
}

export default Widgets;