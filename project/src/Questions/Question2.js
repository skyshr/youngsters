export default function Question2(props) {
    let path = './img/food/'
    let arr = ['food1.jpg','food2.jpg','food3.jpg','food4.jpg'];
    let text = ["짜장면", "김치찌개", "떡볶이", "초밥"]

    const onClick = (e) => {
        // console.log(e.target.id)
        // console.log(props.state[0])
        sessionStorage.setItem('q2', e.target.id);
        props.state[1]("3");
    }
    return (
        <div className="Q1B">
            <div className="Q2BB">
            <p style={{textAlign : "center", fontSize : "60px", color: "red", fontWeight: "bold"}}>Q. 당신이 좋아하는 음식은?</p>
            <div style={{display: "flex", justifyContent : "center"}}>
            {arr.map(val => 
                <div>
                    <img src = {path + val} 
                    style = {{margin: "30px", width: "330px", height: "360px", cursor: "pointer"}}
                    alt = {val}
                    id={text[arr.indexOf(val)]}
                    onClick = {onClick}
                    className="question-imgs"
                    />
                    <div style={{textAlign: "center", fontSize : "35px", fontWeight: "bold"}}>{text[arr.indexOf(val)]}</div>
                </div>
                )}
            </div>
            </div>
        </div>
    )
}