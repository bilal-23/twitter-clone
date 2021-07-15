import { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import firebase from './firebase/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/userSlice';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import useWindowDimensions from './hooks/use-windowDimensions';
import './App.scss';

function App() {
  const dimensions = useWindowDimensions();
  const history = useHistory();
  const dispatch = useDispatch();
  const uid = useSelector(state => state.user.uid)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          user: {
            displayName: user.displayName,
            email: user.email,
            avatar: user.photoURL,
          }
        }))
        history.push('/')
      } else {
        dispatch(logout());
      }
    });
  }, [history, dispatch])

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        {!uid && <Redirect to="/login" />}
        {uid && <div className="app">
          <Sidebar />
          <Feed />
          {dimensions.width > 900 && <Widgets />}
        </div>}
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
