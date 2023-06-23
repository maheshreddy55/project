import React from "react";
import "./pop2.css";

import { useNavigate } from "react-router-dom";


let Desart=()=>{
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

        
    <div class=" back2">
     <p class="menu2"> <u>ICE CREAMS </u></p>
     

    
<button class="b1" >.</button>
<button class="c1" >.</button>
<button class="d1" >.</button>
<button class="e1" >.</button>
<button class="f1" >.</button>

<button onClick={Gorder} class="g2" >All Mix Ice cream</button>
<button onClick={Gorder} class="h2" >chocolate cone</button>
<button onClick={Gorder} class="i2" >Strawberry cone</button>
<button onClick={Gorder} class="j2" >three scoops</button>
<button onClick={Gorder} class="k2" >Kulfi</button>

<button class="l1" >.</button>
<button class="m1" >.</button>
<button class="n1" >.</button>
<button class="o1" >.</button>
<button class="p1" >.</button>

<button onClick={Gorder} class="q2" >Falooda</button>
<button onClick={Gorder} class="r2" >Frozen Yogurt</button>
<button onClick={Gorder} class="s2" >Sorbet</button>
<button onClick={Gorder} class="t2" >Buttorscotch</button>
<button onClick={Gorder} class="u2" >Ice cream Bar</button>



    </div>
    </div>

    )
}
export default Desart;