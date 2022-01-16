import { useEffect, useState } from "react";
import "./main.css";
import './game.css';
import Women from "../worldcup/Women";
import PopupDom from "../worldcup/PopupDom";
import PopupContent from "../worldcup/PopupContent";
import PopupImgContent from "./PopupImgcontent";


export default function Game() {
    const [ideal, setIdeal] = useState([]);
    const gender = (sessionStorage.getItem('gender')=="남자") ? "women": "men";
    const [state, setState] = useState(false);
    const [imgstate, setImgstate] = useState(false);
    const [img, setImg] = useState('');
    useEffect(()=> {
      // console.log('hi');
      fetch("http://localhost:3001/ideal",
        {
        method: "get",
        headers: {
            "content-type": "application/json",
        },
        })
        .then((res)=> res.json())
        .then((json)=> {
          console.log(json);
          let tmp = [];
          let result = [];
          for (let data of json) {
            if (data.useridkey==sessionStorage.getItem("idkey")) {
              tmp.push(Number(data.chosenidkey))
            }
          }
          console.log("tmp: " + tmp);
          fetch("http://localhost:3001/profile",
            {
            method: "get",
            headers: {
              "content-type": "application/json"
            },
          })
          .then((res) => res.json())
          .then((json1) => {
            // console.log(json1)
            for (let data of json1) {
              if (tmp.includes(Number(data.idkey))) {
                result.push(data);
              }
            }
            setIdeal(result);
          })
        })
    }, [])

    const openPopup = () => {
      setState(true);
    }

    const closePopup = () => {
      setState(false);
    }

    const openImgPopup = (e) => {
      setImg(e.target.src)
      setImgstate(true);
    }

    const closeImgPopup = () => {
      setImgstate(false);
    }

    return (
        <>
          <section className="page-section">
            <h2 className="title">이상형</h2>
            <div className="dataBox">
              {ideal.map(data => 
              <div className="ideal-container">
                <div className="img-container">
                  <img className="my-ideal-img" style={{width: "auto"}} src={`img/${gender}/${data.img}`} alt="test" onClick={openImgPopup}/>
                </div>
                <div className="ideal-info-container" style={{fontWeight: "bolder", marginTop: "16px"}}>{data.username}</div>
              </div>)
              }
              {imgstate &&
                    <PopupDom>
                        <PopupImgContent onClose={closeImgPopup} img={img}/>
                    </PopupDom>
              }
            </div>
              
            <div className="main-btn">
                <button id="popupDom" onClick={openPopup}>이상형 찾으러 가기</button>
            </div>
            {state &&
                    <PopupDom>
                        <PopupContent onClose={closePopup}/>
                    </PopupDom>
                }
          </section>
        </>
    )
}