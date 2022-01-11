import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Board from '../components/Board';
import BoardWrite from '../components/BoardWrite';
import BoardView from '../components/BoardView';
import BoardList from '../components/BoardView';
import BoardEdit from '../components/BoardEdit';
import Homepage from '../Home';
// import Inquire from '../components/Inquire';

function Routers() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="board" element={<Board />}/>
                    <Route path="boardview" element={<BoardView />}/>
                    <Route path="boardlist" element={<BoardList />}/>
                    <Route path="boardwrite" element={<BoardWrite />}/>
                    <Route path="boardedit" element={<BoardEdit />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers;