import React from "react";
import './Qna.css'

function Qna() {
    return(
        <>
            {/* <div className="content second-content"> */}
                {/* <div className="container-fluid"> */}
                    <section className="page-section" id="contact">
                        <div style={{marginLeft : "25%", marginTop : "5%"}} className="box">    
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6 text-center">
                                    <h2 className="mt-0">QnA</h2>
                                    <hr className="divider" />
                                    <p className="text-muted mb-5">무엇이 궁금하신가요?</p>
                                </div>
                            </div>
                            <div style={{textAlign : "center"}} className="row gx-4 gx-lg-5 justify-content-center mb-5">
                                <div className="col-lg-8 col-xl-6 text-center">
                                    <input type="search" placeholder=""></input>
                                    <button className="fa fa-heart"></button>
                                </div>
                            </div>
                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <div>010 - 1234 - 5678</div>
                            </div>
                        </div>
                    </section>
                {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default Qna;


