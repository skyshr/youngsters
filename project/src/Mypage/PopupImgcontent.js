import React from 'react';
 
export default function PopupImgContent(props){
    return(
        <div className="dimmed_layer_wrapper">
            <div className="full_layer" >
                <div className="common_alert_main" style={{width: "470px", height: "540px", backgroundColor: "gray", marginTop: "1%"}}>
                    <div>
                        <div style={{justifyContent: "center"}}>
                            <img src={props.img} alt="img" style={{width: "460px", height: "530px"}}/>
                        </div>
                        <div>
                            <button type="button" onClick={props.onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 