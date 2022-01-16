import { useEffect, useState } from "react"
import '../css/match.css';

export default function Match() {
    const [info, setInfo] = useState("")
    const [state, setState] = useState(false)
    const [tmp, setTmp] = useState("");
    // const [state, setState] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/game", {
            method: "get",
            headers: {
                "content-type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((json) => {
            let test = []
            let qParams = [];

            for (let data of json['game']) {
                if (data['idkey']==sessionStorage.getItem('idkey')){
                    qParams = [data['q1'], data['q2'], data['q3'], data['q4'], data['q5'], data['q6'], data['q7'], data['q8']];
                    break;
                }
            }

            for (let value=0; value<json['game'].length; value++) {
                if (json['game'][value].gender!=sessionStorage.getItem('gender')) {
                    // console.log(data);
                    // console.log("params: " + qParams);
                    let matchPoint = questionCheck(qParams, Object.values(json['game'][value]));
                    if (sessionStorage.getItem('gender')=="남자") matchPoint.push('./img/women/' + json['userinfo'][value].img);
                    else matchPoint.push('./img/men/' + json['userinfo'][value].img);
                    matchPoint.push(json['userinfo'][value]);
                    test.push(matchPoint);
                    // test1.push(json['userinfo'][value]);
                }
            }
            test.sort(function(a,b) {
                if (a[1]>b[1]) return -1
                else if (a[1]==b[1]) return 0
                else return 1 
            })
            // console.log("test[0]: " + test[0]);
            setInfo(test);
            setState(true);
            // setTmp(test1);
        })
    }, [])

    const onClick = (e) => {
        // console.log(e.target.value)
        // console.log('button');
        if (window.confirm("이상형으로 등록하시겠습니까?")) {
            fetch("http://localhost:3001/ideal", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({"value": e.target.value,
        "idkey": sessionStorage.getItem('idkey')})
        })
        .then((res) => res.json())
        .then((json)=> {
            console.log(json);
            if (json.messages=="success") alert("등록되었습니다.");
            else if (json.messages=="already in use") alert("이미 등록된 정보입니다.");
            else alert("등록은 4명까지만 가능합니다.");
        })
        }
    }
    
    if (state) {
        return (
            <div className="wrap-match">
                {sessionStorage.getItem("gender")=="남자"
                ? <><span id="match-female">추천 여성</span>
                &nbsp;&nbsp;&nbsp;<span className="match-text">알고리즘 추천 순으로 안내됩니다</span></>
                : <><span id="match-male">추천 남성</span>
                &nbsp;&nbsp;&nbsp;<span className="match-text">알고리즘 추천 순으로 안내됩니다</span></>
            }
                <div className="match-container">
                    {/* <div className="match-container">
                        <div>
                            <img src={info[0][2]} />
                        </div> 
                        
                        <div className="info-box">
                            <div>{info[0][1]} : {info[0][3].username}</div>    
                            <button onClick={onClick} value={info[0][3].idkey}>이상형 등록하기</button>
                        </div>
                    </div>
                    <div className="match-container">
                        <div>
                            <img src={info[1][2]} /> 
                        </div>
                        
                        <div className="info-box">
                            <div>{info[1][1]} : {info[1][3].username}</div>    
                            <button onClick={onClick} value={info[1][3].idkey}>이상형 등록하기</button>
                        </div>
                    </div>  
                    <div className="match-container">
                        <div>
                            <img src={info[2][2]} />
                        </div>

                        <div className="info-box">
                            <div>{info[2][1]} : {info[2][3].username}</div>    
                            <button onClick={onClick} value={info[2][3].idkey}>이상형 등록하기</button>
                        </div>
                    </div>     */}
                    {info.map(value => 
                    // <div className="di" key={value[1]}>
                    <div className="match-person">
                        <div id="wrap-match-img">
                            <img id="match-img" src={value[2]} />
                        </div>
                        <div id="match-user-info">
                            <div id="match-name">이름 : {value[3].username}</div>  
                            <div>나이 : {value[3].age}</div>  
                            <div>지역 : {value[3].useraddr.split(" ",2).join(" ")}</div>  
                            <div id="match-number">매칭점수 : {value[1]}</div>
                            <div id="wrap-match-click">
                                <button id="match-click" onClick={onClick} value={value[3].idkey}>이상형 등록</button>
                            </div>
                        </div>
                    </div>    
                    )}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                test
            </div>
        )
    }
}

