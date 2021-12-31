import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useRef } from 'react';

function App() {
    const [state, setState] =useState({
        testbody : "",
        data : ""
    });
  
    const onChange =(e)=>{
      const {name, value} = e.target;
      
        setState({
        ...state, [name] : value,
      });
    };
  
    const onSubmit = ()=>{
        const post ={
            test : state.testbody,
        };
        
        fetch("http://localhost:3001/idplz", {
            method : "post", // 통신방법
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(post),
        })
    //   .then((res)=>res.json())
    //   .then((json)=>{
    //     this.setState({
    //       testbody : json.text,
    //     });
    //   });
    };

    const onCall = () => {
        fetch("http://localhost:3001/callbody", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify()
        })
        .then((res) => res.json())
        .then((json) => {
            setState({
                data : json.test_body
            })
        })
    }
  
    return (
    <div>
        <input onChange={onChange} name ="testbody"/>
        <button onClick = {onSubmit}>Submit</button>
        <h1>{state.testbody}</h1>
        <br /><br />
        <h2>데이터 가져오기</h2>
        <h3>{state.data}</h3>
        <button onClick={onCall}>가져오기</button>
    </div>
    )
}

export default App;