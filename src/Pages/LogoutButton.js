import { useHistory } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { authsliceactions } from "../Store.js/Index";
const LogoutButton=()=>{

const history=useHistory();
const dispatch=useDispatch();

    const logoutHandler=()=>{
       
    dispatch(authsliceactions.deletetokenId());
        history.replace('/');
    }
    return(
<header>
    <button onClick={logoutHandler}>Logout</button>
</header>

    )
};
export default LogoutButton;
