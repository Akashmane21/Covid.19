// import logo from './logo.svg';
// import Home from './home'
import Slider from './Img_slider'
// import './App.css';
import map from './map.png'
import './Home.css'
import Footer from './Components/Footer'
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

            <div class="map">
    <h4>Covid-19 Pandemic in Different Regions in India Are Shown Below in the MAP : </h4>
    <img id="map" src={map} alt="" />
</div>
            <Footer />
    </>
  );
}

export default App;
