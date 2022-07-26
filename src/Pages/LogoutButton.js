import { useHistory } from "react-router-dom";
import React from "react";
const LogoutButton=()=>{

const history=useHistory();

    const logoutHandler=()=>{
        localStorage.removeItem('IDTOKEN');
    
        history.replace('/');
    }
    return(
<header>
    <button onClick={logoutHandler}>Logout</button>
</header>

    )
};
export default LogoutButton;
