import React, { useState } from 'react';
import './signin.css';
 import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Rool() {
  const [fname, setUsername] = useState('');
  const [femail, setEmail] = useState('');
  const [fpassword, setPassword] = useState('');

  
   let n=useNavigate()
     let Gohome=async(e)=>{
      e.preventDefault();

      if(fname=='')
     {
        
        alert('please enter username' )
     }
     else if(femail=='')
     {
        alert('please enter email id' )
     }
     else if(fpassword=='')
     {
        alert('please enter password' )
     }
     else{
        let data={name:fname,email:femail,password:fpassword}
        let result=await axios.post('http://localhost:8080/Signdata/logindara',data)
        alert(result.data)
        if(result.data=="added"){
          n("/login")
        }
       
     }

       
     }
  return (
    <div className="Pup">
      <form className="login-for">
        <h2>SignUp</h2>
        <input
          type="text"
          placeholder="Username"
          value={fname}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={femail}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={fpassword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <button Onclick={Gohome}  type="button" value="/">SignUp</button> */}
      </form>
      <div>
      <button onClick={Gohome}  className=" avv" type="button">SignUp</button>
      </div>
    </div>
  )
  
}


export default Rool;