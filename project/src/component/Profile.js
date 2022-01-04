import { useEffect, useState } from "react";
import "./main.css";
import React from "react";

// import { json } from "body-parser";

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
        fetch("http://localhost:3001/text", 
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },  
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setState({
            name: json.users,
            id: json.id,
            psw: json.psw,
            adr: json.adr
        })
    })
    
    }, []//교수님 질문사항
) 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {
    // console.log(Object.keys(inputs).map(key=>inputs[key]))
    // console.log({...inputs => key})
    for (var [key, value] of Object.entries(inputs)) {
        // console.log(key);
        // console.log(value);
        if (value!="") {
            setState({...state,
                [key] : value
        }) 
    }
}
console.log(state);
setCheck(true);
}
    // setState({...inputs,
    // }
    // )

    // }

    // setCheck(true)

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
            <button type = "button" onClick = {onClick} >수정하기</button>
            
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
                <button type = "button" onClick = {btnClick}>저장하기</button>
                
            </div>
        </div>
        </>
        );
    }
}
