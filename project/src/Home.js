import Review from './components/Review';
import Board from './components/Board';
// import BoardView from './components/BoardView';
// import BoardWrite from './components/BoardWrite';
// import BoardEdit from './components/BoardEdit';
import Inquire from './components/Inquire';
import Qna from './components/Qna';

export default function Homepage() {
    return (
        <>
            <div className="sequence">
                <div className="seq-preloader">
                    <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" className="seq-preload-indicator"><g fill="#F96D38"><path className="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/><path className="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/><path className="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
                </div>
            </div>


            <nav>
            <div className="logo">
                <img src="img/logo.png" alt="" />
            </div>
            <div className="mini-logo">
                <img src="img/mini_logo.png" alt="" />
            </div>
            <ul>
                <li><a href="#1"><i className="fa fa-heart"></i> <em>후기</em></a></li>
                <li><a href="#2"><i className="fa fa-clipboard"></i> <em>게시판</em></a></li>
                <li><a href="#3"><i className="fa fa-comment"></i> <em>문의하기</em></a></li>
                <li><a href="#4"><i className="fa fa-question"></i> <em>QnA</em></a></li>
                {/* <li><a href="#5"><i className="fa fa-envelope"></i> <em>Contact</em></a></li> */}
            </ul>
            </nav>
                
            <div className="slides">
                <div className="slide" id="1">
                    <div className="content third-content">
                        <div className="container-fluid">
                            <Review />
                        </div>
                    </div>
                </div>

                <div className="slide" id="2">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <Board />
                        </div>
                    </div>
                </div>

                <div className="slide" id="3">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <Inquire />
                        </div>
                    </div>
                </div>

                <div className="slide" id="4">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <Qna />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="footer">
                <div className="content">
                    <p>Copyright &copy; 2018 Your Company . <a href="http://www.templatemo.com/tm-512-moonlight">Moonlight</a> by <a href="http://www.html5max.com" target="_parent">HTML5 Max</a></p>
                </div>
            </div> */}
        </>
    )
}