import React, { useEffect, useState } from 'react';
import './css.css';
import Board from './Board';

function BoardList(value) {
    console.log(value.value);

    const [view, setView] = useState("main");
    const [list, setList] = useState({
        idx : "",
        title : "",
        writer : "",
        password : "",
        content : "",
        regdate : "",
        modidate : "",
        hit : "",
        likeuser : ""
    })
    const [comment, setComment] = useState({
        idx : "",
        userid : "",
        comment : ""
    })
    const [comments, setComments] = useState({
        idx : "",
        userid : "",
        comment : ""
    })

    useEffect(()=> {
        console.log("boardlist")
        console.log("value: " + value.value);
        fetch("http://localhost:3001/boardlist", {
            method : "get",
            headers : {
                "content-type" : "application/json"
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            for (let data of json) {
                if (data.idx == value.value) {
                    setList(data);
                }
            }
        }).then(() => {
            fetch("http://localhost:3001/boardcommentview", {
                method : "get",
                headers : {
                    "content-type" : "application/json"
                },
            })
            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                setComments(json);
                setView("view")
            })
        })
    },[])
    
    const onSubmitcomment = (event) => {
        const post = {
            idx : list.idx,
            userid : comment.userid,
            comment : comment.comment
        };

        fetch("http://localhost:3001/boardcomment", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(post)
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setComments(json);
            setComment({
                idx : "",
                userid : "",
                comment : ""
            })
        })

        // event.preventDefault();
    }

    const onSubmitMain = () => {
        setView("main") 
    }

    const onChange = (e) => {
        const {name, value} = e.target;

        setComment(
            {
                ...comment, [name] : value
            }
        )
    }

    // console.log(list);
    // console.log(comment);
    // console.log(comments);

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
                                        {list.title}
                                    </div>
                                    <div className="info">
                                        <dl>
                                            <dt>번호</dt>
                                            <dd style={{color : "black"}}>{list.idx}</dd>
                                        </dl>
                                        <dl>
                                            <dt>글쓴이</dt>
                                            <dd style={{color : "black"}}>{list.writer}</dd>
                                        </dl>
                                        <dl>
                                            <dt>작성일</dt>
                                            <dd style={{color : "black"}}>{list.modidate}</dd>
                                        </dl>
                                        <dl>
                                            <dt>조회</dt>
                                            <dd style={{color : "black"}}>{list.hit}</dd>
                                        </dl>
                                    </div>
                                    <div className="cont">
                                    {list.content}
                                    </div>
                                </div>
                                { 
                                    comments.map(val =>
                                        {if (list.idx==val.idx) {
                                            return (
                                                <div style={{display : "flex", justifyContent : "center"}}>
                                                    <div style={{width : "10%", height : "30px"}}>{val.userid}</div>
                                                    <div style={{width : "70%", height : "30px"}}>{val.comment}</div>
                                                </div>
                                            )
                                        }}
                                )
                                }
                                {/* } */}
                                {/* {comment.userid!="" &&  */}
                                    <div>
                                        <textarea style={{resize : "none"}} name='userid' value={comment.userid} onChange={onChange}/>
                                        <textarea style={{width : "70%", resize : "none"}} name='comment' value={comment.comment} onChange={onChange}/>
                                        <div><button onClick={onSubmitcomment}>댓글 달기</button></div>
                                    </div>
                                {/* } */}
                                <div className="bt_wrap">
                                    <button className="on" onClick={onSubmitMain}>목록</button>
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
            <Board />
        )
    }
}

export default BoardList;