import "./main.css"

export default function Profile() {
    return (
        <>
        <div className="col-md-3">
         <div className="author-image">
          <img src="img/author_image.png" alt="" />
         </div>
        </div>
     
        <div className="col-md-9">
          <h2>프로필</h2>
          <p>이름</p>
          <p>아이디</p>
          <p>비밀번호</p>
          <p>주소</p>
          <div className="main-btn">
            <a href="#2">수정하기</a>
          </div>
        </div>
        </>
                
    )
}