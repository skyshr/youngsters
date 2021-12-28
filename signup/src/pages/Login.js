import '../css/signup.css'; 

export default function Login(){
  return(
    <>
      <div className='wrap'>
        <div className='login-container'>
          <div className='wrap-login'>
            <div className='login-top'>
              <h1>LOGIN</h1>
            </div>
            <div className='login-middle'>
              <form className='middle'>
                <input placeholder='아이디 또는 이메일'></input>
                <input placeholder='비밀번호'></input>
                <button>LOGIN</button>
              </form>
            </div>
            <div className='login-bottom'>
              <div className='bottom'>
                <div className='click-signup'>회원가입</div>
                <div className='click-forgotID'>아이디찾기</div>
                <div className='click-forgotPW'>비밀번호 찾기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}