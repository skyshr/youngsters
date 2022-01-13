import { useEffect, useState } from 'react'
import QHome from '../Questions/QHome';
import Match from '../sky/Match';
// import Test from '../Questions/Test';

export default function Home(){
  const [login, setLogin] = useState(false);
  // console.log("login:" + login);

  useEffect(()=> {
    if (sessionStorage.getItem("loginstatus")=="okay") {
      setLogin(true);
    }
    else setLogin(false)
  }, [])
  return(
    <>
      <h1 style={{marginTop:"5%"}}>Home</h1>
        {login
        ? <Match /> 
        : <QHome login={setLogin}/>}
    </>
  )
}