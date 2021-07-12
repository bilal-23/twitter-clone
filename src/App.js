import './App.scss';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import useWindowDimensions from './hooks/use-windowDimensions';

function App() {
  const dimensions = useWindowDimensions();
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      {dimensions.width > 900 && <Widgets />}
    </div>
  );
}

export default App;
