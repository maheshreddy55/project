

import React from "react";
import "./last.css";
import { useNavigate } from "react-router-dom";
let Last=()=>{
    


    let n=useNavigate()
    let Goorder=()=>{
        n('/orde')
    }
    let Goprice=()=>{
        n('/Bookingpage')
    }
    let Godone=()=>{
        n('/done')
    }
    
   
   
    
    return(
        
        <div class="last" >

                 
<button class="las" > Price 45/-</button>


<input class="lh" type="number" id="text1" placeholder="no.items"/>
<button  class ="la"onClick={Goprice}> ORDER</button>

            

 <h2 class="para">A healthy diet is essential for good health and nutrition.<br></br> 
    It protects you against many chronic noncommunicable diseases, <br></br>
    such as heart disease, diabetes and cancer.<br></br>
     Eating a variety of foods and consuming less salt,<br></br> 
     sugars and saturated and industrially-produced trans-fats, <br></br>
     are essential for healthy diet.
</h2>
        
        </div>
    )
}
export default Last;
