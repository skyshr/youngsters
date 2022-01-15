import React, { useState, useEffect } from 'react';
import { FlexBox } from './styled';

const items = [
    {
        idkey: 1,
        src: "./img/men/m1.jpeg"
    },
    {
        idkey: 2,
        src: "./img/men/m2.jpeg"
    },
    {
        idkey: 3,
        src: "./img/men/m3.jpeg"
    },
    {
        idkey: 4,
        src: "./img/men/m4.jpeg"
    },
    {
        idkey: 5,
        src: "./img/men/m5.jpeg"
    },
    {
        idkey: 6,
        src: "./img/men/m6.jpeg"
    },
    {
        idkey: 7,
        src: "./img/men/m7.jpeg"
    },
    {
        idkey: 8,
        src: "./img/men/m8.jpeg"
    },
    {   idkey: 9,
        src: "./img/men/m9.jpeg"
    },
    {
        idkey: 10,
        src: "./img/men/m10.jpeg"
    },
    {
        idkey: 11,
        src: "./img/men/m11.jpeg"
    },
    {
        idkey: 12,
        src: "./img/men/m12.jpeg"
    },
    {
        idkey: 13,
        src: "./img/men/m13.jpeg"
    },
    {
        idkey: 14,
        src: "./img/men/m14.jpeg"
    },
    {
        idkey: 15,
        src: "./img/men/m15.jpeg"
    },
    {
        idkey: 16,
        src: "./img/men/m16.jpeg"
    },
    {
        idkey: 17,
        src: "./img/men/m17.jpeg"
    },
    {
        idkey: 18,
        src: "./img/men/m18.jpeg"
    },
    {
        idkey: 19,
        src: "./img/men/m19.jpeg"
    },
    {
        idkey: 20,
        src: "./img/men/m20.jpeg"
    },
    {
        idkey: 21,
        src: "./img/men/m21.jpeg"
    },
    {
        idkey: 22,
        src: "./img/men/m22.jpeg"
    },
    {
        idkey: 23,
        src: "./img/men/m23.jpeg"
    },
    {
        idkey: 24,
        src: "./img/men/m24.jpeg"
    },
    {
        idkey: 25,
        src: "./img/men/m25.jpeg"
    },
    {
        idkey: 26,
        src: "./img/men/m26.jpeg"
    },
    {
        idkey: 27,
        src: "./img/men/m27.jpeg"
    },
    {
        idkey: 28,
        src: "./img/men/m28.jpeg"
    },
    {
        idkey: 29,
        src: "./img/men/m29.jpeg"
    },
    {
        idkey: 30,
        src: "./img/men/m30.jpeg"
    },
    {
        idkey: 31,
        src: "./img/men/m31.jpeg"
    },
    {
        idkey: 32,
        src: "./img/men/m32.jpeg"
    },
    {
        idkey: 33,
        src: "./img/men/m33.jpeg"
    },
    {
        idkey: 34,
        src: "./img/men/m34.jpeg"
    },
    {
        idkey: 35,
        src: "./img/men/m35.jpeg"
    },
    {
        idkey: 36,
        src: "./img/men/m36.jpeg"
    },
    {
        idkey: 37,
        src: "./img/men/m37.jpeg"
    },
    {
        idkey: 38,
        src: "./img/men/m38.jpeg"
    },
    {
        idkey: 39,
        src: "./img/men/m39.jpeg"
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
        setMen(items.slice(0,round));
        setDisplays([items[0], items[1]]);
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
                <div className="common_alert">
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
                        </div>
                    })
                    :
                    <div className='winner'>
                        <div>
                            <img className="imgs" src={displays[0].src} alt="imgs" id={displays[0].idkey} onClick={chooseIdeal}/>
                        </div>
                        <div>
                            <button className="ideal-btn" onClick={backtoMenu}>메뉴로 돌아가기</button>
                            <button className="reset-btb" onClick={reset}>다시하기</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </FlexBox>
}