function questionCheck(q1, q2) {
    // console.log(q1, q2);
    let point = 0;
    let fireArr = ['어벤져스 엔드게임', '노트북', '떡볶이', '네오'];
    let waterArr = ['용의자 X의 헌신', '아바타', "짜장면", '춘식이', '어피치'];
    let earthArr = ['워낭소리', '김치찌개', '제이지'];
    let airArr = ['노트북', '워낭소리', '초밥', '무지'];
    let etherArr = ['아바타', '어벤져스 엔드게임', '라이언', '튜브', '춘식이'];
    let allArr = [fireArr, waterArr, earthArr, airArr, etherArr];
    let fire = 0;
    let water = 0;
    let earth = 0;
    let air = 0;
    let ether = 0;

    for (let start=0; start<q1.length; start++) {
        // console.log(start);
        // console.log("q1: " + q1[start]);
        // console.log("q2: " + q2[start+2]);
        if (q1[start]==q2[start+2]) {
            point+=0.6;
        }
        if (start<3) {
            for (let data of allArr) {
                if (data.includes(q1[start])) {
                    if (data==fireArr) fire+=1;
                    else if (data==waterArr) water+=1;
                    else if (data==earthArr) earth+=1;
                    else if (data==airArr) air+=1;
                    else ether+=1
                }
            }
        }
        else if (start==3) {
            let tmp = Math.abs(Number(q1[start])-Number(q2[start+2]));
            if (tmp < 0.100) point+=1
            else if (tmp < 0.150) point+=0.5
            else if (tmp < 0.200) point+=0.3
            else if (tmp < 0.300) point+=0.1
            else point-=0.3
        }
    }

    // console.log("여기:" + point);
    // console.log(fire, water, earth, air, ether);

    let total = fire + water + earth + air + ether;

    for (let start=0; start<q1.length; start++) {
        if (start<3) {
            let indexOfNotZero = [];
            for (let data of allArr) {
                if (data.includes(q2[start+2])) {
                    if (data==fireArr) indexOfNotZero.push(0);
                    else if (data==waterArr) indexOfNotZero.push(1)
                    else if (data==earthArr) indexOfNotZero.push(2)
                    else if (data==airArr) indexOfNotZero.push(3)
                    else indexOfNotZero.push(4)
                }
            }
            let sum = indexOfNotZero.length;
            // console.log(start);
            // console.log(indexOfNotZero);
            // console.log("sum: " + sum);
            for (let value of indexOfNotZero) {
                if (value==0) {
                    point+=((Math.ceil(Math.random()+3)/2)*(water/total) + (Math.ceil(Math.random()+2)/2)*(air/total) + (Math.ceil(Math.random()*7+5)/10*(fire/total)) + (Math.ceil(Math.random()*3+2)/10*(earth/total)) + (Math.ceil(Math.random()*12-5)/10*(ether/total)))*(1/sum)
                }
                else if (value==1) {
                    point+=((Math.ceil(Math.random()+3)/2)*(fire/total) + (Math.ceil(Math.random()+2)/2)*(earth/total) + (Math.ceil(Math.random()*7+5)/10*(water/total)) + (Math.ceil(Math.random()*3+2)/10*(air/total)) + (Math.ceil(Math.random()*12-5)/10*(ether/total)))*(1/sum)
                }
                else if (value==2) {
                    point+=((Math.ceil(Math.random()+3)/2)*(air/total) + (Math.ceil(Math.random()+2)/2)*(fire/total) + (Math.ceil(Math.random()*7+5)/10*(earth/total)) + (Math.ceil(Math.random()*3+2)/10*(water/total)) + (Math.ceil(Math.random()*12-5)/10*(ether/total)))*(1/sum)
                }
                else if (value==3) {
                    point+=((Math.ceil(Math.random()+3)/2)*(earth/total) + (Math.ceil(Math.random()+2)/2)*(water/total) + (Math.ceil(Math.random()*7+5)/10*(air/total)) + (Math.ceil(Math.random()*3+2)/10*(fire/total)) + (Math.ceil(Math.random()*12-5)/10*(ether/total)))*(1/sum)
                }
                else {
                    point+=((Math.ceil(Math.random()*2-1)/2)*((total-ether)/total) + (Math.ceil(Math.random()*6-3)/2)*(ether/total))*(1/sum);
                }
            }
            // console.log("final point: " + point)
        }
    }
    return [q2[0], point.toFixed(2)]
}