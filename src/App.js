import { useContext, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import firebase from './firebase/firebase'
import UserContext from './store/user-context';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import useWindowDimensions from './hooks/use-windowDimensions';
import './App.scss';

function App() {
  const userCtx = useContext(UserContext);
  const dimensions = useWindowDimensions();
  const history = useHistory();
  console.log(userCtx);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        userCtx.login({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        })
        history.push('/')
      } else {
        console.log("no user");
      }
    });
  }, [])

  // useEffect(() => {
  //   userCtx.login(user);
  // }, [user])

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        {!userCtx.isLoggedIn && <Redirect to="/login" />}
        {userCtx.isLoggedIn && <div className="app">
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
