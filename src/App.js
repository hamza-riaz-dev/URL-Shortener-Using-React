import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import HistoryButton from './HistoryButton';
import Home from './Home';
import UrlShortener from './UrlShortener';

function App() {
  return (
    <div className="container">
    <Home/>
    <BackgroundAnimate></BackgroundAnimate>
    <UrlShortener/>
    <HistoryButton/>
    </div>
  );
}

export default App;
