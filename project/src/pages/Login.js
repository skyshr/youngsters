import '../css/signup.css';
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

  const onSubmit = (e) => {
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
          for (let data of json) {
            if (data.userid == inputs.id && data.userpw == inputs.pw) {
              test = true;
              sessionStorage.setItem('idkey', data.idkey);
              sessionStorage.setItem('id', data.userid);
              sessionStorage.setItem('gender', data.gender);
              break;
            }
          }

          if (test) {
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
              alert("로그인 성공!")
              sessionStorage.setItem('loginstatus', "okay");
              document.location.href = '/';
            })
          }
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
    <>
      <div className='wrap'>
        <div className='login-container'>
          <div className='wrap-login'>
            <div className='login-top'>
              <h1>LOGIN</h1>
            </div>
            <div className='login-middle'>
              <div className='middle'>
                <input type="email" name="id" value={inputs.id} onChange={onChange} placeholder='아이디 또는 이메일'></input>
                <input type='password' name="pw" value={inputs.pw} onChange={onChange}  placeholder='비밀번호'></input>
                <button className='login-button' onClick={onSubmit}>LOGIN</button>
              </div>
            </div>
            <div className='login-bottom'>
              <div className='bottom'> 
                <div className='click-signup'><a href="#">회원가입</a></div>
                <div className='click-forgotID'><a href="#">아이디찾기</a></div>
                <div className='click-forgotPW'><a href="#">비밀번호 찾기</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 