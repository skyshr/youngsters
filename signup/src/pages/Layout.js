import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react'
import './nav.css';

const Layout = () => {
  const [login, setLogin] = useState();
  const onClick = () => {
    sessionStorage.setItem("loginstatus", "logout")
    setLogin("logout");
    // window.location.href = '/'
    // window.location.reload = '/';
    // props.history.push('/');
  }
  return(
    <>
      <nav style={{top: "3%"}}>
        <ul>
          <li className='test'>
            <Link to ="/">Home</Link>
          </li>
          <li className='test'>
            { sessionStorage.getItem("loginstatus") != "okay"
            ? <Link to ="/join">Signup</Link>
            : <Link to ="/mypage">Mypage</Link>
            }
          </li>
          <li className='test'>
            { sessionStorage.getItem("loginstatus") != "okay"
            ? <Link to ="/login">Login</Link>
            : <Link to ="/" onClick = {onClick}>Logout</Link>
            }
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;