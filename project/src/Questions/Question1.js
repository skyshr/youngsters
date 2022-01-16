export default function Question1(props) {
    // console.log('state: ' + props.state[0]);
    let path = './img/movie/'
    let arr = ['avatar.jpg','avengers_endgame.jpg','notebook.jpg','suspect_X.jpg','wnsorry.jpg'];
    let text = ['아바타', '어벤져스 엔드게임', '노트북', '용의자 X의 헌신', '워낭소리']

    const onClick = (e) => {
        // console.log('hi');
        // console.log(props.test)
        console.log(e.target.id);
        sessionStorage.setItem('q1', e.target.id);
        // console.log(props.state[0])
        props.state[1]("2");
        // console.log(test);
        // console.log(props.test);
    }
    return (
        <div>
            <p>Q. 당신이 좋아하는 영화는?</p>
            <div style={{display: "flex"}}>
            {arr.map((val, index) => 
                <div key={index}>
                    <img src={path + val} 
                        style={{margin: "10px", width: "220px", height: "270px", cursor: "pointer"}}
                        alt={val}
                        id={text[arr.indexOf(val)]}
                        onClick={onClick}
                    />
                    <div style={{textAlign: "center"}}>{text[arr.indexOf(val)]}</div>
                </div>    
                )}
            </div>
        </div>
    )
}