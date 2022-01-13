import { useEffect, useState } from "react";
import "./main.css";
import React from "react";

export default function Game() {
  const [state, setState] = useState({
    color: "",
    movies: "",
    music: "",
    food: "",
    characters: "",
    sessionid: "",
  })

const [check, setCheck] = useState(true);

const [inputs, setInputs] = useState({
  color: "",
  movies: "",
  music: "",
  food: "",
  characters: "",
  sessionid: sessionStorage.getItem('idkey'),
})

const {color, movies, music, food, characters} = inputs

const handler = e => {
    const {value, name} = e.target
    setInputs ({
        ...inputs,
        [name]: value,
    })
}

useEffect(
    () => {
        fetch("http://localhost:3001/game", 
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        console.log('idkey: ' + sessionStorage.getItem('idkey'));
        for (let data of json) {
          if (data.idkey == sessionStorage.getItem('idkey')) {
            setState(data)
          }
        }
    })
    
    }, []
) 

const onClick = () => {
    setCheck(false)
}

const btnClick = () => {

    if (color === "") inputs.color = state.color;
    if (movies === "") inputs.movies = state.movies;
    if (music === "") inputs.music = state.music;
    if (food === "") inputs.food = state.food;
    if (characters === "") inputs.characters = state.characters;
    // inputs.sessionid = state.sessionid;
    console.log(inputs);

    fetch("http://localhost:3001/details", 
        {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(inputs)
    })

    .then(()=> {
        console.log('1')
        // state.sessionid = inputs.idkey;
        setState(inputs);
    }).then(() => {
        console.log('2')
        setInputs({
            color: "",
            movies: "",
            music: "",
            food: "",
            characters: "",
            sessionid: sessionStorage.getItem("idkey")
        })
    }).then(()=>{
        console.log('3')
        setCheck(true)
    })
    
}

  if(check){
    return (
      <div className="col-md-6">
      <div className="left-content">
        <div className = "gaDiv">
            <h2>이상형</h2>
            <h1 className = "gaText">
              색깔
              <br/>
              <p className = "gaInput">{state.color}</p>
            </h1>
            
            <h1 className = "gaText">
              영화
              <br/>
              <p className = "gaInput">{state.movies}</p>
            </h1>
            
            <h1 className = "gaText">
              음악
              <br/>
              <p className = "gaInput">{state.music}</p>
            </h1>
            
            <h1 className = "gaText">
              음식
              <br/>
              <p className = "gaInput">{state.food}</p>
            </h1>
            
            <h1 className = "gaText">
              캐릭터
              <br/>
              <p className = "gaInput">{state.characters}</p>
            </h1>
            
          <div className="main-btn">
              <button className="prbtn" type="button" onClick={onClick}>수정하기</button>
          </div>
          </div>
      </div>
  </div>
    )
}else {
  return(
    <div className="col-md-6">
    <div className="left-content">
      <div className = "gaDiv">
          <h2>이상형</h2>
          <h1 className = "gaText">
            색깔
            <br/>
            <input className = "gaInput" name="color" type="text" placeholder={state.color} onChange={handler} />
          </h1>
          
          <h1 className = "gaText">
            영화
            <br/>
            <input className = "gaInput" name="movies" type="text" placeholder={state.movies} onChange={handler} />
          </h1>
          
          <h1 className = "gaText">
            음악
            <br/>
            <input className = "gaInput" name="music" type="text" placeholder={state.music} onChange={handler} />
          </h1>
          
          <h1 className = "gaText">
            음식
            <br/>
            <input className = "gaInput" name="food" type="text" placeholder={state.food} onChange={handler} />
          </h1>
          
          <h1 className = "gaText">
            캐릭터
            <br/>
            <input className = "gaInput" name="characters" type="text" placeholder={state.characters} onChange={handler} />
          </h1>
          
        <div className="main-btn">
            <button className="prbtn" type="button" onClick={btnClick}>수정하기</button>
        </div>
        </div>
    </div>
</div>
  )
}
}