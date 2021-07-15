import React, { useRef } from 'react'
import './TweetForm.scss'
import { Button } from '@material-ui/core'

const TweetForm = ({ postTweet }) => {
    const textRef = useRef();
    const imageRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const text = textRef.current?.value?.trim();
        const image = imageRef.current?.value?.trim();
        if (text === "") { return }
        postTweet(text, image);
        textRef.current.value = "";
        imageRef.current.value = "";

    }
    return (
        <form className="form">
            <div className="form__input">
                <input type="text" placeholder="What's happening ?" className="form__inputField" ref={textRef} id="tweetInput" />
                <input type="text" placeholder="Enter image url" className="form__inputImage form__inputField" ref={imageRef} />
            </div>
            <div className="form__button__container">
                <Button type="submit" className="form__button" onClick={formSubmitHandler}>Tweet</Button>
            </div>
        </form>
    )
}

export default TweetForm
