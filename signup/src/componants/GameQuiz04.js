import React, { useState } from 'react';
import '../css/game.css'; 


export default function GameQuiz03(props){

    const [mbti, setMbti] = useState('')

    const {J, P} = mbti;

    // const onChange = (e) => {
    //     const { name, value } = e.target;

    //     setMbti(e.target.value)
    //     console.log(e.target.value)

    // }

    // const resetButton = () => {
    //     setMbti('');
    // }

    const onSubmit = (e) => {
        const mbtiList = document.getElementsByName('mbti');
        var a = "";

        for (let node of mbtiList) {
            if(node.checked){
                a = node.value;
            }
        }
        console.log(a);
        console.log(typeof(a))

        fetch("http://localhost:3001/game", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({data: a})
        })
        // .then((res)=>res.json())
        // .then((json)=> {
        //     console.log(json)
        // })

        const { name, value } = e.target;

        setMbti(e.target.value)
        console.log(e.target.value)

        localStorage.setItem("quiz4", e.target.value)
    }

    return(
    <>
      <div className="game-content">
          <p className="infotext">Q. 문제가 생겼을 때 대처법은?</p>
          <div className="game">
              <div className="type">
                  <label htmlFor="J">
                      <img id="mbti-j" alt=''/>
                      <br/> 한다면 함
                  </label><br />
                  <input
                  type="radio"
                  id='J'
                  name='mbti'
                  value="J"
                  checked={mbti === "J"}
                //   onChange={onChange}
                  onClick={onSubmit}
                  readOnly
                  />  
              </div>
              <div className="type">
                  <label htmlFor="P">
                      <img id="mbti-p" alt=''/>
                      <br/> 뭐부터 하지?
                  </label><br />
                  <input
                  type="radio"
                  id='P'
                  name='mbti'
                  value="P"
                  checked={mbti === "P"}
                //   onChange={onChange}
                  onClick={onSubmit}
                  readOnly
                  />
              </div>
          </div>
          {/* <button className="reset-btn" type="reset" onClick={resetButton}>다시 선택하기</button> */}
          {/* <button className="reset-btn" type="button" onClick={onSubmit}>선택완료</button> */}
          <div id='result'></div>
      </div>
    </>
    )
}