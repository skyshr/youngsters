import React, {Component, useState} from 'react';
import PopupDom from './PopupDom';
import PopupContent from './PopupContent';
 
import './Style.css'

export default function Main() {
    const [state, setState] = useState(false)

    // let openPopup = openPopup.bind();
    // let closePopup = closePopup.bind();

    const openPopup = () => {
        setState(true);
        // openPopup.bind(Main)
    }

    // openPopup.bind(state)

    const closePopup = () => {
        setState(false);
        // closePopup.bind(Main)
    }
    // closePopup.bind(state)

    return(
        <div>
            <h2>Open Popup</h2>
            <div>
                <button type="button"
                        id="popupDom"
                        onClick={openPopup}
                >
                    Click
                </button>
                {state &&
                    <PopupDom>
                        <PopupContent onClose={closePopup}/>
                            {/* <div>
                                <button type="button" onClick={closePopup}>close</button>
                            </div> */}
                    </PopupDom>
                }
            </div>
        </div>
    );
    
}
// class Main extends Component {
//     constructor(props){
//         super(props);
        
//         this.state = {
//             isOpenPopup: false,
//         }
 
//         this.openPopup = this.openPopup.bind(this);
//         this.closePopup = this.closePopup.bind(this);
//     }
 
//     openPopup(){
//         this.setState({
//             isOpenPopup: true,
//         })
//     }
 
//     closePopup(){
//         this.setState({
//             isOpenPopup: false,
//         })
//     }
 
//     render(){
//         return(
//             <div>
//                 <h2>Open Popup</h2>
//                 <div>
//                     <button type="button"
//                             id="popupDom"
//                             onClick={this.openPopup}
//                     >
//                         Click
//                     </button>
//                     {this.state.isOpenPopup &&
//                         <PopupDom>
//                             <PopupContent onClose={this.closePopup}/>
//                         </PopupDom>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
//  
// export default Main;