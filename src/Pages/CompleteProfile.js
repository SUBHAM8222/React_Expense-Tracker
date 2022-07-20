import { useRef } from "react";
import React from "react";
import "./CompleteProfile.css";
const CompleteProfile = () => {
  const inputfullnameref = useRef();
  const imageurlref = useRef();

  const onsubmitHandler = (event) => {
    event.preventDefault();
    console.log('kuch bhi')
    const fullname = inputfullnameref.current.value;
    const imageUrl = imageurlref.current.value;
    const token =localStorage.getItem('IDTOKEN');

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDvw0A-v_9F2Unb81eL4qV9KSPayWoxBO4',{
        method: 'POST',
        body:JSON.stringify({
            idToken:token,
            displayName: fullname,
            photoUrl: imageUrl,
            returnSecureToken: true,
        
          }),
          headers:{
            'Content-Type': 'application/json'
          }}).then(res=>{
            console.log(res);
          })

  };

  return (
    <React.Fragment>
      <div>
        <div className="style3">
          Winners never quits,quitters Never wins
          <div className="style4">please complete your Profile</div>
        </div>
      </div>
      <div>
        <div className="style3">
          <div className="style4">
            <form onSubmit={onsubmitHandler}>
              <label for htmlFor="fullname">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  className="photo"
                ></img>
                FULLNAME
              </label>
              <input
                type="fullname"
                placeholder="Fullname"
                ref={inputfullnameref}
                required
              />
              <label for htmlFor="url">
                ImageUrl
              </label>
              <input type="url" placeholder="url" ref={imageurlref} required />
              <button type='submit'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompleteProfile;
