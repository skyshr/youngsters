export default function Final(props) {
    const signUp = () => {
        props.done({})
    }
    return (
        <div>
            <p>내 매칭정보를 확인해 보세요</p>
            <button>회원가입</button>
            <button>로그인</button>
        </div>
    )
}