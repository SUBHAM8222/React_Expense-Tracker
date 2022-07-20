import './WelcomePage.css';
import { NavLink } from 'react-router-dom';
const WelcomePage=()=>{


    return(
<div>
        <div className='style'>
            WElCOME TO EXPENSE TRACKER
            <div className='style2'>YOUR profile is incomplete <NavLink to='/CompleteProfile'>complete Now</NavLink></div>
        </div>
       
        </div>

    )
}

export default WelcomePage;