import React, { useState, useEffect } from 'react';
import { FlexBox } from './styled';

const items = [
    {
        src: "./img/women/w1.jpeg"
    },
    {
        src: "./img/women/w2.jpeg"
    },
    {
        src: "./img/women/w3.jpeg"
    },
    {
        src: "./img/women/w4.jpeg"
    },
    {
        src: "./img/women/w5.jpeg"
    },
    {
        src: "./img/women/w6.jpeg"
    },
    {
        src: "./img/women/w7.jpeg"
    },
    {
        src: "./img/women/w8.jpeg"
    },
    {
        src: "./img/women/w9.jpeg"
    },
    {
        src: "./img/women/w10.jpeg"
    },
    {
        src: "./img/women/w11.jpeg"
    },
    {
        src: "./img/women/w12.jpeg"
    },
    {
        src: "./img/women/w13.jpeg"
    },
    {
        src: "./img/women/w14.jpeg"
    },
    {
        src: "./img/women/w15.jpeg"
    },
    {
        src: "./img/women/w16.jpeg"
    },
    {
        src: "./img/women/w17.jpeg"
    },
    {
        src: "./img/women/w18.jpeg"
    },
    {
        src: "./img/women/w19.jpeg"
    },
    {
        src: "./img/women/w20.jpeg"
    },
    {
        src: "./img/women/w21.jpeg"
    },
    {
        src: "./img/women/w22.jpeg"
    },
    {
        src: "./img/women/w23.jpeg"
    },
    {
        src: "./img/women/w24.jpeg"
    },
    {
        src: "./img/women/w25.jpeg"
    },
    {
        src: "./img/women/w26.jpeg"
    },
    {
        src: "./img/women/w27.jpeg"
    },
    {
        src: "./img/women/w28.jpeg"
    },
    {
        src: "./img/women/w29.jpeg"
    },
    {
        src: "./img/women/w30.jpeg"
    },
    {
        src: "./img/women/w31.jpeg"
    },
    {
        src: "./img/women/w32.jpeg"
    },
    {
        src: "./img/women/w33.jpeg"
    },
    {
        src: "./img/women/w34.jpeg"
    },
    {
        src: "./img/women/w35.jpeg"
    },
    {
        src: "./img/women/w36.jpeg"
    },
    {
        src: "./img/women/w37.jpeg"
    },
    {
        src: "./img/women/w38.jpeg"
    },
    {
        src: "./img/women/w39.jpeg"
    },
    {
        src: "./img/women/w40.jpeg"
    },
];

export default function Women(props) {
    const [women, setWomen] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState(parseInt(props.game.slice(0,2)));
    const [test, setTest] = useState(parseInt(round/2));
    // console.log(typeof(round));

    console.log(props.game);
    console.log("round : " + round)
    console.log("test : " + test)
    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setWomen(items.slice(0, round));
        setDisplays([items[0], items[1]]);
    }, []);

    const backtoMenu = () => {
        props.setState(true);
    }

    const reset = () => {
        items.sort(() => Math.random() - 0.5);
        setWomen(items.slice(0, round));
        setDisplays([items[0], items[1]]);
    }

    const chooseIdeal = () => {
        
    }

    const clickHandler = wom => (event) => {
        if(women.length <= 2){
            if(winners.length === 0){
                setDisplays([wom]);
            } else{
                let updatedWomen = [...winners, wom];
                setWomen(updatedWomen);
                setDisplays([updatedWomen[0], updatedWomen[1]]);
                setWinners([]);
            }
        } else if(women.length > 2){
            setWinners([...winners, wom]);
            setDisplays([women[2], women[3]]);
            setWomen(women.slice(2));
            console.log(displays)
        }
        console.log(wom)
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
                                <img className="imgs" src={item.src} alt="imgs"/>
                            </div>
                        })
                        :
                        <div className='winner'>
                            <div>
                                <img className="imgs" src={displays[0].src} alt="imgs" onClick={chooseIdeal}/>
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
    </FlexBox>;
}
