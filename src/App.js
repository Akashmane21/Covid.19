// import logo from './logo.svg';
// import Home from './home'
import Slider from './Img_slider'
// import './App.css';
import './Home.css'
import ScrollableTabsButtonForce from './Tab'
function App() {
  return (
    <>
    <Slider />
    <div class="head">
                <h2>Covid-19 Outbreak in World / India</h2>
                <img src="img/corona2.png" alt="" />
            </div>

            <div class="updates">
               <img id ="notification" src="img/notification.png" alt="" /> 
              <h5> Stay Home🏡 Stay Safe💕</h5>  <br />



            </div>
            <hr />
            <ScrollableTabsButtonForce />
    </>
  );
}

export default App;
