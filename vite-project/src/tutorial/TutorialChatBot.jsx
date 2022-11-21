import Search from "./TutorialChatBot.module.css";
import {Link} from "react-router-dom";
import MainImg from './Imgs/chatMain.png';
import MainImgH from './Imgs/chatMainHover.png';
import chatBox from './Imgs/chatBox.png';
import Chatbot from './index.jsx';
import Style from "./TutorialChatBot.module.css";

function chatBot() {
    const steps = [
        {
            id: '0',
            message: 'Hey!',
            end: true
        }
    ];
    return (
        <div className={Style.TutorialChat}>
            <img src={MainImg} alt="TutorialChat" className={Style.TutorialChatImg}/>
            <img src={MainImgH} alt="TMainImgH " className={Style.TutorialChatImg}/>
            {/* <img src={chatBox} alt="chatBox" className={Style.chatBox}/> */}
            
            <div className={Style.Chatbot}><Chatbot/></div>
        </div>
    );
}

export default chatBot;