import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
let Menu=()=>{
    let n=useNavigate()
    
       
    let Gotea=()=>{
        n('/tea')
        
    }
    let Godesart=()=>{
        n('/desart')
    }
    let Gopufs=()=>{
        n('/pufs')
    }
return(

<div class="men">
    <div>
<button class="tea"  onClick={Gotea} > <b> <h1>TEA & COFFEE </h1></b></button>
</div>
<div>
<button  class="desart" onClick={Godesart}> <b><h1>ICE CREAMS</h1> </b></button>
</div>
<div>
<button  class="pufs" onClick={Gopufs}> <b><h1>ALL-TIME-SNACKS </h1></b></button>
</div>
        
</div>



)
}
export default Menu;