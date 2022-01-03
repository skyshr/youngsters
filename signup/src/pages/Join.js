import '../css/signup.css'; 
import React, { useState } from 'react';
import PostApi from '../componants/postApi';
import PopupPostCode from '../componants/PopupPostCode';

export default function Join(){
  const [inputage, setInputAge] = useState({
    age : '' + '세',
    year : '2002'
  });

  const {age, year} = inputage;

  const date = new Date()
  const yyyy = date.getFullYear()+1;
  const resultAge = (yyyy-year);

  const onChange = (e) =>{
    const { value, name } = e.target;
    setInputAge({
      ...inputage,
      [name] : value
    })
  }

    return(
    <>
      <div className='wrap'>
        <form action='post' className='join-container'>
          <div className='join-top'>
            <h1>JOIN</h1>
          </div>
          <div className='join-middle'>
              <div className='middle'>
                <div>
                  <input id='id' type='email' placeholder='사용할 아이디(email 형식)' />
                </div>
                <div>
                  <input id='password' type='password' minLength="4" placeholder='비밀번호 (4자리 이상)' />
                </div>
                <div>
                  <input type='text' placeholder='이름' />
                </div>
                <div>
                  <select id='gender' placeholder='성별'>
                    <option value='male'>남자</option>
                    <option value='female'>여자</option>
                  </select>
                  <select id='year' name='year' value={year} onChange={onChange} maxLength="4" type='text' placeholder='출생년도'>
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
                  <input id='age' name='age' value={resultAge+'세'} onChange={onChange} maxLength="2" type='text' placeholder='나이' />
                </div>
                <div className='postcontainer'>
                  <PostApi />
                </div>
              </div>
          </div>
          <div className='join-bottom'>
            <button type='submit'>JOIN</button>
          </div>
        </form>
      </div>
    </>
  )
}