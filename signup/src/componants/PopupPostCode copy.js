import React from 'react';
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
        height: "410px",
        border : "1px solid black"
      };

    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            {/* // 닫기 버튼 생성 */}
            <button type='button' onClick={() => {props.onClose()}} id='postCode_btn'>X</button>
            <input placeholder='주소'/>
            <input placeholder='상세주소'/>
        </div>
    )
}

export default PopupPostCode;