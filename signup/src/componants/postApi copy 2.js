import React, { useState } from 'react';
import PopupDom from './PopupDom';
import '../css/signup.css';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.bname !== '') {
            extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress)
        props.onClose()
    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top :"0%",
        left : "0%",
        width: "450px",
        height: "412px",
        border : "1px solid black"
    };

    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            {/* // 닫기 버튼 생성기능 */}
            <button type='button' onClick={() => {props.onClose()}} id='postCode_btn'>X</button>
        </div>
    )
}

const PostApi = () => {
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

    return(
        <>
        <div id='wrap-post-search-btn'>
        	{/* 버튼 클릭 시 팝업 생성 */}
            <button type='button' id='post-search-btn' onClick={openPostCode}>주소 찾기</button>
            {/* 팝업 생성 기준 div */}
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
        </div>
        <input className='addr' placeholder='주소' />
        <input className='addr' placeholder='상세주소' />
    </>
    )
}

export default PostApi;