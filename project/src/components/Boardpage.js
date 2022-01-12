import { useState } from "react";
import Board from "./Board";
import Inquire from "./Inquire";
import NavMw from "./NavMw";
import Qna from "./Qna";
import Review from "./Review";

export default function Boardpage() {
  const [page, setPage] = useState(0);
  return (
    <>
      <div>
        <NavMw page={page} setPage={setPage}/>
      </div>

      <div className="slides">
        {page == 0 && 
          <div className="slide" id="1">
            <div className="content third-content" style={{backgroundColor: "#ffc7c5"}}>
              <div className="container-fluid">
                  <div>
                      <Review />
                  </div>  
              </div>
            </div>
          </div>   
        }

        {page == 1 && 
          <div className="slide" id="2">
            <div className="content second-content" style={{backgroundColor: "#feb7c2"}}>
              <div className="container-fluid">
                <div>
                    <Board />
                </div>
              </div>
            </div>
          </div>
        }

        {page == 2 &&
          <div className="slide" id="3">
            <div className="content second-content" style={{backgroundColor: "#fdc3c2"}}>
              <div className="container-fluid">
                <div>
                    <Inquire />
                </div>
              </div>
            </div>
          </div>
        }


        {page == 3 &&
          <div className="slide" id="4">
            <div className="content fifth-content" style={{backgroundColor: "#ffc9dd"}}>
              <div className="container-fluid">
                <div className="col-md-6">
                  <div id="map"></div>
                </div>
                <div>
                    <Qna />
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