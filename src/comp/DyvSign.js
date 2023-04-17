import './Dyv.css';
import './App.css';
import Header from './Header';

import Swal from "sweetalert2";
import {Form,Button,Navbar,nav,Container,Carousel,Table,Card,Row,Col} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Slider from "react-slick";


import {BrowserRouter,Link,Routes,Route,MemoryRouter, NavLink} from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';

function Product() {
  const  [name, setName] =useState('');
    const  [email, setEmail] =useState('');
    const  [password, setPassword] =useState('');
    const navigate = useNavigate();


    function handelDemo2(e)
    {
        setPassword(e.target.value);
    }
    function handelDemo3(e)
    {
        setEmail(e.target.value);
        console.log("email");
    }
    function handelDemo1(e)
    {
        setName(e.target.value);
       
    }


    async function Show1(e)
    {

  
        const data2 ={"name":name,"email":email,"password":password};
        
        const config = {
            method :'POST',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
         },
            body: JSON.stringify(data2)
         }
      
    const response = await fetch ('http://localhost:4200/sign',config)
   
    const data3 = await response.json();


    console.log(data3)

   if(data3.status==="success"){
     
   
    sessionStorage.setItem("data", JSON.stringify(data3));
   
     navigate("/Appo", { state: data3 });
   }
      
        }
  
        function jigo(){
            navigate("/Dyv")
          }
  
  return (
    <div>
 <div class="wrapper fadeInDown">
  <div id="formContent">
  
    <h2 class="active" onClick={jigo}> Sign In </h2>
    <h2 class="inactive underlineHover">Sign Up </h2>

   
   

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Name" onChange={handelDemo1}/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="Email" onChange={handelDemo3} />
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Password" onChange={handelDemo2}/>

      <input type="button" class="fadeIn fourth" value="Sign Up"  onClick={Show1}/>
    </form>


    <div id="formFooter">
     
    </div>

  </div>
</div>
    </div>
    
  );
}

export default  Product;
