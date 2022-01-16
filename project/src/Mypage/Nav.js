import "./main.css"
import React from "react"

export default function Nav() {
    // const onClick = (e) => {
    //     console.log(page)
    //     console.log(e.target.id);
    //     setPage(Number(e.target.id))
    // }

    return(
    <nav>
        <div className="logo">
            <img src="img/logo.png" alt="" />
        </div>

        <div className="mini-logo">
            <img src="img/mini_logo.png" alt="" />
        </div>
        
        {/* <ul>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-home"></i> <em id="0">프로필</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-user"></i> <em id="1">상세정보</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-pencil"></i> <em id="2">이상형정보</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-image"></i> <em id="3">내문의확인</em></div>
            </li>
        </ul> */}

        <ul style={{position: "absolute", top: "15%"}}>
            <li>
                <a href="#1"> <i className="fa fa-home"></i> <em>프로필</em></a>
            </li>
            <li>
                <a href="#2"> <i className="fa fa-user"></i> <em>상세정보</em></a>
            </li>
            <li>
                <a href="#3"><i className="fa fa-pencil"></i> <em>이상형정보</em></a>
            </li>
            <li>
                <a href="#4"><i className="fa fa-image"></i> <em>내문의확인</em></a>
            </li>
        </ul>
    </nav>
    )
}