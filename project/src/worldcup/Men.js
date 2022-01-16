import React, { useState, useEffect } from 'react';
import { FlexBox } from './styled';

const items = [
    {
        idkey: 1,
        src: "./img/men/m1.jpeg",
        username: "안성준"
    },
    {
        idkey: 2,
        src: "./img/men/m2.jpeg",
        username: "위성진"
    },
    {
        idkey: 3,
        src: "./img/men/m3.jpeg",
        username: "노진형"
    },
    {
        idkey: 4,
        src: "./img/men/m4.jpeg",
        username: "서기영"
    },
    {
        idkey: 5,
        src: "./img/men/m5.jpeg",
        username: "박경배"
    },
    {
        idkey: 6,
        src: "./img/men/m6.jpeg",
        username: "스테파노"
    },
    {
        idkey: 7,
        src: "./img/men/m7.jpeg",
        username: "지도일"
    },
    {
        idkey: 8,
        src: "./img/men/m8.jpeg",
        username: "Jidoil"
    },
    {   idkey: 9,
        src: "./img/men/m9.jpeg",
        username: "노진형2"
    },
    {
        idkey: 10,
        src: "./img/men/m10.jpeg",
        username: "권원현"
    },
    {
        idkey: 11,
        src: "./img/men/m11.jpeg",
        username: "김재원2"
    },
    {
        idkey: 12,
        src: "./img/men/m12.jpeg",
        username: "안성욱2"
    },
    {
        idkey: 13,
        src: "./img/men/m13.jpeg",
        username: "김민욱"
    },
    {
        idkey: 14,
        src: "./img/men/m14.jpeg",
        username: "김민욱2"
    },
    {
        idkey: 15,
        src: "./img/men/m15.jpeg",
        username: "이시은"
    },
    {
        idkey: 16,
        src: "./img/men/m16.jpeg",
        username: "김재원"
    },
    {
        idkey: 17,
        src: "./img/men/m17.jpeg",
        username: "김진경"

    },
    {
        idkey: 18,
        src: "./img/men/m18.jpeg",
        username: "박승재"
    },
    {
        idkey: 19,
        src: "./img/men/m19.jpeg",
        username: "박이삭"
    },
    {
        idkey: 20,
        src: "./img/men/m20.jpeg",
        username: "김진경2"
    },
    {
        idkey: 21,
        src: "./img/men/m21.jpeg",
        username: "안성욱"
    },
    {
        idkey: 22,
        src: "./img/men/m22.jpeg",
        username: "박태현"
    },
    {
        idkey: 23,
        src: "./img/men/m23.jpeg",
        username: "정종찬"
    },
    {
        idkey: 24,
        src: "./img/men/m24.jpeg",
        username: "정태수"
    },
    {
        idkey: 25,
        src: "./img/men/m25.jpeg",
        username: "이충현"
    },
    {
        idkey: 26,
        src: "./img/men/m26.jpeg",
        username: "위성진2"
    },
    {
        idkey: 27,
        src: "./img/men/m27.jpeg",
        username: "박승재2"
    },
    {
        idkey: 28,
        src: "./img/men/m28.jpeg",
        username: "변정현"
    },
    {
        idkey: 29,
        src: "./img/men/m29.jpeg",
        username: "전민수"
    },
    {
        idkey: 30,
        src: "./img/men/m30.jpeg",
        username: "정종찬"
    },
    {
        idkey: 31,
        src: "./img/men/m31.jpeg",
        username: "박이삭2"
    },
    {
        idkey: 32,
        src: "./img/men/m32.jpeg",
        username: "전민수2"
    },
];


