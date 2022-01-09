import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react'
import './nav.css';

const Layout = ({setTest}) => {
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
      <div style={{position: "absolute", top: "3%", backgroundColor: "purple", width: "100%", height: "4%"}}>
        <ul style={{display: "inline"}}>
          <li className='test'>
            <Link to ="/">Home</Link>
          </li>
          { sessionStorage.getItem("loginstatus") == "okay" && 
            <li className='test'>
              <Link to ="/board">Board</Link>
            </li>
          }
          <li className='test'>
            { sessionStorage.getItem("loginstatus") != "okay"
            ? <Link to ="/join">Signup</Link>
            : <Link to ="/mypage" 
            onClick={() => {
              setTest("mypage")
            }}>Mypage</Link>
            }
          </li>
          <li className='test'>
            { sessionStorage.getItem("loginstatus") != "okay"
            ? <Link to ="/login">Login</Link>
            : <Link to ="/" onClick = {onClick}>Logout</Link>
            }
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Layout;