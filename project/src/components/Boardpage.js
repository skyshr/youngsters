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
        {/* {page == 0 &&  */}
        <a id="1">
          <div className="slide" id="1">
            <div className="content third-content" style={{backgroundColor: "#ffc0cb"}}>
              {/* <div className="container-fluid"> */}
                  <div>
                      <Review />
                  </div>  
              {/* </div> */}
            </div>
          </div>  
        </a> 
        {/* } */}

        {/* {page == 1 &&  */}
        <a id="2">
          <div className="slide" id="2">
            <div className="content second-content" style={{backgroundColor: "#ffc0cb"}}>
              {/* <div className="container-fluid"> */}
                <div>
                    <Board />
                </div>
              {/* </div> */}
            </div>
          </div>
        </a>
        {/* } */}

        {/* {page == 2 && */}
        <a id="3">
          <div className="slide" id="3">
            <div className="content second-content" style={{backgroundColor: "#ffc0cb"}}>
              {/* <div className="container-fluid"> */}
                <div>
                    <Inquire />
                </div>
              {/* </div> */}
            </div>
          </div>
        </a>
        {/* } */}


        {/* {page == 3 &&
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
        } */}

      </div>

      {/* <div className="footer">
        <div className="content">
        </div>
      </div>
      <script src="js/main.js"></script>
      <script src="js/datepicker.js"></script> */}
    </>
  );
}