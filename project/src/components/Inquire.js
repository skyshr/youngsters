import React from "react";
import './Inquire.css';

function Inquire() {
    return(
        <>
            {/* <section className="page-section" id="contact"> */}
                <div style={{marginLeft : "25%", marginTop : "5%"}} className="box">    
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">문의하기</h2>
                            <hr className="divider" />
                            <p className="text-muted mb-5">영스타를 이용하시면서 불편사항, 개선사항들을 보내주세요.</p>
                        </div>
                    </div>
                    <div style={{textAlign : "center"}} className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                    <label for="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at <a href="/login">here</a>
                                        <br />
                                        <a href="/"></a>
                                    </div>
                                </div>
                                {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div> */}
                                <div className="d-grid"><button className="1" id="submitButton" type="submit">문의하기 완료</button></div>
                                <div className="d-grid"><button className="2" id="submitButton" type="submit">내 문의 목록</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </>
    )
}

export default Inquire;