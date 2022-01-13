import React, { useState, useLayoutEffect } from 'react';
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

export default function Men() {
    const [men, setMen] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);

    useLayoutEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setMen(items);
        setDisplays([items[0], items[1]]);
    }, []);

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
        
    };

    return <FlexBox>
        <h1 className="title">이상형월드컵</h1>
        {displays.map(item => {
            return <div
                className="flex-1"
                key={item.name}
                onClick={clickHandler(item)}
                >
                <img className="imgs" src={item.src} alt="imgs"/>
            </div>
        })}
    </FlexBox>
}

