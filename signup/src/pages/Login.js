import '../css/signup.css'; 

export default function Login(){
  return(
    <>
      <div className='wrap'>
        <div className='login-container'>
          <form className='wrap-login'>
            <div className='login-top'>
              <h1>LOGIN</h1>
            </div>
            <div className='login-middle'>
              <div className='middle'>
                <input type='email' placeholder='아이디 또는 이메일'></input>
                <input type='password' placeholder='비밀번호'></input>
                <button className='login-button'>LOGIN</button>
              </div>
            </div>
            <div className='login-bottom'>
              <div className='bottom'> 
                <div className='click-signup'><a href="#">회원가입</a></div>
                <div className='click-forgotID'><a href="#">아이디찾기</a></div>
                <div className='click-forgotPW'><a href="#">비밀번호 찾기</a></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}