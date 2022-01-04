import React, { useState } from 'react';
import PopupDom from './PopupDom';
import '../css/signup.css';
import DaumPostcode from "react-daum-postcode";

const PostApi = (props) => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    
    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    
    // 팝업창 디자인
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top :"0%",
        left : "0%",
        width: "450px",
        height: "413px",
        borderRight : "3px solid black",
        borderLeft : "3px solid black",
        borderBottom : "3px solid black"
    };

    // 팝업창 DB추출
    const [adress, setAdress] = useState('');

    const handlePostCode = (data) => {
        let fullAddress = data.address;
        setAdress(fullAddress)
    }

    const {useraddr} = adress;

    const onChange = (e) =>{
        const { name, value } = e.target;

        setAdress({
        ...adress,
        [name] : value
        })
    }
    
    return(
        <>
        <div id='wrap-post-search-btn'>
        	{/* 버튼 클릭 시 팝업 생성 */}
            <button type='button' id='post-search-btn' onClick={openPostCode}>주소 찾기</button>
            {/* 팝업 생성 기준 div */}
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <div>
                            <DaumPostcode name={useraddr} value={useraddr} onChange={onChange} style={postCodeStyle} onClose={closePostCode} onComplete={handlePostCode}  />
                        </div>
                        {/* // 닫기 버튼 생성기능 */}
                        <button type='button' onClick={closePostCode} id='postCode_btn'>X</button>

                    </PopupDom>
                )}
            </div>
        </div>
        <input id='useraddr' className='addr' readOnly value={adress} placeholder='주소' />
        
    </>
    )
}

export default PostApi;