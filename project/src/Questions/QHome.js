import { useState } from 'react';
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Question7 from './Question7'
import Question8 from './Question8'
import Final from './Final'

export default function QHome(props) {
    const [state, setState] = useState("1");
    return (
        <>
            { state=="1" &&
                <Question1 state={[state, setState]}/>}
            { state=="2" &&
                <Question2 state={[state, setState]}/>}
            { state=="3" &&
                <Question3 state={[state, setState]}/>}
            { state=="4" &&
                <Question4 state={[state, setState]}/>}
            { state=="5" &&
                <Question5 state={[state, setState]}/>}    
            { state=="6" &&
                <Question6 state={[state, setState]}/>}
            { state=="7" &&
                <Question7 state={[state, setState]}/>}
            { state=="8" &&
                <Question8 state={[state, setState]}/>}
            { state=="9" &&
                <Final login={props.login}/>}
        </>
    )
}