// import logo from './logo.svg';
// import Home from './home'
import Slider from "./Img_slider";
// import './App.css';
import map from "./map.png";
import bell from "./notification.png";
import "./Home.css";
import top from "./top.png";
import logo from "./corona2.png";
import Footer from "./Components/Footer";
import ScrollableTabsButtonForce from "./Tab";
function App() {
  function send() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec";
    const form = document.forms["google-sheet"];

    form.addEventListener("submit", (e) => {
      alert("Your Data📝 is Sending.... plz Wait💕");
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) =>
          alert("Thanks for Contacting📞 me..! I Will Contact You Soon...💖")
        )
        .catch((error) => console.error("Error!", error.message));
    });
  }

  function gotop() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <Slider />
      <div class="head">
        <h2>Covid-19 Outbreak in World / India</h2>
        <img src={logo} alt="" />
      </div>

      <div class="updates">
        <img id="notification" src={bell} alt="" />
        <h5> Stay Home🏡 Stay Safe💕</h5> <br />
        <strong>Let's fight with Corona together! 😷</strong>
      </div>
    <div class="about">  Made with ♡ by <strong>Mane Akash</strong></div>
      <ScrollableTabsButtonForce />

      <div class="map">
        <h4>
          Covid-19 Pandemic in Different Regions in India Are Shown Below in the
          MAP :{" "}
        </h4>
        <img id="map" src={map} alt="" />
      </div>
      {/* <img  id="vacc" src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/covid_19_d_660_011020043810.jpg" alt="" /> */}

      <div class="table">
        <thead><tr><th colspan="2"><center><strong>DO's and DON'Ts</strong></center></th></tr></thead>
        <tbody>
          <tr>
            <td>
              ✔️ <strong>Do</strong>
            </td>
            <td>
              Wash your hands regularly for 20 seconds, with soap and water or
              alcohol-based hand rub ✋ 🧼 🚰
          </td>
          </tr>
          <tr>
            <td>
              ✔️ <strong>Do</strong>
            </td>
            <td>
              Cover your nose and mouth with a disposable tissue or flexed elbow
              when you cough or sneeze 🤧 👃 💪
          </td>
          </tr>
          <tr>
            <td>
              ✔️ <strong>Do</strong>
            </td>
            <td>
              Avoid close contact (1 meter or 3 feet) with people who are unwell
              🙏 😷 🚶&zwj;
          </td>
          </tr>
          <tr>
            <td>
              ✔️ <strong>Do</strong>
            </td>
            <td>
              Stay home and self-isolate from others in the household if you feel
              unwell 🏠 👨 💉
          </td>
          </tr>
          <tr>
            <td>
              ❌ <strong>Don't</strong>
            </td>
            <td>
              Touch your eyes, nose, or mouth if your hands are not clean 👃 👁️ 🤭
          </td>
          </tr>
        </tbody>
      </div>




      <div className="sym">
        <div class="accordion"><div class="card"><div class="card-header"><center><strong>COVID-19 Symptoms</strong></center></div><div class="collapse show"><div class="card-body">People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill. <br /><br />People may experience:<ul><li><strong>cough</strong></li><li><strong>fever</strong></li><li><strong>tiredness</strong></li><li><strong>difficulty breathing (severe cases)</strong></li></ul><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms" class="btn btn-outline-info">Click here to learn more</a><br /><br />There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe. If you have mild symptoms, stay at home until you’ve recovered. <br /><br />You can relieve your symptoms if you: <br /><ul><li>rest and sleep</li><li>keep warm</li><li>drink plenty of liquids</li><li>use a room humidifier or take a hot shower to help ease a sore throat and cough</li></ul><br />If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.<br /><br /><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=protect" class="btn btn-outline-danger">Click here to learn more</a><br /><br /></div></div></div></div>
        </div>
        <div className="msg">
          <h2>Stay Home, Stay Safe!</h2>
          <p>
            COVID-19 or as the plebs call it, the coronavirus has restricted a lot
            of us to our homes. You can choose to while away your time sleeping;
            doing nothing or you could utilize this break to ‘Learn’ something
            new. You know you’ve said this a lot to yourself - “I want to Learn
            'X' but I can’t seem to find the time.” This is the time; Turn Your
            Self-Isolation into Self-Improvement!
        </p>
          <hr />
          <h3>With Lots of Love</h3>
          <a class="text-white" href="https://akash-mane.netlify.app/">
            {" "}
            <h4> Mane Akash </h4>
          </a>
        </div>

        <div class="img_slider">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://www.cipla.com/sites/default/files/2020-09/covid-19-desktop-banner.jpg"
                  alt="First slide"
                ></img>{" "}
              </div>

              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://prod-metropolisindia-bucket.s3.ap-south-1.amazonaws.com/images/compressed/730x399_covid_accurate_reports.jpg"
                  alt="Third slide"
                ></img>{" "}
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://c5.rgstatic.net/m/44004776572857147/images/communityboard/covid19-social-cover.png"
                  alt="Third slide"
                ></img>{" "}
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="contact">
          <h5>
            If you have any Query or any information about it then Feel free to ..
        </h5>
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
              <input
                type="phone"
                name="Phone"
                placeholder="Enter your Phone Number"
              />

              <h6>Message</h6>

              <input type="text" name="Message" placeholder="Enter msg here !" />

              {/* <textarea name = "Message" placeholder="Enter msg here !" name="ta" id="ta" cols="25" rows="3" /> */}
              <button onClick={send} id="send">
                Send
            </button>
            </form>
          </div>
        </div>
        <button onClick={gotop}>
          <img src={top} alt="" id="top" />
        </button>

        <Footer />
    </>
  );
}

export default App;
