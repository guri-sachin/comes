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
    const  [email, setEmail] =useState('');
    const  [password, setPassword] =useState('');
    const [products3,setProducts3] =useState('');
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


    async function Show1(e)
    {
     
   console.log(e.target.value)
   console.log(e.target.name)
   console.log(e.target.email)
   
        const data2 ={"email":email,"password":password};
        
        const config = {
            method :'POST',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
         },
            body: JSON.stringify(data2)
         }
      
    const response = await fetch ('http://localhost:4200/userlog',config)
   
    const data3 = await response.json();
    console.log(data3.data[0].toString())
 
   if(data3.status==="success"){

sessionStorage.setItem("data", JSON.stringify(data3));
   
     navigate("/Frontlog", { state: data3 });
     console.log(data3)
   }else{
     console.log("not");
     Swal.fire({
       icon: 'warning',
       // title: 'Password Changed',
       text: "wrong email or password",
   })


 
 }
 console.log(data3.data[0].fullname)
  var fullname =data3.data[0].fullname;
 console.log(fullname)
 var data = {"fullname":fullname}
const config1 = {
 method :'POST',
 headers:{
 'Accept':'application/json',
 'Content-Type':'application/json',
},
 body: JSON.stringify(data)
}

const responses = await fetch("http://localhost:4200/card",config1);

const data1 = await responses.json();

console.log(data1);

sessionStorage.setItem("dage", JSON.stringify(data1.length));
setProducts3(data1)
        }
  
        function jigo(){
          navigate("/DyvSign")
        }

  
  return (
    <div>
 <div class="wrapper fadeInDown">
  <div id="formContent">
  
    <h2 class="active"> Sign In </h2>
    <h2 class="inactive underlineHover" onClick={jigo}>Sign Up </h2>

   
   

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={handelDemo3}/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={handelDemo2} />
      <input type="button" class="fadeIn fourth" value="Log In" name="jj" email="d" onClick={Show1}/>
    </form>


    <div id="formFooter">
      <a class="underlineHover" href="Forgot"></a>
    </div>

  </div>
</div>
    </div>
    
  );
}

export default  Product;
