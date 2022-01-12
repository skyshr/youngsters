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
        <div>
            <p>Q. 당신이 좋아하는 음식은?</p>
            <div style={{display: "flex"}}>
            {arr.map(val => 
                <div>
                    <img src = {path + val} 
                    style = {{margin: "10px", width: "280px", height: "290px", cursor: "pointer"}}
                    alt = {val}
                    id={text[arr.indexOf(val)]}
                    onClick = {onClick}
                    />
                    <div style={{textAlign: "center"}}>{text[arr.indexOf(val)]}</div>
                </div>
                )}
            </div>
        </div>
    )
}