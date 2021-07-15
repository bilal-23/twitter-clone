import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../firebase/firebase'
import { Twitter } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import AlertDialogSlide from './Dialog';
import './login.scss'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'

const Login = () => {
    const [error, setError] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const signInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;
                dispatch(login({
                    uid: user.uid,
                    user: {
                        displayName: user.displayName,
                        email: user.email,
                        avatar: user.photoURL,
                    }
                }))
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
