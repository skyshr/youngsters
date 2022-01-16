import '../css/signup.css'; 
import '../index.css';
import React, { useState } from 'react';
import PostApi from '../componants/postApi';
import Login from './Login';



export default function Join(){
  const [state, setState] = useState(true);
  const [inputs, setInputs] = useState({
    id : "",
    pw : "",
    name : "",
    gender : "",
    year : "",    
    age : "",
    useraddr : "",
    useraddrdet : ""
  });

  const {id, pw, name, gender, year, age, useraddr, useraddrdet} = inputs;


  const onChange = (e) =>{
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name] : value
    })
  }
   //비밀번호 유효성 검사
   const checkPassword = (value) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/ 
    //  8 ~ 10자 영문, 숫자 조합
    // 형식에 맞는 경우 true 리턴
    if(!regExp.test(value)){
      alert("비밀번호를 재설정하세요")
      return true
    }
    // console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
  }
  // 이메일 유효성 검사
  const checkEmail = (value) => {
      var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      // 형식에 맞는 경우 true 리턴
      if(!regExp.test(value)){
        alert("이메일 형식으로 입력하세요")
        return true
      }
      // console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
  }

  const onSubmit = () => {
    if (checkEmail(inputs.id) || checkPassword(inputs.pw)) return;
    else if (inputs.name=="") alert("이름을 입력하세요");
    else if (inputs.gender=="") alert("성별을 입력하세요");
    else if (inputs.year=="") alert("출생년도를 입력하세요");
    else if (inputs.age=="") alert("나이를 입력하세요");
    else if (inputs.useraddr=="") alert("주소를 입력하세요.");
    else if (inputs.useraddrdet=="")alert("상세주소를 입력하세요.")

    else {
      const post ={
        pid : inputs.id,
        ppw: inputs.pw,
        pname: inputs.name,
        pgender : inputs.gender,
        pyear : inputs.year,
        page : inputs.age,
        puseraddr : inputs.useraddr,
        puseraddrdet : inputs.useraddrdet
      };
  
      console.log(post);
  
      fetch("http://localhost:3001/signup", {
        method : "post",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(post)
      })
      .then((res)=> res.json())
      .then((json)=>{
        console.log(json);
        if (json) {
          alert("회원 가입 성공!")
          setState(!state);
        }
        else alert("중복된 아이디입니다")
      })
    }
  }

  if (state) {

        //비밀번호 유효성 검사
        const checkPassword = (e) => {
          var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/ 
          //  8 ~ 10자 영문, 숫자 조합
          // 형식에 맞는 경우 true 리턴
          if(!regExp.test(e.target.value)){
            alert("비밀번호를 재설정하세요")
          }
          // console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
      }
      // 이메일 유효성 검사
      const checkEmail = (e) => {
          var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
          // 형식에 맞는 경우 true 리턴
          if(!regExp.test(e.target.value)){
            alert("이메일 형식으로 입력하세요")
          }
          // console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
      }
    return(
      <>
        <div className='signup'>
          <div action='post' className='join-container'>
            <div className='join-top'>
              <h1>SIGNUP</h1>
            </div>
            <div className='join-middle'>
                <div className='middle'>
                  <div>
                    {/* <input id='id' name='id' value={id} type='email' placeholder='사용할 아이디(email 형식)' onChange={onChange}/> */}
                    <input id='id' name='id' value={id} type='email' placeholder='사용할 아이디(email 형식)' onChange={onChange} onBlur={checkEmail} />
                  </div>
                  <div>
                    {/* <input id='pw' name='pw' value={pw} type='password' minLength="8" placeholder='비밀번호(8 ~ 10자 영문, 숫자 조합)'  onChange={onChange} /> */}
                    <input id='pw' name='pw' value={pw} type='password' minLength="8" placeholder='비밀번호(8 ~ 10자 영문, 숫자 조합)'  onChange={onChange} onBlur={checkPassword}/>
                  </div>
                  <div>
                    <input id='name' name='name' value={name}  type='text' placeholder='이름'  onChange={onChange} />
                  </div>
                  <div>
                    <select className="select" id='gender' name='gender' value={gender} onChange={onChange} className='gender' placeholder='성별' >
                      <option className='option' value="">선택</option>
                      <option value="남자">남</option>
                      <option value="여자">여</option>
                    </select>
                    <select id='year' name='year' value={year} onChange={onChange} maxLength="4" type='text' placeholder='출생년도'>
                      <option value="">선택</option>
                      <option value='1980'>1980년</option>
                      <option value='1981'>1981년</option>
                      <option value='1982'>1982년</option>
                      <option value='1983'>1983년</option>
                      <option value='1984'>1984년</option>
                      <option value='1985'>1985년</option>
                      <option value='1986'>1986년</option>
                      <option value='1987'>1987년</option>
                      <option value='1988'>1988년</option>
                      <option value='1989'>1989년</option>
                      <option value='1990'>1990년</option>
                      <option value='1991'>1991년</option>
                      <option value='1992'>1992년</option>
                      <option value='1993'>1993년</option>
                      <option value='1994'>1994년</option>
                      <option value='1995'>1995년</option>
                      <option value='1996'>1996년</option>
                      <option value='1997'>1997년</option>
                      <option value='1998'>1998년</option>
                      <option value='1999'>1999년</option>
                      <option value='2000'>2000년</option>
                      <option value='2001'>2001년</option>
                      <option value='2002'>2002년</option>
                    </select>
                    <input id='age' name='age' value={age} onChange={onChange} maxLength="2" type='number' placeholder='나이' />
                  </div>
                  <div className='postcontainer'>
                    <div>
                      <PostApi inputs={[inputs, setInputs]}/>
                    </div>
                  </div>
                  <input id='useraddrdet' name='useraddrdet' value={useraddrdet}  onChange={onChange} className='addr' placeholder='상세주소' />
                </div>
            </div>
            <div className='join-bottom'>
              <button type='submit' onClick={onSubmit}>SIGNUP</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  return <Login />
}