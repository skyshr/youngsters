// import { json } from 'express';
import React, { useEffect, useState } from 'react';
import BoardWrite from './BoardWrite';
import './css.css';

function Board() {
    const [board, setBoard] = useState(true);
    // const [data, setData] = useState({});

    useEffect(() => {
        console.log('board')
        fetch("http://localhost:3001/board", {
            method : "get",
            headers : {
                "content-type" : "application/json"
            },
        })   
        // .then((res) => res.json())
        // .then((json) => {
        //     console.log(json);

        // })
    }, [])

    const onSubmit = () => {
        setBoard(false);
    };

    if(board){
    return(
        <>
            <div className="content second-content">
                <div className="container-fluid">
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
                                    <div>
                                        <div className="num">1</div>
                                        <div className="title">1</div>
                                        <div className="writer">1</div>
                                        <div className="date">1</div>
                                        <div className="count">1</div>
                                    </div>
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
            </div>
        </>
    )} else {
        return (
        <BoardWrite />
        )}
}

export default Board;