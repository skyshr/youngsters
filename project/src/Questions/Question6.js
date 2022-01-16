import React, { useState } from 'react';
// import '../css/game.css'; 


export default function Question6(props){

    const [mbti, setMbti] = useState('')

    const {S, N} = mbti;

    // const onChange = (e) => {
    //     const { name, value } = e.target;

    //     setMbti(e.target.value)
    //     console.log(e.target.value)

    //     props.state[1]("3");
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

        const { name, value } = e.target;

        setMbti(e.target.value)
        console.log(e.target.value)

        sessionStorage.setItem("q6", e.target.value)

        props.state[1]("7");
    }

    return(
    <>
      <div className="game-content">
          <p style={{textAlign : "center", fontSize : "60px", fontWeight: "bold", color: "red"}} className="infotext">Q. 문제가 생겼을 때 대처법은?</p>
          <div className="game">
              <div style={{textAlign : "center", fontSize : "50px", fontWeight: "bold", float : "left", width : "50%"}} className="type">
                  <label htmlFor="S">
                      <img id="mbti-s" alt=''/>
                      <br/> 그냥 그런가 보다
                  </label><br />
                  <input
                  type="radio"
                  id='S'
                  name='mbti'
                  value="S"
                  checked={mbti === "S"}
                //   onChange={onChange}
                  onClick={onSubmit}
                  className="question-imgs"
                  readOnly
                  />  
              </div>
              <div style={{textAlign : "center", fontSize : "50px", fontWeight: "bold"}} className="type">
                  <label htmlFor="N">
                      <img id="mbti-n" alt=''/>
                      <br/> 어떻게 그럴 수 있지
                  </label><br />
                  <input
                  type="radio"
                  id='N'
                  name='mbti'
                  value="N"
                  checked={mbti === "N"}
                //   onChange={onChange}
                  onClick={onSubmit}
                  className="question-imgs"
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