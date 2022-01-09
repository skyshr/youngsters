import { useEffect, useState } from "react";
import "./main.css";
import React from "react";


export default function Profile() {
const [state, setState] = useState({
    name: "",
    id: "",
    psw: "",
    adr: "",
})

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
    name: "",
    id: "",
    psw: "",
    adr:"",
    sessionid: sessionStorage.getItem("idkey"),
})

const {name, id, psw, adr} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useEffect(
    () => {
        fetch("http://localhost:3001/profile", 
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },  
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        // sessionStorage.setItem('idkey', json.idkey)
        // console.log('idkey: ' + sessionStorage.getItem('idkey'));
        for (let val of json) {
            if (val.idkey==inputs.sessionid) {
                setState({
                    name: val.username,
                    id: val.userid,
                    psw: val.userpw,
                    adr: val.useraddr,
                })
            }
        }
    })
    
    }, []//교수님 질문사항
) 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {

    if (name==="") inputs.name=state.name;
    if (id==="") inputs.id=state.id;
    if (psw==="") inputs.psw=state.psw;
    if (adr==="") inputs.adr=state.adr;
    // inputs.sessionid = state.sessionid;
    console.log(inputs);

    // setState(inputs);
    // setInputs({
    //     name: "",
    //     id: "",
    //     psw: "",
    //     adr:"",
    // })
    fetch("http://localhost:3001/profile", 
        {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(inputs)
    })
    // .then((res) => res.json())
    // .then((json)=> {
    //     console.log(json);
    // })
    .then(()=> {
        console.log('1')
        // state.sessionid = inputs.idkey;
        setState(inputs);
    }).then(()=> {
        console.log('2')
        setInputs({
            name: "",
            id: "",
            psw: "",
            adr:"",
            sessionid: sessionStorage.getItem("idkey"),
        })
    }).then(()=>{
        console.log('3')
        setCheck(true)
    })
    

    // setCheck(true)
}


if(check) {
return (
    <>
    <div className="col-md-3">
        <div className="author-image">
            <img src="img/author_image.png" alt="" />
        </div>
    </div>
        <div className="col-md-9">
            
            <h2>프로필</h2><br/>
            <p>이름 {state.name}</p>
            <p>아이디 {state.id}</p>
            <p>비밀번호 {state.psw}</p>
            <p>주소 {state.adr}</p>
            <div className="main-btn">
            <button className = "prbtn" type = "button" onClick = {onClick} >수정하기</button>
            
        </div>
    </div>
    </>
    );
}
else{
    return (
        <>
        <div className="col-md-3">
            <div className="author-image">
                <img src="img/author_image.png" alt="" />
            </div>
        </div>
            <div className="col-md-9">
                
                <h2>프로필</h2><br/>
                <p>이름 
                    <input name = "name" className = "poInput" value = {name} type = "text" placeholder = {state.name} onChange = {handler} />
                </p>
                <p>아이디 
                    <input name = "id" className = "poInput" value = {id} type = "text" placeholder = {state.id} onChange = {handler} />
                </p>
                <p>비밀번호 
                    <input name = "psw" className = "poInput" value = {psw} type = "text" placeholder = {state.psw} onChange = {handler} />
                </p>
                <p>주소 
                    <input name = "adr" className = "poInput" value = {adr} type = "text" placeholder = {state.adr} onChange = {handler} />
                </p>
                <div className="main-btn">
                <button className = "prbtn" type = "button" onClick = {btnClick}>저장하기</button>
                
            </div>
        </div>
        </>
        );
    }
}