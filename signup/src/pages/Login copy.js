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
          method : "post", // 통신방법
          headers : {
          "content-type" : "application/json"
          },
          body : JSON.stringify(post),
      })
      .then((res) => res.json())
      .then((json) => {
          console.log(json);
          if (json) {
              console.log("true!");
              alert("로그인 성공!");
              document.location.href='/';
          }
          else {
              alert("다시 입력하세요.")
          }
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