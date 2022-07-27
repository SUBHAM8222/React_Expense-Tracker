import { useEffect, useRef, useState } from "react";
import React from "react";
import "./CompleteProfile.css";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import Expensesform from "../Expensesform";
import { useSelector } from "react-redux";

const CompleteProfile = () => {

  const token=useSelector(state=>state.auth.IDTOKEN)
  const [userData,setUserData]=useState();
  const inputfullnameref = useRef();
  const imageurlref = useRef();
  

  useEffect(()=>{
fetchData()

  },[])


  const onsubmitHandler = async(event) => {
    event.preventDefault();

    const fullname = inputfullnameref.current.value;
    const imageUrl = imageurlref.current.value;
    const token = localStorage.getItem("IDTOKEN");

 const data=await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4",
      
        
       {
          idToken: token,
          displayName: fullname,
          photoUrl: imageUrl,
          returnSecureToken: true,
        })
      
      
   
        console.log(data.data);
        console.log(data.data.email);
    
   
  };
  const fetchData = async () => {
    const data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4",
      { idToken: token });
     // console.log(data.data.users);
      setUserData(data.data.users[0]);

      
   
  };
  // fetch(
  //   "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       idToken: token,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // ).then((res) => {
  //   return res.json().then((data) => {
      // const fullnamee = data.users[0].displayName;
      // const Urll = data.users[0].photoUrl;
      // localStorage.setItem("fullname", fullnamee);
      // localStorage.setItem("url", Urll);
  //   });
  // });
console.log(userData);
  return (
    <React.Fragment>
      <div>
        <div className="style3">
          Winners never quits,quitters Never wins
          <div className="style4">please complete your Profile</div>
          <LogoutButton />
        </div>
      </div>
      <div>
        <div className="style3">
          <div className="style4">
            <form onSubmit={onsubmitHandler}>
              <label for htmlFor="fullname">
                {/* <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className="photo"
                ></img> */}
                FULLNAME
              </label>
              <input
                type="fullname"
                placeholder="Fullname"
                ref={inputfullnameref}
                value={userData?.displayName}
                required
              />
              <label for htmlFor="url">
                ImageUrl
              </label>
              <input
                type="url"
                placeholder="url"
                ref={imageurlref}
                value={userData?.photoUrl}
               
                required
              />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      
        <Expensesform/>
     
    </React.Fragment>
  );
};

export default CompleteProfile;
