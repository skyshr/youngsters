export default function Question3(props) {
    let path = './img/kakaofriends/';
    let arr = ['apeach.png', 'chunsik.jpg', 'frodo.png', 'jayG.png', 'muzi.png', 'neo.png', 'ryan.png', 'tube.png'];
    let text = ["어피치", "춘식이", "프로도", "제이지", "무지", "네오", "라이언", "튜브"];

    let set = new Set();
    while (set.size<4) {
        let tmp = Math.floor(Math.random()*7);
        set.add(arr[tmp]);
    }
    set = Array.from(set);
    // console.log("set: ", set);

    const onClick = (e) => {
        // console.log(e.target.id)
        // console.log(props.state[0])
        sessionStorage.setItem('q3', e.target.id);
        props.state[1]("4");
    }
    return (
        <div>
            <p style={{textAlign : "center", fontSize : "60px", fontWeight: "bold", color: "red"}}>Q. 당신이 좋아하는 캐릭터는?</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            {set.map(val => 
                <div>
                    <img src={path + val} 
                    style={{margin: "30px", width: "330px", height: "360px", 
                            cursor: "pointer", border: "3px solid black"}}
                    alt={val} 
                    id={text[arr.indexOf(val)]}
                    onClick={onClick}
                    className="question-imgs"
                    />
                    <div style={{textAlign: "center", fontSize : "35px", fontWeight: "bold"}}>{text[arr.indexOf(val)]}</div>
                </div>
                )}
            </div>
        </div>
    )
}
