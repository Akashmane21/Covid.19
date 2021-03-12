// import logo from './logo.svg';
// import Home from './home'
import Slider from './Img_slider'
// import './App.css';
import map from './map.png'
import './Home.css'
import top from './top.png'
import Footer from './Components/Footer'
import ScrollableTabsButtonForce from './Tab'
function App() {



  function send(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec'
              const form = document.forms['google-sheet']
            
              form.addEventListener('submit', e => {
                  alert("Your Data📝 is Sending.... plz Wait💕")
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                  .then(response => alert("Thanks for Contacting📞 me..! I Will Contact You Soon...💖"))
                  .catch(error => console.error('Error!', error.message))
              })
  
            }
  
  
  
  
  
            function gotop(){
              document.body.scrollTop = 0;
             
              document.documentElement.scrollTop=0;
          }
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




<div class="contact">
        <h5>If you have any Query or any information about it then Feel free to ..</h5>
        <h3>Contact Me 📞💕</h3>
        Name: Mane Akash Ambadas,
        <br />
        G-mail :akash21mane21@gmail.com


        <div class="form">
            <form method="post" autocomplete="off" name="google-sheet">
                <h6>Name</h6>
                <input type="text" name="Name" placeholder="Enter your Name" />
                <h6>Email</h6>
                <input type="email" name="E-mail" placeholder="Enter your E-mail" />
                <h6>Phone</h6>
                <input type="phone" name="Phone" placeholder="Enter your Phone Number" />
                
                <h6>Message</h6>
                <textarea name = "Message" placeholder="Enter msg here !" name="ta" id="ta" cols="25" rows="3"></textarea>
                <button onClick={send} id="send">Send</button>
            </form>
        </div>

  
</div>
      <button onClick={gotop}><img src={top} alt=""  id="top" /></button> 

            <Footer />
    </>
  );
}

export default App;
