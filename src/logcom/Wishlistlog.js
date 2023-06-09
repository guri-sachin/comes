
import './App.css';
import Headerlog from './Headerlog';
import jquery from "jquery";
import Footer from './Footer';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function App() {
    const [name, setName] = useState("");
    const [products, setProducts] = useState([]);
function gh(){
    alert("heloo")
}
useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data)
   setName( data.data[0].fullname);
console.log(name)
  }, []);


useEffect(() => {
    var data = {"email":name}
    console.log(data)
    axios.post("http://localhost:4200/wishlist",data).then(
      res=>  setProducts(res.data))
   
  }, [products]);
  console.log(products)

function Clear(){
  var data = {"email":name}
  console.log(data)
  axios.post("http://localhost:4200/deletewish",data).then(
    res=>  console.log(res.data))
 

}



  return (
    <>
    <div>
<Headerlog></Headerlog>
  

<section>
<div class="ab68">
<div class="container-fluid">
<div class="row">
<div class="col-md-4">
<div class="row">
<div class="col-md-2"><a href="Wishlistlog"><img src="images/wishlist1.jpg"/></a></div>
<div class="col-md-10 ">
<div class="ab65"><a href="Wishlistlog">My Wishlist <i class="fa fa-arrow-right"></i></a></div>
<div class="ab66"><a href="Wishlistlog">Your Favourites All in One<br/> Place</a></div>
</div>
</div>
<div class="ab67"></div>

<div class="row">
<div class="col-md-2"><a href="Recentview"><img src="images/view.jpg"/></a></div>
<div class="col-md-10 ">
<div class="ab69"><a href="Recentview">Recently Viewed </a></div>
<div class="ab66"><a href="Recentview">View Your Browsing History</a></div>
</div>
</div>
</div>
<div class="col-md-8">
    

<div class="ab70">
<div class="container-fluid">
{products.length> 0 ? products.map((item, k) => (
                  <td key={k} >
<div class="row">
<div class="col-md-4">
  
<td style={{paddingRight:"10px"}}><img  src={item.image.split(",")[0]} width="150" height="150"/></td>
<div class="ab34">

<div class="button">
  <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
    <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
    <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
    <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
    <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
    <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
    <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
    <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
  </g>
</svg>
</div>
 



</div>
<div class="ab35"><td>{item.name}</td></div>

<div class="ab103"></div>
<div class="ab36">Today's Deal</div>
<div class="ab37"><td>₹{item.price}</td></div>

</div>

</div>

</td>
)):<h1 class="text-center">YOUR Wishlist IS empty</h1> }

<div class="row ab102" >

</div>
</div>
<div class="ab43"></div>
<div class="ab71"><button class="btn btn-warning" onClick={Clear}>Clear Wishlist</button></div>
<div class="ab72"></div>
<button type="button" class="btn btn-primary ab73">EXPLORE MORE PRODUCTS</button>
</div>

</div>
</div>
</div>
</div>
</section>

<Footer></Footer>
</div>
    </>
  );
}

export default App;
