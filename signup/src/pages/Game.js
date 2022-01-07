import React, { useState } from 'react';
import '../css/game.css'; 


export default function Game(){

    const [mbti, setMbti] = useState('')

    const {E, I} = mbti;

    const onChange = (e) => {
        const { name, value } = e.target;

        setMbti(e.target.value)
        console.log(e.target.value)
    }

    const resetButton = () => {
        setMbti('');
    }

    const onSubmit = () => {
        const genderList = document.getElementsByName('gender');
        var a = "";

        for (let node of genderList) {
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
    }

    return(
    <>
    <div className="wrap-game">
    <div className="game-container">
        <div className="game-content">
            <p className="infotext">Q1.문제가 생겼을 때 대처법은?</p>
            <div className="game">
                <div className="type">
                    <label htmlFor="E">
                        <img id="mbti-e" alt=''/>
                        <br/> 말이 많아짐
                    </label><br />
                    <input
                    type="radio"
                    id='E'
                    name='gender'
                    value="E"
                    checked={mbti === "E"}
                    onChange={onChange}
                    />  
                </div>
                <div className="type">
                    <label htmlFor="I">
                        <img id="mbti-i" alt=''/>
                        <br/> 생각이 많아짐
                    </label><br />
                    <input
                    type="radio"
                    id='I'
                    name='gender'
                    value="I"
                    checked={mbti === "I"}
                    onChange={onChange}
                    />
                </div>
            </div>
            <button className="reset-btn" type="reset" onClick={resetButton}>다시 선택하기</button>
            <button className="reset-btn" type="button" onClick={onSubmit}>선택완료</button>
            <div id='result'></div>
        </div>
    </div>
    </div>
    </>
    )
}