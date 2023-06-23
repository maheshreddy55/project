import React, { useState } from 'react';
import './akil.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



function Cop() {
  const [username, setUsername] = useState('');
  const [fpassword, setPassword] = useState('');

  localStorage.setItem("usname",username);
  
    let n=useNavigate()
    const Gohome = async (e) => {  
      e.preventDefault()
      if(username=='') {
          alert('please enter username')
      }
      else if(fpassword=='') {
                  alert('please enter password')
              }
              else {
                   
                  let result=await axios.post("http://localhost:8080/Signdata/login/"+username+"/"+fpassword)
                  alert(result.data)
                  if(result.data=="success"){
                    n('/')
                  }
                 
              }




       
    }
    // let Gorder=()=>{
    //     n('/order')
    // }
    let GoSignin=()=>{
      n('/Roof')
  }

  return (
    <div className="Pop">
      <form className="login-form">
        <h2 class="hea">Login</h2>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
       
        <input
          type="password"
          placeholder="Password"
          value={fpassword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       
<button onClick={Gohome}  type="button" value="/">Login</button>
        
        
  </form>
  <div className='gou'>
  <button onClick={GoSignin}  type="button" value="Roof">Signup</button>
  </div>
    </div>
  );
}

export default Cop;