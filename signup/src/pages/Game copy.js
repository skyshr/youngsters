import React, { useState } from 'react';
import '../css/game.css'; 


export default function Game(){

    const [gender, setGender] = useState('')

    const {male, female} = gender;

    const onChange = (e) => {
        const { name, value } = e.target;

        setGender(e.target.value)
        // console.log(e.target.value)
    }

    const resetButton = () => {
        setGender('');
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
            <p className="infotext">Q.문제가 생겼을 때 당신의 대처법은?</p>
            <div className="game">
                <div className="type">
                    <label htmlFor="male"><img alt=''/></label><br />
                    <input
                    type="radio"
                    id='male'
                    name='gender'
                    value="male"
                    checked={gender === "male"}
                    onChange={onChange}
                    />  
                </div>
                <div className="type">
                    <label htmlFor="female"><img alt=''/></label><br />
                    <input
                    type="radio"
                    id='female'
                    name='gender'
                    value="female"
                    checked={gender === "female"}
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