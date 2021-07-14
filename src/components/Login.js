import React from 'react'
import './login.scss'
import { Twitter } from '@material-ui/icons'

const Login = () => {
    return (
        <div className="login">
            <div className="login__image">
                <Twitter className="login__twitterIcon" />
            </div>
            <div className="login__body">
                <Twitter className="twitter" />
                <div className="login__heading">
                    <p>Happening now</p>
                    <p>Join Twitter today</p>
                </div>
                <div className="login__form">
                    <button>Sign in with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login
