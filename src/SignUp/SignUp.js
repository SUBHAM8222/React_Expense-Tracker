import React,{useState,useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './SignUp.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authsliceactions } from '../Store.js/Index';

const SignUp = () => {

    const login=useSelector(state=>state.auth.loggedIn)
    const dispatch=useDispatch();
    
    const inputEmailRef = useRef();
    const inputPassRef = useRef();
    const inputConfirmPassRef = useRef();
    const history=useHistory();

    //const [isLogin, setIsLogin] = useState(true);
    const [isLoading,setIsLoading] =useState(false);
    const switchAuthModeHandler = () => {
       dispatch(authsliceactions.isloggedIn())
      };
    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredEmail = inputEmailRef.current.value;
        const enteredPassword = inputPassRef.current.value;

        if(enteredPassword!==inputConfirmPassRef.current.value){
            alert("Confirm Password is not Same");
            return;
        }
        let url;
        setIsLoading(true);
        if(login){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4"
        }
       else{
       url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4"
       }
       fetch(url,{
            method: 'POST',
            body:JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
              }),
              headers:{
                'Content-Type': 'application/json'
              }
        }).then(res=>{
            setIsLoading(false)
            if(res.ok){
               
                console.log(res)
                alert('Successfully Registered')
               
                return res.json()
            }
            else{
                return res.json().then(data => {
                    console.log(data.error.message)
                    alert(data.error.message)
                    
                })
            }
        }).then((data)=>{
    //         authCtx.login(data.idToken,data.email);
       dispatch(authsliceactions.tokenId(data.idToken))
       history.replace('/WelcomePage');
    })
    }



    




  return (
        <div className='signupBody'>
            <h2>{login ?'Login' : 'Sign Up'}</h2>
            <form onSubmit={submitHandler}>
             
                <input type="email" placeholder='Email' ref={inputEmailRef} required />
               
                <input type="password" placeholder='Password' ref={inputPassRef} required  />
               
                <input type="password" placeholder='Confirm Password' ref={inputConfirmPassRef} required />
                { !isLoading && <button>{login ? 'Login' : 'Create Account'}</button>}
         {isLoading && <p>Loading..</p>}
         <button
            type='button'
            className='signupBtn'
            onClick={switchAuthModeHandler}
          >
              {login ? 'Create new account' : 'Login with existing account'}
         </button>
              { login&&<NavLink to='/ChangePassword'>forget password?click</NavLink>}
            </form>
            
        </div>
    );
};

export default SignUp;