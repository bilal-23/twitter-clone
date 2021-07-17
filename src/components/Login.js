import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import firebase, { db } from '../firebase/firebase'
import { Twitter } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import AlertDialogSlide from './Dialog';
import './login.scss'

const Login = () => {
    const [error, setError] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const randomNum = Math.random().toFixed(3) * 1000;


    const signInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;
                //searching for user in users collection with this uid
                db.collection('users').doc(user.uid).get().then((doc) => {
                    if (doc.exists) {
                        //if user exist dispatch login
                        const userData = doc.data();
                        dispatch(login({
                            uid: user.uid,
                            user: {
                                userName: userData.userName,
                                displayName: userData.displayName,
                                email: userData.email,
                                avatar: userData.avatar,
                            },
                        }))
                    } else {
                        //user dont exist, create new user - 
                        db.collection("users").doc(user.uid).set({
                            FullName: user.displayName,
                            avatar: user.photoURL,
                            userName: user.displayName.split(" ")[0] + randomNum + "",
                            email: user.email,
                            uid: user.uid,
                            displayName: user.displayName.split(" ")[0]
                        })
                            .catch((error) => {
                                throw new Error(error);
                            });

                    }
                }).catch((error) => {
                    throw new Error(error);
                })

                //login 
                dispatch(login({
                    uid: user.uid,
                    user: {
                        displayName:user.displayName.split(" ")[0],
                        email: user.email,
                        avatar: user.photoURL,
                        userName: user.displayName.split(" ")[0] + randomNum + ""
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
