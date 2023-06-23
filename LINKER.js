import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HOME";



import About from "./gouse";
import Cop from "./akil";
import Menu from "./menu";
import Desart from "./page5";
import Pufs from "./page6";
import Order from "./order";
import Last from "./last";
import Above from "./about";
import Contact from "./contact";
import Roof from "./Signin";
import Rool from "./Signin";
import Book from "./Booking";
var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/succes" element={<Order/>}></Route>
       
            <Route path="/con" element={<Menu/>}></Route>
            <Route path="/tea" element={<About/>}></Route>
            <Route path="/Bookingpage" element={<Book/>}></Route>
            <Route path="/desart" element={<Desart/>}></Route>
            <Route path="/pufs" element={<Pufs/>}></Route>
            <Route path="/order" element={<Last/>}></Route>
            <Route path="/price" element={<Order/>}></Route>
            <Route path="/login" element={<Cop/>}></Route>
            <Route path="/Roof" element={<Rool/>}></Route>
            <Route path="/About" element={<Above/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
            
            
            
           
           
           
            
          
          
        
        </Routes>
        </BrowserRouter>
    )
}
export default Path;