import { useEffect, useState, useLayoutEffect } from "react";
import "./main.css";
import React from "react";


export default function Profile() {
const [imgstate, setImgstate] = useState('')
const [image, setImage] = useState('');
const [fileImage, setFileImage] = useState("") 
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

useLayoutEffect(
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
                // val.img = val.img.slice(2);
                console.log(val.img);
                if (val.img.slice(2)=="img/test.gif") setImage("http://localhost:3000/" + val.img.slice(2))
                else if(val.img=="img/test.gif") setImage("http://localhost:3000/" + val.img)
                else setImage("http://localhost:3001/" + val.img)
            }
        }
    })
    // .then(() => {
    //     fetch(`http://localhost:3001/api/image`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": 'application/json, charset=UTF-8',
    //             'Accept': 'application/json, text/html',
    //         },
    //         credentials: 'include',
    //     }).then(data => data.json())
    //     .then((data)=> {
    //         console.log(data.image)
    //         setImage('http://localhost:3001/' + data.image)
    //     })

    // })
    }, []//????????? ????????????
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

    const file = document.getElementById('logoimg').files[0];
    console.log(file);
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
        if (file!= undefined) {
            const formData = new FormData()
            formData.append('image', file)
            formData.append('idkey', inputs.sessionid);
            fetch(`http://localhost:3001/api/image`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'multipart/form-data',
                },
                credentials: 'include',
            })
            .then(res => res.json())
            .then(res => {
                // setUploadStatus(res.msg)
                setImage("http://localhost:3001/" + res.data)
                setCheck(true)
            });
        }
        else setCheck(true)
    })
    

    // setCheck(true)
}

const imageHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
        setFileImage(URL.createObjectURL(event.target.files[0]))
        console.log("fileimg: " + fileImage)
        setImgstate(state+1)
    }


if(check) {
return (
    <>
    <div className="col-md-3">
        <div className="author-image">
            <img src={image} alt="?????????" />
        </div>
    </div>
        <div className="col-md-9" style={{marginLeft: "0%"}}>
            
            <h2>?????????</h2><br/>
            <p>?????? {state.name}</p>
            <p>????????? {state.id}</p>
            <p>???????????? {state.psw}</p>
            <p>?????? {state.adr}</p>
            <div className="main-btn">
            <button className = "prbtn" type = "button" onClick = {onClick} >????????????</button>
            
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
                    {image && imgstate==0 && <img src = {image} alt = "img"/>}
                    {fileImage && imgstate!=0 && (<img src={fileImage}/>)}
                <input type="file" name="image" accept="image/*" multiple={false} onChange = {imageHandler} className="prInput" id="logoimg" />
            </div>
        </div>
            <div className="col-md-9">
                
                <h2>?????????</h2><br/>
                <p>?????? 
                    <input name = "name" className = "poInput" value = {name} type = "text" placeholder = {state.name} onChange = {handler} />
                </p>
                <p>????????? 
                    <input name = "id" className = "poInput" value = {id} type = "text" placeholder = {state.id} onChange = {handler} />
                </p>
                <p>???????????? 
                    <input name = "psw" className = "poInput" value = {psw} type = "text" placeholder = {state.psw} onChange = {handler} />
                </p>
                <p>?????? 
                    <input name = "adr" className = "poInput" value = {adr} type = "text" placeholder = {state.adr} onChange = {handler} />
                </p>
                <div className="main-btn">
                <button className = "prbtn" type = "button" onClick = {btnClick}>????????????</button>
                
            </div>
        </div>
        </>
        );
    }
}