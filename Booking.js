import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




var Book=()=>{
    let n=useNavigate("")
    let user=localStorage.getItem("usname");
    const [fplace, setplace] = useState('');
    const [ftime, settime] = useState('');
    const [fcup, setcup] = useState('');
    
    
    let Bok=async(e)=>{
        e.preventDefault();
        let data={name:user,place:fplace,tim:ftime,cup:fcup}
        let result=await axios.post('http://localhost:8080/order/orderpost',data)
        alert(result.data);

        if(result.data=="inserted")
         n("/succes")
    }
    return(
        <div>

            <h1>
                BOOK and RELEX!!!
            </h1>
            <form>
                enter the place to delivery<input type="text"  value={fplace} onChange={(e) => setplace(e.target.value)} placeholder="place"></input>
         <br></br>      
          <select value={ftime} onChange={(e) => settime(e.target.value)}  name="Select timing" id="cars">
          <option value="">select timing</option>
  <option value="6">6'o clock</option>
  <option value="7">7'o clock</option>
  <option value="8">8'o clock</option>
</select><br></br> <br></br>
         Number of CUPS you wise!:<input type="number" value={fcup} onChange={(e) => setcup(e.target.value)}  placeholder="number"></input>
        <br></br><br></br><button onClick={Bok} >order</button>
            </form>
        </div>
    )
}

export default Book;