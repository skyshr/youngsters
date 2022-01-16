import '../css/login.css';
import '../index.css';
import React, { useState } from 'react';

export default function Login(){
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
})
// //비밀번호 유효성 검사
// const checkPassword = (e) => {
//   var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/ 
//   //  8 ~ 10자 영문, 숫자 조합
//   // 형식에 맞는 경우 true 리턴
//   if(!regExp.test(e.target.value)){
//     alert("비밀번호를 재설정하세요")
//   }
//   // console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
// }
// // 이메일 유효성 검사
// const checkEmail = (e) => {
//   var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
//   // 형식에 맞는 경우 true 리턴
//   if(!regExp.test(e.target.value)){
//     alert("이메일 형식으로 입력하세요")
//   }
//   // console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
// }
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
                  sessionStorage.setItem('username', data.username);
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
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('gender', data.gender);
                break;
              }
              else {
                test = "game"
                break;
              }
            }
            else {
              test = "nodata";
            }
          }

        // console.log(test);

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