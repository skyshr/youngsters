import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react'
import '../css/layout.css';
import PopupDom from '../chat/PopupDom';
import ChatMain from '../chat/ChatMain';

const Layout = () => {
  // const [login, setLogin] = useState(sessionStorage.getItem('loginstatus')||"logout");
  const [state, setState] = useState(false)
  const onClick = () => {
    sessionStorage.clear();
    // setLogin("logout");
    window.location.href = '/';
    // window.location.reload = '/';
    // props.history.push('/');
  }

  // var sessonname = sessionStorage.getItem("name");

  const chatPopup = () => {
    setState(!state)
  }

  return(
    <div className='wrap'>
      <ul className='wrap-nav'>
        <li className='wrap-logo'>
          <Link to ="/">
            <div className='logo'/>
          </Link>
        </li>
        <li>
          <Link to ="/">HOME</Link>
        </li>
        { sessionStorage.getItem("loginstatus") == "okay" && 
          <li>
            <Link to ="/board">BOARD</Link>
          </li>
        }
        <li>
        { sessionStorage.getItem("loginstatus") == "okay" 
        ?
          <Link to ="/mypage" 
          onClick={() => {
          // setTest("mypage")
          }}>MYPAGE</Link>
        : 
          <Link to ='/signup'>SIGNUP</Link>
        }
        </li>
        <li id='user-container'>
          { sessionStorage.getItem("loginstatus") != "okay"
          ? <Link to ="/login">LOGIN</Link>
          : <>
            <Link to="/mypage"><p id='userwellcome'>안녕하세요 {sessionStorage.getItem("username")} 님</p></Link>
            {/* <Link to="/chat"><div id='chat'></div></Link> */}
            <div id='chat' style={{cursor: "pointer"}} onClick={chatPopup} className='chat-link'></div>
            <Link id='userlogout' to ="/" onClick = {onClick}>
            <div id='logout'></div>
            </Link>
            </>
          }
        </li>
      </ul>
      <div className='wrap-outlet'>
        <Outlet />
      </div>
      {state && 
          <PopupDom>
            <ChatMain />
          </PopupDom>  
        }
      {/* <Outlet /> */}
    </div>
  )
}

export default Layout;