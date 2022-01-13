import React, { useState } from "react";
import './Inquire.css';
import './css.css';

function Inquire() {
    const [state, setState] = useState({
        name : "",
        email : "",
        number : "",
        message : ""
    });
  
    const onChange =(e)=>{
      const {name, value} = e.target;
      
        setState({
        ...state, [name] : value
      });
    };
  
    const onSubmit = ()=>{
        const post ={
            name : state.name,
            email : state.email,
            number : state.number,
            message : state.message
        };
        
        fetch("http://localhost:3001/inquire", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(post)
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setState({
            name : "",
            email : "",
            number : "",
            message : ""
        })
    }

    return(
        <>
            <div style={{backgroundColor : "pink"}} className="content second-content">
                {/* <div className="container-fluid"> */}
                    <div style={{marginLeft : "25%", marginTop : "5%"}} className="box">    
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <h2 className="mt-0">문의하기</h2>
                                <hr className="divider" />
                                <p className="text-muted mb-5">영스타를 이용하시면서 불편사항, 개선사항들을 보내주세요.</p>
                            </div>
                        </div>

                        <div onSubmit={handleSubmit} style={{textAlign : "center"}} className="row gx-4 gx-lg-5 justify-content-center mb-5">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div style={{textAlign:"left"}} className="form-floating mb-3">
                                        <label htmlFor="name">Full name</label>
                                        <input className="form-control" name="name" type="text" placeholder="Enter your name..." data-sb-validations="required" onChange={onChange} value={state.name}/>
                                    </div>
                                    <div style={{textAlign:"left"}} className="form-floating mb-3">
                                        <label htmlFor="email">Email address</label>
                                        <input className="form-control" name="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" onChange={onChange} value={state.email}/>
                                    </div>
                                    <div style={{textAlign:"left"}} className="form-floating mb-3">
                                        <label htmlFor="phone">Phone number</label>
                                        <input className="form-control" name="number" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" onChange={onChange} value={state.number}/>
                                    </div>
                                    <div style={{textAlign:"left"}} className="form-floating mb-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" name="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required" onChange={onChange} value={state.message}></textarea>
                                    </div>
                                    <br /><div className="d-grid"><button onClick={onSubmit} className="btn" name="submitButton" type="submit">문의하기 완료</button></div>
                                    <br /><div className="d-grid"><button className="btn" name="submitButton" type="submit">내 문의 목록</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Inquire;