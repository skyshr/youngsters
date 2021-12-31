import React from 'react';
import './css.css';

function BoardView() {
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
                    <div className="board_list_wrap">
                        <div className="board_view">
                            <div className="title">
                                글 제목이 들어갑니다.
                            </div>
                            <div className="info">
                                <dl>
                                    <dt>번호</dt>
                                    <dd>1</dd>
                                </dl>
                                <dl>
                                    <dt>글쓴이</dt>
                                    <dd>김이름</dd>
                                </dl>
                                <dl>
                                    <dt>작성일</dt>
                                    <dd>2021.1.16</dd>
                                </dl>
                                <dl>
                                    <dt>조회</dt>
                                    <dd>33</dd>
                                </dl>
                            </div>
                            <div className="cont">
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다<br />
                                글 내용이 들어갑니다
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <a href="list.html" className="on">목록</a>
                            <a href="edit.html">수정</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BoardView;