import DonationHeader from './DonationHeader';
import DonationBody from './donationBody'
import Style from './donationBody.module.css';

function Donation() {
    return (
        <div style={{width:"100%"}}>
            <div className={Style.whiteSpace}></div>
            <DonationHeader/>
            <DonationBody/> 
        </div>
    )
}
export default Donation 