import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Join from './pages/Join';
// import Login from './pages/Login';
// import Game from './pages/Game';
// import Post from './componants/postApi'
// import Modal from './componants/modalApi'
// import ModalPage from './pages/ModalPage';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import Question5 from './Questions/Question5';
import Mypage from './Mypage/Mypage'

// const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    {/* <Game /> */}
    {/* <Join /> */}
    <Router />
    {/* <Question5 /> */}
    {/* <Mypage /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
