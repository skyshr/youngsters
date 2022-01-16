import { useEffect, useState } from "react";
import Chat from "./Chat";
import './ChatMain.css'

export default function ChatMain() {
    const [ideal, setIdeal] = useState([]);
    const [data, setData] = useState('')
    const [state, setState] = useState(true);
    const gender = (sessionStorage.getItem('gender')=="남자") ? "women": "men";
    useEffect(() => {
        fetch("http://localhost:3001/ideal",
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },
        })
        .then((res)=> res.json())
        .then((json)=> {
          console.log(json);
          let tmp = [];
          let result = [];
          for (let data of json) {
            if (data.useridkey==sessionStorage.getItem("idkey")) {
              tmp.push(Number(data.chosenidkey))
            }
          }
          console.log("tmp: " + tmp);
          fetch("http://localhost:3001/profile",
            {
            method: "get",
            headers: {
              "content-type": "application/json"
            },
          })
          .then((res) => res.json())
          .then((json1) => {
            // console.log(json1)
            for (let data of json1) {
              if (tmp.includes(Number(data.idkey))) {
                result.push(data);
              }
            }
            setIdeal(result);
          })
        })
    }, [])

    const onClick = (e) => {
      console.log(e.target.id)
      setData(e.target.id)
      setState(false);
    }

    if (state)
      return (
          <div>
              {/* <div className="chat-mainbox"> */}
                  <div className="Chat">
                    <h3 className="title">chat</h3>
                      {ideal.map(data => 
                      <div className="ideal-box">
                          <div className="img-box">
                            <img className="my-ideal-img" src={`img/${gender}/${data.img}`} id={data.idkey} onClick={onClick} alt="test" />
                            {/* <button className="chat-btn">대화하기</button> */}
                          </div>
                          <div className="ideal-info-box">{data.username}</div>
                      </div>)
                      }
                  </div>
              {/* </div> */}
          </div>
      )
    
    else {
      return <Chat ideal={ideal} data={data} setState={setState}/>
    }
}