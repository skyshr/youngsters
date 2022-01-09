import { useEffect, useState } from 'react'
import QHome from '../Questions/QHome';
import Test from '../Questions/Test';

export default function Home(){
  const [done, setDone] = useState(false);
  // console.log("login:" + login);

  useEffect(()=> {
    if (sessionStorage.getItem("done")=="okay") {
      setDone(true);
    }
    else setDone(false)
  }, [])
  return(
    <>
      <h1 style={{marginTop:"5%"}}>Home</h1>
        {done
        ? <Test /> 
        : <QHome done={setDone}/>}
    </>
  )
}