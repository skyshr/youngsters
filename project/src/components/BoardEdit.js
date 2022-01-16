import React, {useState} from 'react';
import './css.css';
import BoardView from './BoardView';
import Board from './Board';

function BoardEdit({test}) {
    const [edit, setEdit] = useState("edit")
    const [change,setChange] = useState(
        {
            idx : test.idx,
            content : test.content,
            title : test.title
        }
    )
    
    const onSubmitView = () =>{
        const put = {
            idx : change.idx,
            content : change.content,
            title : change.title
        };

        fetch("http://localhost:3001/boardedit", {
            method : "put",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(put)
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            if(json) {
                setEdit("main")
            }
            else {
                alert("error")
            }
        })

        
    }
    const onSubmitMain = () =>{
        setEdit("main")
    }

    const onChange = (e) => {
        const {name, value} = e.target;

        setChange(
            {
                ...change, [name] : value
            }
        )
    }

    if(edit === "edit"){
        return(
            <>
            <div style={{backgroundColor : "#ffb6c1"}} >
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
                                <div className="board_write_wrap">
                                    <div className="board_write">
                                        <div className="title">
                                            <dl>
                                                <dt>제목</dt>
                                                <dd><textarea name='title' value={change.title} onChange={onChange}>{test.title}</textarea></dd>
                                            </dl>
                                        </div>
                                        <div className="info">
                                            <dl>
                                                <dt>글쓴이</dt>
                                                <dd>{test.writer}</dd>
                                            </dl>
                                            <dl>
                                                <dt>비밀번호</dt>
                                                <dd>{test.password}</dd>
                                            </dl>
                                        </div>
                                        <div className="cont">
                                            <textarea name='content' value={change.content} onChange={onChange}>
                                                {test.content}
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="bt_wrap">
                                        <button onClick={onSubmitView} className="on">수정</button>
                                        <button onClick={onSubmitMain} href="view.html">취소</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/* </div> */}
                </div>
            </>
        )
    } 
    else if (edit === "main"){
        return(
            <Board test = {test}/>
        )
    }    
}

export default BoardEdit;