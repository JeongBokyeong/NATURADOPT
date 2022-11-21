import Style from './NaturaHouse.module.css';
import Img01 from './Imgs/NaturaHouse.png';
import Img02 from './Imgs/NaturaHouseHover.jpg'
import chatIcon from './Imgs/ChatIcon.png';
import {Link} from 'react-router-dom';

function NaturaHouse(){
    return(
        <div className={Style.NaturaHouse}>
            <img src = {Img01} alt="NaturaHouse" className={Style.NaturaHouseImg}/>
            <img src = {Img02} alt="NaturaHouse" className={Style.NaturaHouseImg}/>
            <Link to = './TutorialChat'><img src = {chatIcon} alt="NaturaHouse" className={Style.chatIcon}/></Link>

        </div>
    );
}
export default NaturaHouse; 