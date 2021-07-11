import React from 'react'
import './TweetForm.scss'
import { Button } from '@material-ui/core'

const TweetForm = () => {
    return (
        <form className="form">
            <div className="form__input">
                <input type="text" placeholder="What's happening ?" className="form__inputField" />
                <input type="text" placeholder="Enter image url" className="form__inputImage form__inputField" />
            </div>
            <div className="form__button__container">
                <Button className="form__button">Tweet</Button>
            </div>
        </form>
    )
}

export default TweetForm
