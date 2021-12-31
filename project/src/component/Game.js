import "./main.css"

export default function Game() {
    return (
        <div className="col-md-6">
            <div className="left-content">
                  <h2>상세정보</h2>
                  <p className="text2">
                    재산 &nbsp;
                    <input style={{ color: "black" }} type="text" />
                  </p>
                  <p className="text2">
                    학벌 &nbsp;
                    <input />
                  </p>
                  <p className="text2">
                    직업 &nbsp;
                    <input />
                  </p>
                  <p className="text2">
                    취미 &nbsp;
                    <input />
                  </p>
                  <p className="text2">
                    가족관계 &nbsp;
                    <input />
                  </p>
                <div className="main-btn">
                    <a href="#3">수정하기</a>
                </div>
            </div>
        </div>
    )
}