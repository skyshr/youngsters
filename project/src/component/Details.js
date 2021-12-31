import "./main.css"

export default function Details() {

    return (

        <div className="col-md-6">
            <div className="left-content">
              <div className = "deDiv">
                  <h2>상세정보</h2>
                  <h1 className = "deText">
                    재산 
                    <br/>
                    <input className = "deInput"/>
                  </h1>
                  
                  <h1 className = "deText">
                    학벌 
                    <br/>
                    <input className = "deInput"/>
                  </h1>
                  
                  <h1 className = "deText">
                    직업 
                    <br/>
                    <input className = "deInput"/>
                  </h1>
                  
                  <h1 className = "deText">
                    취미
                    <br/>
                    <input className = "deInput"/>
                  </h1>
                  
                  <h1 className = "deText">
                    가족관계
                    <br/>
                    <input className = "deInput"/>
                  </h1>
                  
                <div className="main-btn">
                    <a href="#3">수정하기</a>
                </div>
                </div>
            </div>
        </div>
    )
}