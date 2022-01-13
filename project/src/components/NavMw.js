export default function NavMw() {
    return(
    <nav>
        <div className="logo">
            <img src="img/logo.png" alt="" />
        </div>

        <div className="mini-logo">
            <img src="img/mini_logo.png" alt="" />
        </div>
        
        <ul>
            <li>
                <a href="#1"> <i className="fa fa-home"></i> <em>후기</em></a>
            </li>
            <li>
                <a href="#2"> <i className="fa fa-user"></i> <em>게시판</em></a>
            </li>
            <li>
                <a href="#3"><i className="fa fa-pencil"></i> <em>문의하기</em></a>
            </li>
            <li>
                <a href="#4"><i className="fa fa-image"></i> <em>Q&A</em></a>
            </li>
        </ul>
    </nav>
    )
}