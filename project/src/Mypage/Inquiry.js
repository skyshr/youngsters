import { useEffect, useState, useLayoutEffect } from "react";
import "./main.css"

export default function Inquiry() {
  const tlqkf = {
    color: "pink",
  }
  const [state, setState] = useState(""
  )

  const [check, setCheck] = useState(true);

  const [inputs, setInputs] = useState({
    num: "",
    title : "",
    message : "",
    sessionname: sessionStorage.getItem('username'),
})

  const {title, message} = inputs

  const handler = e => {
      const {value, name} = e.target
      setInputs ({
          ...inputs,
          [name]: value,
      })
  }

  useLayoutEffect(
    () => {
        fetch("http://localhost:3001/inquiry", 
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
        let tmp = []
        for (let data of json) {
          if (data.name == sessionStorage.getItem('username')) {
            tmp.push(data)
          }
        }
        setState(tmp)
    })
    
    }, []
  ) 

  const onClick = (e) => {
    setInputs({
      num: e.target.id,
      title: e.target.innerHTML,
      message: e.target.value,
      sessionname: sessionStorage.getItem('username')
    })
    setCheck(false)
  }

  const btnClick = () => {

    if (title === "") inputs.title = state.title;
    if (message === "") inputs.message = state.message;

    console.log(inputs);

    fetch("http://localhost:3001/inquiry", 
        {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(inputs)
    })

    .then(()=> {
        console.log('1')
        setState(inputs);
    }).then(() => {
        console.log('2')
        setInputs({
            title : "",
            message : "",
            sessionid: sessionStorage.getItem("idkey"),
        })
    }).then(()=>{
        console.log('3')
        setCheck(true)
    })
    
  }


  if(check){
      return (
        <div className = "inDiv">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12" id = "test">
                <h1>문의확인</h1>
                  {state != "" 
                   ? state.map(val =>
                      <div>
                        <div className="col-md-12">
                          <fieldset>
                            <p className = "deInput" id = {val.num} value={val.message} style={{cursor: "pointer"}} onClick={onClick}>{val.title}</p>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <p>{val.message}</p>
                          </fieldset>
                        </div>
                      </div>
                    )
                    : 
                    <div>
                      <div className="col-md-12">
                        <fieldset>
                          <p className = "deInput">{inputs.title}</p>
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <p>{inputs.message}</p>
                        </fieldset>
                      </div>
                    </div>
                    }
              <div className="col-md-12">
                  {/* <button className = "prbtn" onClick = {onClick} type="button">
                    수정하기
                  </button> */}
              </div>
            </div>
            </div>
        </div>
      </div>
      )
  }else {
    return (
      <div className = "inDiv">
        <div className="col-md-6">
        <form id="contact" action="" method="post">
          <div className="row">
            <div className="col-md-12" id = "test">
              <h1>문의확인</h1>

            <div className="col-md-12">
              <fieldset>
                <input style = {tlqkf} name="title" value = {title} type="text" placeholder = {state.title} onChange = {handler}/>
              </fieldset>
            </div>
            <div className="col-md-12">
              <fieldset>
                <textarea style = {tlqkf} name="message" rows="6" value = {message} placeholder = {state.message} onChange = {handler}></textarea>
              </fieldset>
            </div>
            
            <div className="col-md-12">
              <fieldset>
                <button className = "prbtn"  type="button" onClick = {btnClick}>
                  저장하기
                </button>
              </fieldset>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}