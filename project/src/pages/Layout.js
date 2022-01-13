import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react'
import '../css/layout.css';

const Layout = () => {
  // const [login, setLogin] = useState(sessionStorage.getItem('loginstatus')||"logout");
  const onClick = () => {
    sessionStorage.clear();
    // setLogin("logout");
    window.location.href = '/';
    // window.location.reload = '/';
    // props.history.push('/');
  }
  return(
    <div className='wrap'>
      <ul className='wrap-nav'>
        <li className='wrap-logo'>
          <div className='logo'>
          <Link to ="/"></Link>
          </div>
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
        <li>
          { sessionStorage.getItem("loginstatus") != "okay"
          ? <Link to ="/login">LOGIN</Link>
          : <Link to ="/" onClick = {onClick}>LOGOUT</Link>
          }
        </li>
      </ul>
      <div className='wrap-outlet'>
      <Outlet />
      </div>
    </div>
  )
}

export default Layout;