import React, { useCallback, useEffect, useState } from "react";
import "./Chat.css";
import io from "socket.io-client";
import classnames from "classnames";
import axios from 'axios';

const socket = io.connect("http://localhost:3001");

function Chat(props) {
  // const username = "user"
  // socket.emit('room',username);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let day = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  const [nickname, setNickname] = useState(sessionStorage.getItem('username'))
  
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState([]);
  
  const chatInput = document.querySelector('.message')

  const fetchchat = async() => {
    const result = await axios.get("http://localhost:3001/chat",{
      params: {'user1' : sessionStorage.getItem("idkey"), 'user2': props.data}
    }).then(res => res.data)
    const chatmessages = document.querySelector('#chatmessages')
    console.log('here');
    let nickname = document.querySelector('#usernick').value
    console.log(result);
    console.log("nickname: "+ nickname);
    for(let i = 0; i < result.length; i++) {
      if(result[i].username === nickname) {
        let div = document.createElement('div')

        div.idx = result[i].idx
        const dbChat = `<div className="Chat" style="display: flex; justify-content: start; align-items: center; width:50%; height:5%; border:1px solid black;">
        <div className="chat-name" style="flex: 1;">${result[i].username}</div>
        <div className="chat-message" style="flex: 1;">${result[i].messages}</div>
        <div className="chat-time" style="flex: 1; font-size: 0.7rem;">${result[i].timelog}</div>
        </div>
        `
        div.innerHTML = dbChat
        chatmessages.appendChild(div)
        }
      }
};

  // useEffect(() => {
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  useEffect(() => {
    fetchchat();
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));

      console.log(message);
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  const buttonHandler = useCallback((e) => {
    // 11월에 열때는 "0" 지우고 열기
    console.log('hi');
    const timelog = year + "-" + "0" + month + "-" + day + " " + hours + ":" + minutes;
    chatInput.value = ""
    console.log(sessionStorage.getItem('idkey'));
    console.log(props.data);
    socket.emit("send message", { username: nickname, message: chat.message, timelog : timelog, 'idkey': sessionStorage.getItem('idkey'), 'value': props.data}); 
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);

  const onKeyPress = (e) => {
    if(e.key==='Enter'){
      buttonHandler();
    }
  }

  const changeMessage = useCallback(
    (e) => {
      setChat({ username: chat.name, message: e.target.value, timelog:e.target.value });
    },
    [chat]
  );

  const changeName = useCallback(
    (e) => {
      setChat({ username: e.target.value, message: chat.message, timelog: chat.time });
    },
    [chat]
  );

  const backtoMenu = () => {
    // console.log(props.data)
    // console.log(props.ideal);
    props.setState(true);
  }
  
  // const onSubmit = () => {
  //   console.log("here")
  //   const post ={
  //     pname: nickname,
  //     pmessage: setChat.message,
  //     ptime : setChat.time
  //   };

  //   console.log(post);

  //   fetch("http://localhost:3001/", {
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
  //       alert("대화가 저장되었습니다!")
  //     }
  //   })
  // }

  return (
    <div className="Appt">
      <div className="Box">
        <div className="topBarBox">
          <button id="wrap-btn-gobackhome" onClick={backtoMenu}>
          </button>
          <div id="partnerName">{sessionStorage.getItem("username")} 님</div>
          <div></div>
        </div>
        <div className="ChatBox" id="chatmessages">
          {chatArr.map((ele) => (
          <>
            <div className={classnames('Chat', {RChat : nickname == ele.username})}>
              <div className="chat-name">{ele.username}</div>
              <div className="chat-message">{ele.message}</div>
              <div className="chat-time">{ele.timelog}</div>
            </div>
            {/* <div className="Chat">
              <div className="chat-name">{ele.username}</div>
              <div className="chat-message">{ele.message}</div>
              <div className="chat-time">{ele.timelog}</div>
            </div> */}
          </>
          )
          )}
          
        </div>
        <div className="InputBox">
          <div className="wrap-input">
            {/* <input placeholder="이름" onChange={changeName}></input> */}
            <input placeholder="input message..." onChange={changeMessage} onKeyPress={onKeyPress} className="message" id="message"></input>
            <button onClick={buttonHandler} onKeyPress={onKeyPress} className="message" id="btn-message">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat