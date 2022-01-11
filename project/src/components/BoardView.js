import React, { useEffect, useState } from 'react';
import './css.css';
// import {write} from './BoardWrite';
import Board from './Board';
import BoardEdit from './BoardEdit';

function BoardView({write}) {
    const [view, setView] = useState("view")
    const [test, setTest] = useState(write);
    console.log("BoardView: "+ write);
    // const [state, setState] = useState({
    //     idx:"",
    //     hit:"",
    //     regdate:"",
    //     title:"",
    //     writer:"",
    //     password:"",
    //     content:"",
    // })

    useEffect(()=> {
        fetch("http://localhost:3001/boardview", {
            method : "get",
            headers : {
                "content-type" : "application/json"
            },
        })
        .then((res) => res.json())
        .then((json) => {
            // console.log(json);
            for (let data of json) {
                if (data.title == write.title && data.writer == write.writer && data.password == write.password && data.content == write.content) {
                    // console.log(write);
                    // test.idx = data.idx
                    // test.regdate = data.regdate
                    // test.hit = data.hit
                    // console.log(write)
                    setTest(data);
                    // console.log(write)
                }
            }
        })},[])

    const onSubmitMain = () => {
        // const get = {
        //     title : write.title,
        //     writer : write.writer,
        //     password : write.password,
        //     content : write.content
        // };
        setView("main") 
    }
    const onSubmitEdit = () => {
         setView("edit")
    }

    if(view === "view"){
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
                                <div className="board_view">
                                    <div className="title">
                                        {test.title}
                                    </div>
                                    <div className="info">
                                        <dl>
                                            <dt>번호</dt>
                                            <dd style={{color : "black"}}>{test.idx}</dd>
                                        </dl>
                                        <dl>
                                            <dt>글쓴이</dt>
                                            <dd style={{color : "black"}}>{test.writer}</dd>
                                        </dl>
                                        <dl>
                                            <dt>작성일</dt>
                                            <dd style={{color : "black"}}>{test.regdate}</dd>
                                        </dl>
                                        <dl>
                                            <dt>조회</dt>
                                            <dd style={{color : "black"}}>{test.hit}</dd>
                                        </dl>
                                    </div>
                                    <div className="cont">
                                        {test.content}
                                    </div>
                                </div>
                                <div className="bt_wrap">
                                    <button className="on" onClick={onSubmitMain}>목록</button>
                                    <button onClick={onSubmitEdit}>수정</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )}
     else if(view === "main"){
        return(
            <Board test = {test}/>
        )
    } 
    else if(view === "edit"){
        return(
            <BoardEdit test = {test}/>
        )
    }
}

export default BoardView;