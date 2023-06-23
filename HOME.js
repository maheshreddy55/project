import React from "react";
import "./HOME.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "./images/photo.jpg";

import { useNavigate } from "react-router-dom";
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '480px',
    
  }
  const slideImages = [
    {
      url: 'https://www.cafecoffeeday.com/sites/default/files/1920x760%20%281%29.jpg',
      
    },
    {
      url: 'https://www.cafecoffeeday.com/sites/default/files/R-SB23-Website%20Banner-1.png',
      
    },
    {
      url: 'https://www.cafecoffeeday.com/sites/default/files/SB23-Website%20Banner-2.png',
      
    },
  ];

let Home=()=>{
    let n=useNavigate()
    
       
    let Gohome=()=>{
        n('/')
        
    }
    let Goabout=()=>{
        n('/About')
    }
    let Gocontact=()=>{
        n('/Contact')
    }
    let Gologin=()=>{
      n('/login')
  }
  let Gocontac=()=>{
    n('/con')
}




   
    return(
      
        <div class="o9">
        <header>
        <nav>
            <ul style={{textDecoration:'none'}}>
              <img class="chai"   src={img1}/>
              

            <div className="horizontal-list">
      <ul >
      <svg color="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>



        <li  onClick={Gocontac} class="ml"> <b>Menu </b></li>
        <li class="ma" onClick={Goabout}> <b>About </b></li>
        <li class="ma" onClick={Gocontact}> <b>Contact</b></li>
        <li class="ma" onClick={Gologin}> <b>Login </b></li>
        <svg  color="white" xmlns="http://www.w3.org/2000/svg" colo width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
        
        
      </ul>
    </div>
                
                
                
           
            </ul>

            </nav>
        </header>

        <div>
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </div>
          <h1 class = "fol"> follow us</h1>

    <div>
      <a href="https://www.facebook.com/jestadi.pavan.12">
      <button  class ="fa">f</button>
      </a>
    
    
    
      <a href="https://www.instagram.com/jestadipavan2/">
      <button  class ="in">f</button>
      </a>
    
    
    
      <a href="https://www.youtube.com/watch?v=v97lei_HEGE">
      <button  class ="ut">f</button>
      </a>
    
    
    
      <a href="https://twitter.com/i/flow/single_sign_on">
      <button  class ="vt">f</button>
      </a>
    </div>
  
    
    </div>
   
        
    
    )
}
export default Home;
