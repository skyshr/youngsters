import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Join from './pages/Join';
import Login from './pages/Login';
import GameContainer from './pages/GameContainer';
// import Counter from'./pages/Counter';
// import PersistentCounter from './pages/PersistentCounter';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <GameContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
