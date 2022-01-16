import React from 'react';
import './Style1.css'
 
export default function PopupImgContent(props){
    return(
        <div className="dimmed_layer_wrapper">
            <div className="full_layer" >
                <div className="common_alert_main" style={{top: "10%", width: "470px", height: "540px", backgroundColor: "gray"}}>
                    <div>
                        <div style={{justifyContent:"center"}}>
                            <img src={props.img} alt="img" style={{paddingRight: "7%", width: "440px", height: "440px", margin: "auto"}}/>
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
 