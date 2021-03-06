import React, { useState } from 'react';
// import '../css/game.css'; 


export default function Question7(props){

    const [mbti, setMbti] = useState('')

    const {F, T} = mbti;

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

        sessionStorage.setItem("q7", e.target.value)

        props.state[1]("8");
    }

    return(
    <>
    <div className='Q1B'>
      <div className="game-content">
          <p style={{textAlign : "center", fontSize : "60px", fontWeight: "bold", color: "red"}} className="infotext">Q. 문제가 생겼을 때 대처법은?</p>
          <div className="game">
              <div style={{textAlign : "center", fontSize : "50px", float : "left", width : "50%"}} className="type">
                  <label htmlFor="F">
                      <img id="mbti-f" alt=''/>
                      <br/> 이해가 안 되는데 공감은 감
                  </label><br />
                  <input
                  type="radio"
                  id='F'
                  name='mbti'
                  value="F"
                  checked={mbti === "F"}
                //   onChange={onChange}
                  onClick={onSubmit}
                  className="question-imgs"
                  readOnly
                  />  
              </div>
              <div style={{textAlign : "center", fontSize : "50px"}} className="type">
                  <label htmlFor="T">
                      <img id="mbti-t" alt=''/>
                      <br/> 이해가 되어야 공감을 하든 말든
                  </label><br />
                  <input
                  type="radio"
                  id='T'
                  name='mbti'
                  value="T"
                  checked={mbti === "T"}
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
      </div>
    </>
    )
}