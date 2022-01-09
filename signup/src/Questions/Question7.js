import React, { useState } from 'react';
import '../css/game.css'; 


export default function Question7(props){

    const [mbti, setMbti] = useState('')

    const {F, T} = mbti;

    // const onChange = (e) => {
    //     const { name, value } = e.target;

    //     setMbti(e.target.value)
    //     console.log(e.target.value)

    //     props.state[1]("4");
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

        // fetch("http://localhost:3001/game", {
        //     method : "post",
        //     headers : {
        //         "content-type" : "application/json"
        //     },
        //     body : JSON.stringify({data: a})
        // })
        // .then((res)=>res.json())
        // .then((json)=> {
        //     console.log(json)
        // })

        const { name, value } = e.target;

        setMbti(e.target.value)
        console.log(e.target.value)

        // localStorage.setItem("quiz3", e.target.value)

        props.state[1]("8");
    }

    return(
    <>
      <div className="game-content">
          <p className="infotext">Q. 문제가 생겼을 때 대처법은?</p>
          <div className="game">
              <div className="type">
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
                  readOnly
                  />  
              </div>
              <div className="type">
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