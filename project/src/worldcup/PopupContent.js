import React, {useState} from 'react';
import Women from './Women';
import Men from './Men';
 
export default function PopupContent(props){
    const [game, setGame] = useState();
    const [state, setState] = useState(true);
    const onClick = () => {
        let tmp = document.getElementById('ideal');
        // console.log(tmp.value);
        setGame(tmp.value)
        setState(false);

    }

    if (state)
        return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
                        <h2>이상형 월드컵</h2>
                        <select id="ideal" name="ideal" placeholder='이상형 월드컵'>
                            <option value="">선택</option>
                            <option value="32w">32강 여자</option>
                            <option value="16w">16강 여자</option>
                            <option value="32m">32강 남자</option>
                            <option value="16m">16강 남자</option>
                        </select>

                        <button onClick={onClick}>submit</button>
                        <div>This is Popup Body</div>
                        <div>
                            <button type="button" onClick={props.onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    else {
        if (game.endsWith('m')) return <Men onClose={props.onClose}/>
        return (
            <Women onClose={props.onClose}/>
        )
    }
}
 