export default function Men(props) {
    // const [items, setItems] = useState([])
    const [men, setMen] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState(parseInt(props.game.slice(0,2)));
    const [test, setTest] = useState(parseInt(round/2));

    console.log(props.game);

    useEffect(() => {
        // let tmp = []
        // fetch("http://localhost:3001/login", {
        //     method: "get",
        //     hedaers: {
        //         "content-type" : "application/json",
        //     }
        // })
        // .then(res => res.json())
        // .then(json => {
        //     console.log(json.result.length)
        //     for (let data of json.result) {
        //         if (data.gender=="남자") {
        //             // console.log("남자")
        //             data.src = `./img/men/${data.img}`
        //             tmp.push(data)
        //         }
        //     }
        //     setItems(tmp);
        //     // console.log(items);
        // })
        // .then(()=> {
            // items.sort(() => Math.random() - 0.5);
            // setMen(items.slice(0,round));
            // setDisplays([items[0], items[1]]);
        // })
        items.sort(() => Math.random() - 0.5);
        setMen(items.slice(0,round));
        setDisplays([items[0], items[1]]);
    }, []);

    const backtoMenu = () => {
        props.setState(true);
    }

    const reset = () => {
        items.sort(() => Math.random() - 0.5);
        setMen(items.slice(0,parseInt(props.game.slice(0,2))));
        setDisplays([items[0], items[1]]);
        setRound(parseInt(props.game.slice(0,2)));
        setTest(parseInt(props.game.slice(0,2)/2));
    }

    const chooseIdeal = (e) => {
        if (sessionStorage.getItem("gender")=="여자")
            if (window.confirm("이상형으로 등록하시겠습니까?")) {
                fetch("http://localhost:3001/ideal", {
                    method: "post",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify({"value": e.target.id,
                "idkey": sessionStorage.getItem("idkey")})
                })
                .then((res) => res.json())
                .then((json) => {
                    if (json.messages=="success") alert("등록되었습니다.");
                    else if (json.messages=="already in use") alert("이미 등록된 정보입니다.");
                    else alert("등록은 4명까지만 가능합니다.");
                })
        }
    }

    const clickHandler = mens => (event) => {
        if(men.length <= 2){
            if(winners.length === 0){
                setDisplays([mens]);
            } else{
                let updatedMen = [...winners, mens];
                setMen(updatedMen);
                setDisplays([updatedMen[0], updatedMen[1]]);
                setWinners([]);
            }
        } else if(men.length > 2){
            setWinners([...winners, mens]);
            setDisplays([men[2], men[3]]);
            setMen(men.slice(2));
            console.log(displays)
        }
        console.log(mens)
        setTest(test-1);
        // console.log(test);
        if (test-1==0) {
            if (round/2 > 2) {
                setRound(parseInt(round/2))
                setTest(round/4)
            }
            else if (round/2 == 2) {
                setRound("결승")
                setTest("결승!!!")
            }
        }

        else if (test=="결승!!!") setRound("당신의 이상형은...")
        
    };

    return <FlexBox>
        <div className="dimmed_layer_wrapper">
            <div className="full_layer">
                <div className="common_alert" style={{height: "650px"}}>
                    <button type='button' id='postCode_btn' onClick={props.onClose}>X</button>
                    {typeof(round) == "number"
                    ? <h1 className="title">{round}강</h1>
                    : <h1 className="title">{round}</h1>
                    }
                    {displays.length!=1 
                    ? 
                    displays.map(item => {
                        return <div
                            className="flex-1"
                            key={item.name}
                            onClick={clickHandler(item)}
                            >
                            <img className="imgs" src={item.src} alt="imgs" />
                            <div className="ideal-name">{item.username}</div>
                        </div>
                    })
                    :
                    <div className='winner'>
                        <div>
                            <div>
                            <img className="imgs" src={displays[0].src} alt="imgs" id={displays[0].idkey} onClick={chooseIdeal}/>
                            <div className='win-name'>{displays[0].username}</div>
                            </div>
                            <div>
                                <button className="ideal-btn" onClick={backtoMenu}>메뉴로 돌아가기</button>
                                <button className="reset-btb" onClick={reset}>다시하기</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </FlexBox>
}

