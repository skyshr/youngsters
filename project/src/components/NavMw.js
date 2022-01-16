export default function NavMw({page, setPage}) {
    // const onClick = (e) => {
    //     setPage(Number(e.target.id));
    // }
    return(
    <nav>
        <div style={{height : "150px", marginLeft : "30%"}} className="logo">
        </div>
        
        <ul style={{position: "absolute", top: "20%"}}>
            <li>
                <a href="#1"> <i className="fa fa-home"></i> <em>후기</em></a>
            </li>
            <li>
                <a href="#2"> <i className="fa fa-user"></i> <em>게시판</em></a>
            </li>
            <li>
                <a href="#3"><i className="fa fa-pencil"></i> <em>문의하기</em></a>
            </li>
            {/* <li>
                <a href="#4"><i className="fa fa-image"></i> <em>Q&A</em></a>
            </li> */}
        </ul>
        {/* <ul>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-home"></i> <em id="0">후기</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-user"></i> <em id="1">게시판</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-pencil"></i> <em id="2">문의하기</em></div>
            </li>
            <li>
                <div style={{cursor: "pointer"}} onClick={onClick}><i className="fa fa-image"></i> <em id="3">Q&A</em></div>
            </li>
        </ul> */}
    </nav>
    )
}