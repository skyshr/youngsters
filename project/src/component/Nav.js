import "./main.css"
import React from "react"

export default function Nav() {
    return(
    <nav style = {{backgroundColor: "pink"}}>
        <div className="logo">
            <img src="img/logo.png" alt="" />
        </div>

        <div className="mini-logo">
            <img src="img/mini_logo.png" alt="" />
        </div>
        
        <ul>
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
                <a href="#5"><i className="fa fa-image"></i> <em>내문의확인</em></a>
            </li>
        </ul>
    </nav>
    )
}