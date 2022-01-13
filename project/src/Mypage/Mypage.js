// import "./Mypage.css";
import Nav from "./Nav"
import Profile from "./Profile";
import Details from "./Details";
import Game from "./Game";
import Inquiry from "./Inquiry";

export default function Mypage() {
  return (
    <>

      <div>
        <Nav />
      </div>

      <div className="slides">

        <div className="slide" id="1">
          <div className="content first-content" style={{backgroundColor: "#ffc7c5"}}>
            <div className="container-fluid">
                <div>
                    <Profile/>
                </div>  
            </div>
          </div>
        </div>

        <div className="slide" id="2">
          <div className="content second-content" style={{backgroundColor: "#feb7c2"}}>
            <div className="container-fluid">
              <div>
                  <Details/>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="img/about_image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide" id="3">
          <div className="content second-content" style={{backgroundColor: "#fdc3c2"}}>
            <div className="container-fluid">
              <div>
                  <Game/>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="img/about_image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide" id="4">
          <div className="content fifth-content" style={{backgroundColor: "#ffc9dd"}}>
            <div className="container-fluid">
              <div className="col-md-6">
                <div id="map"></div>
              </div>
              <div>
                  <Inquiry />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="footer">
        <div className="content">
          <p>
            Copyright &copy; 2018 Your Company .{" "}
            <a href="http://www.templatemo.com/tm-512-moonlight">Moonlight</a>{" "}
            by{" "}
            <a href="http://www.html5max.com" target="_parent">
              HTML5 Max
            </a>
          </p>
        </div>
      </div>
      <script src="js/main.js"></script>
      <script src="js/datepicker.js"></script>
    </>
  );
}