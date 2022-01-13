import '../css/login.css';
import '../index.css';
import React, { useState } from 'react';

export default function Login(){
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
})

const onChange = (e) => {
    const {name, value} = e.target;

    setInputs({
        ...inputs,
        [name]: value
    })
}

const goToJoin = () => {
  document.location.href=('/signup')
}

const onSubmit = () => {
    const post ={
        pid : inputs.id,
        ppw: inputs.pw
    };
    
    console.log(post)

    fetch("http://localhost:3001/login", {
        method : "get", // 통신방법
        headers : {
        "content-type" : "application/json"
        },
    })
    .then((res) => res.json())
    .then((json) => {
        let test = false;
        for (let data of json['result']) {
          if (data.userid == inputs.id && data.userpw == inputs.pw) {
            for (let game of json['game']) {
              if (game.idkey==data.idkey) {
                alert("로그인 성공!")
                sessionStorage.setItem('idkey', data.idkey);
                sessionStorage.setItem('id', data.userid);
                sessionStorage.setItem('gender', data.gender);
                sessionStorage.setItem('loginstatus', "okay");
                document.location.href = '/';
                return;
              }
            }
            if (sessionStorage.getItem('q8')!=undefined) {
              test = "okay";
              sessionStorage.setItem('idkey', data.idkey);
              sessionStorage.setItem('id', data.userid);
              sessionStorage.setItem('gender', data.gender);
              break;
            }
            else {
              test = "game";
            }
          }
        }

        console.log(test);

        if (test=="okay") {
          fetch("http://localhost:3001/game", {
              method : "post", // 통신방법
              headers : {
              "content-type" : "application/json"
              },
              body : JSON.stringify({idkey: sessionStorage.getItem('idkey'),
              gender: sessionStorage.getItem('gender'),
              q1: sessionStorage.getItem('q1'),
              q2: sessionStorage.getItem('q2'),
              q3: sessionStorage.getItem('q3'),
              q4: sessionStorage.getItem('q4'),
              q5: sessionStorage.getItem('q5'),
              q6: sessionStorage.getItem('q6'),
              q7: sessionStorage.getItem('q7'),
              q8: sessionStorage.getItem('q8'),
              })
          })
          .then(() => {
            sessionStorage.setItem('loginstatus', "okay");
            alert("로그인 성공!")
            document.location.href = '/';
            return;
          })
        }
        else if (test=="game") alert("설문 완료 후 로그인 하세요.");
        else alert("다시 입력하세요");
        // if (json) {
        //     console.log("true!");
        //     alert("로그인 성공!");
        //     document.location.href='/';
        // }
        // else {
        //     alert("다시 입력하세요.")
        // }
    })
}

return(
  <div className='login'>
      <div className='login-container'>
        <div className='wrap-login'>
          <div className='login-top'>
            <h1>LOGIN</h1>
          </div>
          <div className='login-middle'>
            <div className='middle'>
              <input type="email" name="id" value={inputs.id} onChange={onChange} placeholder='EMAIL'></input>
              <input type='password' name="pw" value={inputs.pw} onChange={onChange}  placeholder='PASSWORD'></input>
              <button className='login-button' onClick={onSubmit}>LOGIN</button>
            </div>
          </div>
          <div className='login-bottom'>
            <div className='bottom'> 
              <button className='join-button' onClick={goToJoin} >JOIN</button>
            </div>
          </div>
        </div>
      </div>
  </div>
)
}