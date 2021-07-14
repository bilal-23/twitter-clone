import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserContext from './store/user-context';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import useWindowDimensions from './hooks/use-windowDimensions';
import './App.scss';

function App() {
  const userCtx = useContext(UserContext);
  console.log(userCtx);

  const dimensions = useWindowDimensions();
  return (
    <Switch>
      <Route path="/" exact>
        <div className="app">
          <Sidebar />
          <Feed />
          {dimensions.width > 900 && <Widgets />}
        </div>
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
