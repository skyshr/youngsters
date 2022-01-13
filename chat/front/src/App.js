import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import classnames from "classnames";

const socket = io.connect("http://localhost:3000");
// socket.emit("init", { name: "user" });

function App() {   
  // const username = "user"
  // socket.emit('room',username);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let day = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "", time: ""});
  
  const chatInput = document.querySelector('.message')

  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));

      console.log(message);
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  const buttonHandler = useCallback((e) => {
    const timelog = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
    socket.emit("send message", { name: chat.name, message: chat.message, time : timelog}); 
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);

  const onKeyPress = (e) => {
    if(e.key==='Enter'){
      buttonHandler();
      chatInput.value = ""
    }
    const timelog = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

    // const post = {
    //   pname : chat.name,
    //   pmessage : chat.message,
    //   ptime : timelog
    // }

    // console.log(post);

    // fetch("http://localhost:3001/chat", {
    //   method : "post",
    //   headers : {
    //     "content-type" : "application/json"
    //   },
    //   body : JSON.stringify(post)
    // })
    // .then((res)=> res.json())
    // .then((json)=>{
    //   console.log(json);
    //   if (json) {
    //     alert("회원 가입 성공!")
    //     setChat(!setChat);
    //   }
    //   else alert("중복된 아이디입니다")
    // })
  }  


  const changeMessage = useCallback(
    (e) => {
      setChat({ name: chat.name, message: e.target.value, time:e.target.value });
    },
    [chat]
  );

  const changeName = useCallback(
    (e) => {
      setChat({ name: e.target.value, message: chat.message, time: chat.time });
    },
    [chat]
  );

  // const onSubmit=()=>{

  //   const post = {
  //     pname : chat.name,
  //     pmessage : chat.message,
  //     ptime : chat.time
  //   }

  //   console.log(post);
    
  //   fetch("http://localhost:3001/signup", {
  //     method : "post",
  //     headers : {
  //       "content-type" : "application/json"
  //     },
  //     body : JSON.stringify(post)
  //   })
  //   .then((res)=> res.json())
  //   .then((json)=>{
  //     console.log(json);
  //     if (json) {
  //       alert("회원 가입 성공!")
  //       setChat(!setChat);
  //     }
  //     else alert("중복된 아이디입니다")
  //   })
  // }  

  return (
    <div className="App">
      <div className="Box">
        <div className="ChatBox">
          {chatArr.map((ele) => (
            <>
              <div className={classnames('Chat', {RChat : chat.name !== ele.name})}>
                <div className="chat-name">{ele.name}</div>
                <div className="chat-message">{ele.message}</div>
                <div className="chat-time">{ele.time}</div>
              </div>
              {/* <div className="Chat">
                <div className="chat-name">{ele.name}</div>
                <div className="chat-message">{ele.message}</div>
                <div className="chat-time">{ele.time}</div>
              </div> */}
            </>
          ))}
          
        </div>
        <div className="InputBox">
          <input placeholder="이름" onChange={changeName}></input>
          <input placeholder="내용" onChange={changeMessage} onKeyPress={onKeyPress} className="message"></input>
          <button onClick={buttonHandler} onKeyPress={onKeyPress} className="message">등록</button>
        </div>
      </div>
    </div>
  );
}

export default App;