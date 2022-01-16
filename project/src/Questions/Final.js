export default function Final(props) {
    // const signUp = () => {
    //     props.done({})
    // }
    const join = () => {
        window.location.href = '/signup';
    }

    const login = () => { 
        window.location.href = '/login'
    }
    return (
        <div className="Q1B">
        <div className="final">
            <p style={{textAlign : "center", fontSize : "60px", fontWeight: "bold"}}>내 매칭정보를 확인해 보세요</p>
            <span style={{display: "flex", justifyContent : "center"}}>
            <button onClick = {join} style={{height: "55px", fontSize: "40px", fontWeight: "bold"}}>회원가입</button>
            <button onClick = {login} style={{height: "55px", fontSize: "40px", fontWeight: "bold"}}>로그인</button>
            </span>
        </div>
        </div>
    )
}