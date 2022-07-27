import './WelcomePage.css';
//import { useState,} from 'react';
import { NavLink} from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
const WelcomePage=()=>{
   const token=useSelector(state=>state.auth.IDTOKEN)
    const verifyemailhandler=()=>{
       // isverified(true);
       

       fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4',
       {

        method: 'POST',
        body:JSON.stringify({
           
        idToken:token,
        requestType:'VERIFY_EMAIL',
          }),
          headers:{
            'Content-Type': 'application/json'
        
       }
    }
       
       ).then(res=>{
        if(res.ok)
        {
            alert('check your email for verification');
        }
        else{
            alert('aunthentication failed');
        }
       })
    }

    // const otpverifyhandler=()=>{
    //     isverified(false);

    //     const enteredOTP=otpinputref.current.value;

    //     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4',{
    //         method: 'POST',
    //     body:JSON.stringify({
           
    //         oobCode:enteredOTP,
    //       }),
    //       headers:{
    //         'Content-Type': 'application/json'
        
       //}


// 
    //     }).then(res=>{
    //         if(res.ok)
    //         {
    //             console.log('not verifed');
    //             alert('Error');
    //         }
    //     })

    // }

    
    return(
<div>
        <div className='style'>
            WElCOME TO EXPENSE TRACKER
            <button style={{color:'black',backgroundColor:'greblacky'}} onClick={verifyemailhandler}>verify Email</button>
           {/* { verifyemail&&<form>
                <input type='number' ref={otpinputref}></input>
                <button onClick={otpverifyhandler}>EnterOTP</button>
            </form>} */}
             
            <div className='style2'>YOUR profile is incomplete <NavLink to='/CompleteProfile'>complete Now</NavLink>
            
            </div>
            <LogoutButton/>
        </div>
       
        </div>

    )
}

export default WelcomePage;