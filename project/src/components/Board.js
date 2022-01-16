import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import './css.css';

function Board() {
    // window.location.href = '/board';
    const [test, setTest] = useState(true);
    const [value, setValue] = useState("");
    const [board, setBoard] = useState("");
    const [data, setData] = useState({
        idx : "",
        title : "",
        writer : "",
        password : "",
        regdate : "",
        modidate : "",
        hit : "",
        likeuser : ""
    });

    useEffect(() => {
        if (test) {
            setTest(false)
            // window.location.href = '/board';
        }
        console.log('board')
        fetch("http://localhost:3001/board", {
            method : "get",
            headers : {
                "content-type" : "application/json"
            },
        })   
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setData(json)
            setBoard("board")
        })
    }, [])

    const onClick = (e) => {
        const clickId = e.target.id
        setValue(clickId);

        const test = {
            clickId
        }

        fetch("http://localhost:3001/hit", {
            method : "put",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(test)
        })

        setBoard("read");
    }

    const onSubmit = () => {
        setBoard("write");
    };

    console.log(value);

    if(board=="board"){
    return(
        <>
            <div>
                {/* <div className="container-fluid"> */}
                    <section className="page-section" id="contact">
                        <div className="board_box">    
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div style={{marginLeft : "17%", marginTop : "5%"}} className="col-lg-8 col-xl-6 text-center">
                                    <h2 className="mt-0">게시판</h2>
                                    <hr className="divider" />
                                    <p className="text-muted mb-5">여러분의 생각과 고민을 적어주세요!</p>
                                </div>
                            </div>
                            <div className="board_list_wrap">
                                <div className="board_list">
                                    <div className="top">
                                        <div className="num">번호</div>
                                        <div className="title">제목</div>
                                        <div className="writer">글쓴이</div>
                                        <div className="date">작성일</div>
                                        <div className="count">조회</div>
                                    </div>
                                    {data.map(val => 
                                    <div className='bottom'>
                                        <div className="num">{val.idx}</div>
                                        <div id={val.idx} className="title" style={{cursor : "pointer"}} onClick={onClick} key="uniqueId1">{val.title}</div>
                                        <div className="writer">{val.writer}</div>
                                        <div className="date">{val.modidate}</div>
                                        <div className="count">{val.hit}</div>
                                    </div>
                                    )}
                                </div>
                                <div className="board_page">
                                    {/* <a href="#" className="num on">1</a> */}
                                </div>
                                <div className="bt_wrap">
                                    <button className="on" onClick={onSubmit}>등록</button>
                                </div>
                            </div>
                        </div>
                    </section>
                
            </div>
        </>
    )} else if (board=="read"){
        return (
            <BoardList value={value}/>
        )
    }
    else {
        return (
        <BoardWrite />
        )
    }
}

export default Board;