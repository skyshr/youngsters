import React, { useState } from 'react';
import './css.css';
import Board from './Board';
import BoardView from './BoardView';

function BoardWrite() {
    const [state, setState] = useState("write");
    const [write, setWrite] = useState(
        {
            idx: "",
            hit: "",
            regdate: "",
            title : "",
            writer: "",
            password: "",
            content: ""
        }
    )

    const onChange = (e) => {
        const {name, value} = e.target;

        setWrite(
            {
                ...write, [name] : value
            }
        )
    }
    
    const onSubmitView = () => {
        const post = {
            idx : "",
            hit: "",
            regdate: "",
            title : write.title,
            writer : write.writer,
            password : write.password,
            content : write.content
        };

        fetch("http://localhost:3001/boardwrite", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(post)
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        })

        setState("view")
    }

    const onSubmitMain = () => {
        setState("main")
    }

    if(state === "write") {
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
                                    <div className="board_write">
                                        <div className="title">
                                            <dl>
                                                <dt>제목</dt>
                                                <dd><input name='title' value={write.title} type="text" placeholder="제목 입력" onChange={onChange}/></dd>
                                            </dl>
                                        </div>
                                        <div className="info">
                                            <dl>
                                                <dt>글쓴이</dt>
                                                <dd><input name='writer' value={write.writer} type="text" placeholder="글쓴이 입력" onChange={onChange}/></dd>
                                            </dl>
                                            <dl>
                                                <dt>비밀번호</dt>
                                                <dd><input name='password' value={write.password} type="password" placeholder="비밀번호 입력" onChange={onChange}/></dd>
                                            </dl>
                                        </div>
                                        <div className="cont">
                                            <textarea name='content' value={write.content} placeholder="내용 입력" onChange={onChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="bt_wrap">
                                        <button className="on" onClick={onSubmitView} type='submit'>등록</button>
                                        <button onClick={onSubmitMain}>취소</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )} else if(state === "view"){
            return(
                <BoardView write={write}/>
        )}
         else if(state === "main"){
            return(
                <Board />
            )
        }
}

export default BoardWrite;