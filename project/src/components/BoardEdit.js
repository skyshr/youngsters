import React from 'react';
import './css.css';

function BoardEdit() {
    return(
        <>
            <section className="page-section" id="contact">
                <div className="board_box">    
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div style={{marginLeft : "20%", marginTop : "5%"}} className="col-lg-8 col-xl-6 text-center">
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
                                    <dd><input type="text" placeholder="제목 입력" value="글 제목이 들어갑니다" /></dd>
                                </dl>
                            </div>
                            <div className="info">
                                <dl>
                                    <dt>글쓴이</dt>
                                    <dd><input type="text" placeholder="글쓴이 입력" value="김이름" /></dd>
                                </dl>
                                <dl>
                                    <dt>비밀번호</dt>
                                    <dd><input type="password" placeholder="비밀번호 입력" value="1234" /></dd>
                                </dl>
                            </div>
                            <div className="cont">
                                <textarea placeholder="내용 입력">
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                    글 내용이 들어갑니다.
                                </textarea>
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <a href="view.html" className="on">수정</a>
                            <a href="view.html">취소</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BoardEdit;