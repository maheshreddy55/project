import React from "react";
import "./page6.css";

import { useNavigate } from "react-router-dom";


let Pufs=()=>{
    let n=useNavigate()
    let Gohome=()=>{
        n('/')
    }
    let Gorder=()=>{
        n('/order')
    }
   
   
    
 return(
        <div class="ok">
        <header>
        <nav>
            <ul style={{textDecoration:'none'}}>
          
                
                
                
            </ul>

            </nav>
        </header>

        
    <div class=" back1">
     <p class="menu1"> <u>MENU LIST </u></p>
     

    
<button  class="b41" >.</button>

<button class="c41" >.</button>
<button class="d41" >.</button>
<button class="e41" >.</button>
<button class="f41" >.</button>

<button  onClick={Gorder} class="g5" >Cheese burger</button>

<button  onClick={Gorder}class="h5" >Meat burger</button>
<button  onClick={Gorder}class="i5" >Bean burger</button>
<button  onClick={Gorder}class="j5" >Wild salmon burger</button>
<button  onClick={Gorder}class="k5" >Turkey burger</button>

<button class="l4" >.</button>
<button class="m4" >.</button>
<button class="n4" >.</button>
<button class="o4" >.</button>
<button class="p4" >.</button>

<button onClick={Gorder} class="q5" >Supreme pizza</button>
<button  onClick={Gorder}class="r5" >Cheese pizza</button>
<button  onClick={Gorder}class="s5" >Veggie pizza</button>
<button  onClick={Gorder}class="t5" >Chicken pizza</button>
<button  onClick={Gorder}class="u5" >Works pizza</button>



    </div>
    </div>
)
}
export default Pufs;