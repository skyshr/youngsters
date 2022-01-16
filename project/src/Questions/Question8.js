import React, { useState } from 'react';
// import '../css/game.css'; 


export default function Question8(props){

    const [mbti, setMbti] = useState('')

    const {J, P} = mbti;

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
        sessionStorage.setItem("q8", e.target.value)

        props.state[1]("9");
    }

    return(
    <>
      <div className="game-content">
          <p style={{textAlign : "center", fontSize : "40px"}} className="infotext">Q. 문제가 생겼을 때 대처법은?</p>
          <div className="game">
              <div style={{textAlign : "center", fontSize : "30px", float : "left", width : "50%"}} className="type">
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
              <div style={{textAlign : "center", fontSize : "30px"}} className="type">
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