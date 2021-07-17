import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUid, login, logout } from './store/userSlice';
import firebase, { db } from './firebase/firebase'
import useWindowDimensions from './hooks/use-windowDimensions';
import AlertDialogSlide from './components/Dialog';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import Preloader from './components/UI/Preloader'
import './App.scss';

function App() {
  const dimensions = useWindowDimensions();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPreloader, setShowPreloader] = useState(true);
  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)


  useEffect(() => {
    setShowPreloader(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //get uid from firebase google auth
        dispatch(setUid({
          uid: user.uid,
        }))
        //search for user with this uid in firestore user collection
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
          }
          history.push('/home')
          setShowPreloader(false);

        }).catch((error) => {
          setError(error);
          setShowPreloader(false);
          setShowErrorModal(true);
        })

      } else {
        dispatch(logout());
        setShowPreloader(false);
      }
    });
  }, [history, dispatch])




  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        {showPreloader && <Preloader />}
        {!isLoggedIn && <Redirect to="/login" />}
        {isLoggedIn &&
          <div className="app">
            {showErrorModal && <AlertDialogSlide alertText={error.message} closeModal={setShowErrorModal} />}
            <Sidebar />
            <Feed />
            {dimensions.width > 900 && <Widgets />}
          </div>
        }
      </Route>

      <Route path="/login" exact>
        {showPreloader && <Preloader />}
        {isLoggedIn && <Redirect to="/home" />}
        {!isLoggedIn && <Login />}
      </Route>

    </Switch>
  );
}

export default App;
