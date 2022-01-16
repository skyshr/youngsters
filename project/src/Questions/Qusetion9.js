export default function Question9(props) {
    // console.log('state: ' + props.state[0]);
    let path = './img/color/'
    let arr = [''];
    let text = ['아바타', '어벤져스 엔드게임', '노트북', '용의자 X의 헌신', '워낭소리']

    const onClick = (e) => {
        console.log(e.target.id);
        sessionStorage.setItem('q1', e.target.id);
        props.state[1]("10");
    }
    return (
        <div>
            <p style={{textAlign : "center", fontSize : "60px", fontWeight: "bold"}}>Q. 당신의 색상은 무엇인가요?</p>
            <div style={{display: "flex", justifyContent : "center"}}>
            {arr.map(val => 
                <div>
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