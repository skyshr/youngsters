// import "./Mypage.css";
import Nav from "./Nav"
import Profile from "./Profile";
import Details from "./Details";
import Game from "./Game";
import Inquiry from "./Inquiry";
import { useState } from "react";

export default function Mypage() {
  const [page, setPage] = useState(0);
  return (
    <>
      <div>
        <Nav page={page} setPage={setPage}/>
      </div>

      <div className="slides">
        {page == 0 &&
          <div className="slide" id="1">
            <div className="content first-content" style={{backgroundColor: "rgb(12,194,194)"}}>
              <div className="container-fluid">
                  <div>
                      <Profile/>
                  </div>  
              </div>
            </div>
          </div>
        }

        {page == 1 &&
          <div className="slide" id="2">
            <div className="content second-content" style={{backgroundColor: "rgb(12,194,194)"}}>
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
        }

        {page == 2 &&
          <div className="slide" id="3">
            <div className="content second-content" style={{backgroundColor: "rgb(12,194,194)"}}>
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
        }

        
        {page == 3 && 
          <div className="slide" id="4">
            <div className="content fifth-content" style={{backgroundColor: "rgb(12,194,194)"}}>
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
        }
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