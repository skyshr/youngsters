import { useEffect, useState } from "react";
import "./main.css";
import React from "react";

export default function Details() {
  const [state, setState] = useState({
    pro: "",
    edu: "",
    job: "",
    hob: "",
    fam: "",
  })

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
    pro: "",
    edu: "",
    job: "",
    hob:"",
    fam:"",
    sessionid: sessionStorage.getItem('idkey'),
})

const {pro, edu, job, hob, fam} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useEffect(
    () => {
        fetch("http://localhost:3001/details", 
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },  
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        // sessionStorage.setItem('dekey', json.idkey)
        console.log('idkey: ' + sessionStorage.getItem('idkey'));
        if (json.length!=0) {
          for (let data of json) {
            if (data.idkey==inputs.sessionid) {
              setState({
                pro: data.pro,
                edu: data.edu,
                job: data.job,
                hob: data.hob,
                fam: data.fam,
                sessionid: data.idkey
              })
            }
          }
        }
    })
    
    }, []
) 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {

    if (pro === "") inputs.pro = state.pro;
    if (edu === "") inputs.edu = state.edu;
    if (job === "") inputs.job = state.job;
    if (hob === "") inputs.hob = state.hob;
    if (fam === "") inputs.fam = state.fam;
    // inputs.sessionid = state.sessionid;
    console.log(inputs);

    fetch("http://localhost:3001/details", 
        {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(inputs)
    })

    .then(()=> {
        console.log('1')
        // state.sessionid = inputs.idkey;
        setState(inputs);
    }).then(() => {
        console.log('2')
        setInputs({
            pro: "",
            edu: "",
            job: "",
            hob: "",
            fam: "",
            sessionid: sessionStorage.getItem('idkey')
        })
    }).then(()=>{
        console.log('3')
        setCheck(true)
    })
    
}


if(check) {
  return (

        <div className="col-md-6">
            <div className="left-content">
              <div className = "deDiv">
                  <h2>????????????</h2>
                  <h1 className = "deText">
                    ??????
                    <br/>
                    <p className = "deInput">{state.pro}</p>
                  </h1>
                  
                  <h1 className = "deText">
                    ?????? 
                    <br/>
                    <p className = "deInput">{state.edu}</p>
                  </h1>
                  
                  <h1 className = "deText">
                    ?????? 
                    <br/>
                    <p className = "deInput">{state.job}</p>
                  </h1>
                  
                  <h1 className = "deText">
                    ??????
                    <br/>
                    <p className = "deInput">{state.hob}</p>
                  </h1>
                  
                  <h1 className = "deText">
                    ????????????
                    <br/>
                    <p className = "deInput">{state.fam}</p>
                  </h1>
                  
                <div className="main-btn">
                    <button className = "prbtn" type = "button" onClick = {onClick}>????????????</button>
                </div>
                </div>
            </div>
        </div>
    )
}else {
  return (
    <div className="col-md-6">
        <div className="left-content">
          <div className = "deDiv">
              <h2>????????????</h2>
              <h1 className = "deText">
                ?????? 
                <br/>
                <input className = "deInput" name = "pro" value = {pro} type = "text" placeholder = {state.pro} onChange = {handler} />
              </h1>
              
              <h1 className = "deText">
                ?????? 
                <br/>
                <input className = "deInput" name = "edu" value = {edu} type = "text" placeholder = {state.edu} onChange = {handler} />
              </h1>
              
              <h1 className = "deText">
                ?????? 
                <br/>
                <input className = "deInput" name = "job" value = {job} type = "text" placeholder = {state.job} onChange = {handler}/>
              </h1>
              
              <h1 className = "deText">
                ??????
                <br/>
                <input className = "deInput" name = "hob" value = {hob} type = "text" placeholder = {state.hob} onChange = {handler}/>
              </h1>
              
              <h1 className = "deText">
                ????????????
                <br/>
                <input className = "deInput" name = "fam" value = {fam} type = "text" placeholder = {state.fam} onChange = {handler}/>
              </h1>
              
            <div className="main-btn">
                <button className = "prbtn" type = "button" onClick = {btnClick} >????????????</button>
            </div>
            </div>
        </div>
    </div>
)
}
}