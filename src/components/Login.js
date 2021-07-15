import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../firebase/firebase'
import './login.scss'
import { Twitter } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import UserContext from '../store/user-context'
import AlertDialogSlide from './Dialog';

const Login = () => {
    const [error, setError] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const userCtx = useContext(UserContext);
    const history = useHistory();

    const signInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                userCtx.login({
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid
                });
                history.push('/')
                // ...]
            }).catch((error) => {
                console.log(error);
                setError(error);
                setShowErrorModal(true);
            });
    }

    return (
        <>
            {showErrorModal && <AlertDialogSlide alertText={error.message} closeModal={setShowErrorModal} />}
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
                        <Button className="button" onClick={signInHandler}>Sign in with Google</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
