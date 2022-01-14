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
    
];

export default function Women() {
    const [women, setWomen] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setWomen(items);
        setDisplays([items[0], items[1]]);
    }, []);

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
    </FlexBox>;
}
