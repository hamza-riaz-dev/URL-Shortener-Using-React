import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import HistoryButton from './HistoryButton';
import Home from './Home';

function App() {
  return (
    <div className="container">
    <Home/>
    <BackgroundAnimate></BackgroundAnimate>
    <HistoryButton/>
    </div>
  );
}

export default App;
