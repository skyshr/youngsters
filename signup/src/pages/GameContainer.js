import React, { useState } from 'react';
import GameQuiz01 from '../componants/GameQuiz01';
import GameQuiz02 from '../componants/GameQuiz02';
import GameQuiz03 from '../componants/GameQuiz03';
import GameQuiz04 from '../componants/GameQuiz04';
import '../css/game.css'; 


export default function GameContainer(){
    const [state, setState] = useState("1")

    return(
    <>
    <div className="wrap-game">
        <div className="game-container">
            {state == "1" &&
            <GameQuiz01 state={[state, setState]} />
            }
            {state == "2" &&
            <GameQuiz02 state={[state, setState]} />
            }
            {state == "3" &&
            <GameQuiz03 state={[state, setState]} />
            }
            {state == "4" &&
            <GameQuiz04 />
            }
        </div>
    </div>
    </>
    )
}