import { useEffect, useState } from "react";

export default function Question4(props) {
    const [time, setTime] = useState(0);
    const [color, setColor] = useState("sienna");

    const backgroundChange = () => {
        // document.querySelector('.test').style.backgroundColor = "blue"
        setColor("blue");
        setTime(Date.now());
    } 

    useEffect(() => {
        let randint = (Math.random()*4 + 1)*1000;
        console.log(randint);
        let timer = setTimeout(backgroundChange, randint)
        // console.log(randint);
        // function tick() {
        //     setTimeout(backgroundChange, randint)
        // }
        // tick();
        // return () => setLoading(false)
        },[]);

    const onClick = () => {
        let clickTime = Date.now();
        console.log("click: " + clickTime);
        console.log("time: " + time);
        console.log("finaltime: " + (clickTime - time)/1000)
        console.log(props.state[0])
        // setTime((clickTime-time)/1000);
        sessionStorage.setItem('q4', String((clickTime - time)/1000))
        props.state[1]("5");
    }

    // if (props.state[0]=="4") {
    return (
        <div className="Q4B" style={{textAlign : "center", fontSize : "40px", justifyContent : "center", display : "grid"}}>
            <div className="Q4BB">
                Q. &nbsp;스피드 측정 (파란불이 들어오면 클릭하세요!)
                <div style = {{
                    border: "3px solid black",
                    width: "900px",
                    height: "400px",
                    backgroundColor: color,
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    className: "test",
                    justifyContent : "center",
                    display: "flex"
                }}
                onClick = {onClick}>
                여기를 클릭!
                </div>
            </div>
        </div>
    )
    // }
    // else return
}