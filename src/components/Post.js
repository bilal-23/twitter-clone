import { Avatar } from '@material-ui/core'
import { VerifiedUserRounded, ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
import React from 'react'
import "./Post.scss"

const Post = ({ displayName, userName, verified, timestamp, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars.githubusercontent.com/u/71442068?v=4" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Bilal Mansuri
                            <span className="post__headerSpan">
                                <VerifiedUserRounded className="post__badge" /> @bilal
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Special thanks to
                            @KevinJPowell
                            , whose channel has wonderful videos on CSS.
                            The tutorials on position property helped me a great deal in understanding the property, and completing this blog!</p>
                    </div>
                </div>
                <div className="post__img">
                    <img src="https://pbs.twimg.com/media/E6ANOyeUYAINlda?format=png&name=small" alt="" />
                </div>
                <div className="post__footer">
                    <ChatBubbleOutline className="post__footer__icons icon icon__comment" />
                    <Repeat className="post__footer__icons icon icon__retweet" />
                    <FavoriteBorder className="post__footer__icons icon icon__like" />
                    <Publish className="post__footer__icons icon icon__share" />
                </div>
            </div>
        </div>
    )
}

export default Post
