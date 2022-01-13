import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Join from './pages/Join';
import Login from './pages/Login';
import GameContainer from './pages/GameContainer';
// import Counter from'./pages/Counter';
// import PersistentCounter from './pages/PersistentCounter';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import Question5 from './Questions/Question5';
import Mypage from './Mypage/Mypage'

// const store = createStore()

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Join />
=======
    {/* <Game /> */}
    {/* <Join /> */}
    <Router />
    {/* <Question5 /> */}
    {/* <Mypage /> */}
>>>>>>> c80a2edb02214fd27cceba2c198ea74c91701f83
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
