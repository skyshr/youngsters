import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Board from "./Board";
import Inquire from "./Inquire";
import NavMw from "./NavMw";
import Qna from "./Qna";
import Review from "./Review";

export default function Boardpage() {
  const [page, setPage] = useState(0);
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
        <NavMw page={page} setPage={setPage}/>
      </div>

      <div className="slides">
        <a id="1">
          <div className="slide" id="1">
            <div className="content third-content" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
              {/* <div className="container-fluid"> */}
                  <div>
                      <Review />
                  </div>  
              {/* </div> */}
            </div>
          </div>  
        </a> 

        <a id="2">
          <div className="slide" id="2">
            <div className="content second-content" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
              {/* <div className="container-fluid"> */}
                <div>
                    <Board />
                </div>
              {/* </div> */}
            </div>
          </div>
        </a>
      
        <a id="3">
          <div className="slide" id="3">
            <div className="content second-content" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
              {/* <div className="container-fluid"> */}
                <div>
                    <Inquire />
                </div>
              {/* </div> */}
            </div>
          </div>
        </a>

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