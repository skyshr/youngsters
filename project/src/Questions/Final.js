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
        <div>
            <p style={{textAlign : "center", fontSize : "40px"}}>내 매칭정보를 확인해 보세요</p>
            <span style={{display: "flex", justifyContent : "center"}}>
            <button onClick = {join}>회원가입</button>
            <button onClick = {login}>로그인</button>
            </span>
        </div>
    )
}