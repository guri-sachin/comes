
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useHistory} from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import {Form,Button,Navbar,Nav,Container,Carousel,Table} from 'react-bootstrap';


import BB from './BB';
import BC from './BC';

function Admin()
{
console.log(sessionStorage.getItem("data"))
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem("data") == null)
    {
      navigate('./Login')
    }
  },[])

  const  [username,setUsername] =useState('');
 
  const [products,setProducts] =useState([]);



function handel(e){
  setUsername(e.target.value);
  console.log(username)
}

function Searh(){
  var data ={"username":username};
console.log(data);
 //  axios.get(`http://54.150.175.15:3306/search/${data}`).then(
   //    res=> //setProducts(res)
     //  console.log(res)
     
     axios.post("https://api.shieldradr.com:3001/searchm",data).then(
      res=>  
       setProducts(res.data)
    
       
  )
  console.log(products)
}


function Out(){
  sessionStorage.removeItem('data');
  navigate("/Login")
}



   return(
    <>
    <Routes >

 
     
      
      <Route exact path="BB" element={<BB />}></Route>
      <Route exact path="BC" element={<BC />}></Route>
  
    
    </Routes>

 <div  className="bg-dark " style={{height:"100px"}}>
<ul class="nav justify-content-center">
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link " href="BB">Active</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="/BC">Link</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Disabled</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Disabled</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Disabled</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item" style={{paddingTop:"20px"}}>
    <a class="nav-link" href="#">Disabled</a>
  </li>
</ul>










</div>    
</> 
   );

}
export default Admin;
