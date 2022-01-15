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
            <p>내 매칭정보를 확인해 보세요</p>
            <button onClick = {join}>회원가입</button>
            <button onClick = {login}>로그인</button>
        </div>
    )
}