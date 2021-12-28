import '../css/signup.css'; 

export default function Join(){
  return(
    <>
      <div className='wrap'>
        <div className='join-container'>
          <div className='join-top'>
            <h1>JOIN</h1>
          </div>
          <div className='join-middle'>
              <form className='middle'>
                <input placeholder='사용할 아이디'></input>
                <input placeholder='비밀번호'></input>
                <input placeholder='이름'></input>
                <input placeholder='성별'></input>
                <input placeholder='나이'></input>
                <input placeholder='우편번호'></input>
                <input placeholder='주소'></input>
                <input placeholder='상세주소'></input>
              </form>
          </div>
          <div className='join-bottom'>
          <button>JOIN</button>
          </div>
        </div>
      </div>
    </>
  )
}