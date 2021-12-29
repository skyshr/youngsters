import '../css/signup.css'; 

export default function Join(){
  return(
    <>
      <div className='wrap'>
        <form className='join-container'>
          <div className='join-top'>
            <h1>JOIN</h1>
          </div>
          <div className='join-middle'>
              <div className='middle'>
                <div>
                  <input id='id' type='email' placeholder='사용할 아이디(email 형식)' />
                </div>
                <div>
                  <input id='password' type='password' placeholder='비밀번호' />
                </div>
                <div>
                  <input type='text' placeholder='이름' />
                </div>
                <div>
                  <select id='gender' placeholder='성별'>
                    <option value='male'>남자</option>
                    <option value='female'>여자</option>
                  </select>
                  <input id='age' type='number' placeholder='나이' />
                </div>
                <div>
                  <input id='addr1' placeholder='주소' />
                </div>
                <div>
                  <input id='addr2'placeholder='상세주소' />
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