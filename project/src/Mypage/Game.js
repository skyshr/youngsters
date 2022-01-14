import "./main.css"

export default function Game() {
    return (
      <div className="col-md-6">
      <div className="left-content">
        <div className = "gaDiv">
            <h2>이상형</h2>
            <h1 className = "gaText">
              색깔
              <br/>
              <input className = "gaInput"/>
            </h1>
            
            <h1 className = "gaText">
              영화
              <br/>
              <input className = "gaInput"/>
            </h1>
            
            <h1 className = "gaText">
              음악
              <br/>
              <input className = "gaInput"/>
            </h1>
            
            <h1 className = "gaText">
              음식
              <br/>
              <input className = "gaInput"/>
            </h1>
            
            <h1 className = "gaText">
              캐릭터
              <br/>
              <input className = "gaInput"/>
            </h1>

            {/* <h1 className = "gaText">
              노래
              <br/>
              <input className = "gaInput"/>
            </h1>

            <h1 className = "gaText">
              책
              <br/>
              <input className = "gaInput"/>
            </h1>

            <h1 className = "gaText">
              꿈
              <br/>
            <input className = "gaInput"/>
            </h1> */}
            
          <div className="main-btn">
              <a href="#3">수정하기</a>
          </div>
          </div>
      </div>
  </div>
    )
}