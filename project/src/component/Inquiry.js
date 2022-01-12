import { useEffect, useState } from "react";
import "./main.css";
import React from "react";

export default function Inquiry() {
  const tlqkf = {
    color: "pink",
  }
  const [state, setState] = useState({
    title : "",
    message : "",

  })

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
    title : "",
    message : "",
    sessionid: sessionStorage.getItem('idkey'),
})

const {title, message} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useEffect(
  () => {
      fetch("http://localhost:3001/inquiry", 
      {
      method: "get",
      headers: {
          "content-type": "application/json",
      },
  })
  .then((res) => res.json())
  .then((json) => {
      console.log(json)
      console.log('idkey: ' + sessionStorage.getItem('idkey'));
      for (let data of json) {
        if (data.idkey == sessionStorage.getItem('idkey')) {
          setState(data)
        }
      }
  })
  
  }, []
) 

const onClick = () => {
  setCheck(false)
}

const btnClick = () => {

  if (title === "") inputs.title = state.title;
  if (message === "") inputs.message = state.message;

  console.log(inputs);



  fetch("http://localhost:3001/inquiry", 
      {
      method: "put",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(inputs)
  })

  .then(()=> {
      console.log('1')
      setState(inputs);
  }).then(() => {
      console.log('2')
      setInputs({
          title : "",
          message : "",
          sessionid: sessionStorage.getItem("idkey"),
      })
  }).then(()=>{
      console.log('3')
      setCheck(true)
  })
  
}


if(check){
    return (
      <div className = "inDiv">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12" id = "test">
              <h1>문의확인</h1>
  
            <div className="col-md-12">
              <fieldset>
                <p className = "deInput">{state.title}</p>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <p>{state.message}</p>
              </fieldset>
            </div>
            
            <div className="col-md-12">
                <button className = "prbtn" onClick = {onClick} type="button">
                  수정하기
                </button>
            </div>
          </div>
          </div>
      </div>
    </div>
    )
}else {
  return (
    <div className = "inDiv">
      <div className="col-md-6">
      <form id="contact" action="" method="post">
        <div className="row">
          <div className="col-md-12" id = "test">
            <h1>문의확인</h1>

          <div className="col-md-12">
            <fieldset>
              <input style = {tlqkf} name="title" value = {title} type="text" placeholder = {state.title} onChange = {handler}/>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <textarea style = {tlqkf} name="message" rows="6" value = {message} placeholder = {state.message} onChange = {handler}></textarea>
            </fieldset>
          </div>
          
          <div className="col-md-12">
            <fieldset>
              <button className = "prbtn"  type="button" onClick = {btnClick}>
                수정하기
              </button>
            </fieldset>
          </div>
        </div>
        </div>
      </form>
    </div>
  </div>
  )
}
}