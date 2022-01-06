import Review from './components/Review';
import Board from './components/Board';
import BoardView from './components/BoardView';
import BoardWrite from './components/BoardWrite';
// import BoardEdit from './components/BoardEdit';
import Inquire from './components/Inquire';
import Qna from './components/Qna';

export default function Homepage() {
    return (
        <>
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
                    <Review />
                </div>

                <div className="slide" id="2">
                    <Board />
                </div>

                <div className="slide" id="3">
                    <Inquire />
                </div>

                <div className="slide" id="4">
                    <Qna />
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