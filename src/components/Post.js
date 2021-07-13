import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import { VerifiedUserRounded, ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
import "./Post.scss"

const Post = forwardRef(({ displayName, userName, verified, timestamp, text, image, avatar }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}
                            <span className="post__headerSpan">
                                {verified && <VerifiedUserRounded className="post__badge" />} @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {image && <div className="post__img">
                    <img src={image} alt="" />
                </div>}
                <div className="post__footer">
                    <ChatBubbleOutline className="post__footer__icons icon icon__comment" />
                    <Repeat className="post__footer__icons icon icon__retweet" />
                    <FavoriteBorder className="post__footer__icons icon icon__like" />
                    <Publish className="post__footer__icons icon icon__share" />
                </div>
            </div>
        </div>
    )
});

export default Post
