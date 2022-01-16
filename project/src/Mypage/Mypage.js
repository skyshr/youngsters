// import "./Mypage.css";
import { Helmet } from 'react-helmet'
import Nav from "./Nav"
import Profile from "./Profile";
import Details from "./Details";
import Game from "./Game";
import Inquiry from "./Inquiry";
import { useEffect, useState } from "react";

export default function Mypage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/main.js';
    script.async = true;
    document.body.appendChild(script)
  }, []);
  return (
    <>
      {/* <Helmet>
        <script src="js/main.js" />
      </Helmet> */}
      <div>
        <Nav/>
      </div>

      <div className="slides">
        {/* {page == 0 && */}
          <div className="slide" id="1">
            <div className="content first-content" style={{backgroundColor: "#ffd9fe"}}>
              <div className="container-fluid">
                  <div>
                      <Profile/>
                  </div>  
              </div>
            </div>
          </div>
        {/* } */}

        {/* {page == 1 && */}
          <div className="slide" id="2">
            <div className="content second-content" style={{backgroundColor: "#ffd9fe"}}>
              <div className="container-fluid">
                <div>
                    <Details/>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <img src="img/flower.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* } */}

        {/* {page == 2 && */}
          <div className="slide" id="3">
            <div className="content second-content" style={{backgroundColor: "#ffd9fe"}}>
              <div className="container-fluid">
                <div>
                    <Game/>
                </div>
                {/* <div className="col-md-6">
                  <div className="right-image">
                    <img src="img/img.jpeg" alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        {/* } */}

        
        {/* {page == 3 &&  */}
          <div className="slide" id="4">
            <div className="content fifth-content" style={{backgroundColor: "#ffd9fe"}}>
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
        {/* } */}
      </div>

      <div className="footer">
        <div className="content">
        </div>
      </div>
      <script src="js/main.js"></script>
      <script src="js/datepicker.js"></script>
    </>
  );
}