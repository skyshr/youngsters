import React, { useState, useEffect } from 'react';
import { FlexBox } from './styled';

const items = [
    {
        src: "./img/men/m1.jpeg"
    },
    {
        src: "./img/men/m2.jpeg"
    },
    {
        src: "./img/men/m3.jpeg"
    },
    {
        src: "./img/men/m4.jpeg"
    },
    {
        src: "./img/men/m5.jpeg"
    },
    {
        src: "./img/men/m6.jpeg"
    },
    {
        src: "./img/men/m7.jpeg"
    },
    {
        src: "./img/men/m8.jpeg"
    },
    {
        src: "./img/men/m9.jpeg"
    },
    {
        src: "./img/men/m10.jpeg"
    },
    {
        src: "./img/men/m11.jpeg"
    },
    {
        src: "./img/men/m12.jpeg"
    },
    {
        src: "./img/men/m13.jpeg"
    },
    {
        src: "./img/men/m14.jpeg"
    },
    {
        src: "./img/men/m15.jpeg"
    },
    {
        src: "./img/men/m16.jpeg"
    },
    {
        src: "./img/men/m17.jpeg"
    },
    {
        src: "./img/men/m18.jpeg"
    },
    {
        src: "./img/men/m19.jpeg"
    },
    {
        src: "./img/men/m20.jpeg"
    },
    {
        src: "./img/men/m21.jpeg"
    },
    {
        src: "./img/men/m22.jpeg"
    },
    {
        src: "./img/men/m23.jpeg"
    },
    {
        src: "./img/men/m24.jpeg"
    },
    {
        src: "./img/men/m25.jpeg"
    },
    {
        src: "./img/men/m26.jpeg"
    },
    {
        src: "./img/men/m27.jpeg"
    },
    {
        src: "./img/men/m28.jpeg"
    },
    {
        src: "./img/men/m29.jpeg"
    },
    {
        src: "./img/men/m30.jpeg"
    },
    {
        src: "./img/men/m31.jpeg"
    },
    {
        src: "./img/men/m32.jpeg"
    },
    
];

export default function Men(props) {
    const [men, setMen] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState(32);
    const [test, setTest] = useState(16);

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setMen(items);
        setDisplays([items[0], items[1]]);
    }, []);

    const chooseIdeal = () => {
        alert("이상형으로 등록되었습니다.");
    }

    const reset = () => {
        items.sort(() => Math.random() - 0.5);
        setMen(items);
        setDisplays([items[0], items[1]]);
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
                setTest("결승")
            }
        }

        else if (test=="결승") setRound("당신의 이상형은...")
        
    };

    return <FlexBox>
        <div className="dimmed_layer_wrapper">
            <div className="full_layer">
                <div className="common_alert">
                    <button type='button' id='postCode_btn' onClick={props.onClose}>X</button>
                    {typeof(round) == "number"
                    ? <h1 className="title">{round}강</h1>
                    : <h3 className="title">{round}</h3>
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
                            <img className="imgs" src={displays[0].src} alt="imgs" />
                        </div>
                        <div>
                            <button className="ideal-btn" onClick={chooseIdeal}>이상형 선택</button>
                            <button className="reset-btb" onClick={reset}>다시하기</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </FlexBox>
}

