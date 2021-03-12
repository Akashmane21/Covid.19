// import logo from './logo.svg';
import Home from './home'
import Slider from './Img_slider'
import './App.css';
import AcUnitIcon from '@material-ui/icons/AcUnit';
function App() {
  return (
    <div className="App">
    <Slider />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        <AcUnitIcon />
         <Home />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
