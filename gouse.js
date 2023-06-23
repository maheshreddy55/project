import React from "react";
import "./pop1.css";
import { useNavigate } from "react-router-dom";


let About=()=>{
    let n=useNavigate()
    let Gohom=()=>{
        n('/')
    }
    let Gorder=()=>{
        n('/order')
    }


   
    return(
        <div >
        <header>
        <nav>
            <ul style={{textDecoration:'none'}}>
                
                
                 
            </ul>

            </nav>
        </header>

           <div >
           
    
    <div class=" back">
     <p class="menu"> <u>MENU LIST </u></p>
     

    
<button class="b" >.</button>
<button class="c" >.</button>
<button class="d" >.</button>
<button class="e" >.</button>
<button class="f" >.</button>

<button onClick={Gorder}class="g1" >tea</button>
<button onClick={Gorder}class="h1" >lemon tea</button>
<button onClick={Gorder}class="i1" >black tea</button>
<button onClick={Gorder}class="j1" >green tea</button>
<button onClick={Gorder}class="k1" >masala tea</button>

<button class="l" >.</button>
<button class="m" >.</button>
<button class="n" >.</button>
<button class="o" >.</button>
<button class="p" >.</button>

<button onClick={Gorder}class="q1" >Mint tea</button>
<button onClick={Gorder}class="r1" >Ginger tea</button>
<button onClick={Gorder}class="s1" >Black Roast Coffee</button>
<button onClick={Gorder}class="t1" >Cappuccino Coffee</button>
<button onClick={Gorder}class="u1" >cold Coffee</button>



    </div>

            
           </div>
        
        </div>
    )
}
export default About;