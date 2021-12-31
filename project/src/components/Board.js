import React from 'react';
import './css.css';

function Board() {
    return(
        <>
            <section className="page-section" id="contact">
                <div className="board_box">    
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div style={{marginLeft : "17%", marginTop : "5%"}} className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">게시판</h2>
                            <hr className="divider" />
                            <p className="text-muted mb-5">여러분의 생각과 고민을 적어주세요!</p>
                        </div>
                    </div>
                    <div class="board_list_wrap">
                        <div class="board_list">
                            <div class="top">
                                <div class="num">번호</div>
                                <div class="title">제목</div>
                                <div class="writer">글쓴이</div>
                                <div class="date">작성일</div>
                                <div class="count">조회</div>
                            </div>
                            <div>
                                <div class="num">1</div>
                                <div class="title"><a href="view.html">Before node ! HTML's test...</a></div>
                                <div class="writer">김민욱</div>
                                <div class="date">2021.12.30</div>
                                <div class="count">#</div>
                            </div>
                        </div>
                        <div class="board_page">
                            <a href="#" class="num on">1</a>
                            <a href="#" class="num">2</a>
                            <a href="#" class="num">3</a>
                            <a href="#" class="num">4</a>
                            <a href="#" class="num">5</a>
                        </div>
                        <div class="bt_wrap">
                            <a href="write.html" class="on">등록</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Board;